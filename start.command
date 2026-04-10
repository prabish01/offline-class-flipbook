#!/bin/bash
cd "$(dirname "$0")"
echo "========================================="
echo "  SilverStone Capital - Flipbook Launcher"
echo "========================================="
echo ""

# Get LAN IP
LAN_IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || hostname -I 2>/dev/null | awk '{print $1}')

print_urls() {
    echo "  This device:     http://localhost:8080"
    if [ -n "$LAN_IP" ]; then
        echo "  Android tablets: http://$LAN_IP:8080"
    fi
    echo ""
    echo "Make sure tablets are on the same WiFi as this device."
    echo "No WiFi? Go to System Settings > General > Sharing > Internet Sharing - turn ON"
    echo "Close this window to stop the server."
    echo "========================================="
    echo ""
}

if command -v python3 &>/dev/null; then
    print_urls
    (sleep 2 && open "http://localhost:8080") &
    python3 -m http.server 8080

elif command -v python &>/dev/null; then
    print_urls
    (sleep 2 && open "http://localhost:8080") &
    python -m http.server 8080

elif command -v node &>/dev/null; then
    print_urls
    (sleep 3 && open "http://localhost:8080") &
    npx --yes http-server . -p 8080 --silent

else
    echo "ERROR: Python or Node.js is required."
    echo ""
    echo "Install Python (recommended): https://python.org/downloads"
    echo "Install Node.js (alternative): https://nodejs.org"
    echo ""
    read -p "Press Enter to exit..."
fi
