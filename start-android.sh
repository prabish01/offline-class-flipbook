#!/bin/bash
# =========================================
#   FOR ANDROID TABLETS IN THE CLASSROOM
# =========================================
#
# You do NOT need to run this script on the tablet.
#
# Step 1: On the teacher's laptop/PC, run:
#           Windows -> double-click start.bat
#           Mac     -> double-click start.command
#
# Step 2: The server window will show a URL like:
#           http://192.168.x.x:8080
#
# Step 3: On each Android tablet:
#   - Connect to the same WiFi as the teacher's laptop
#   - Open Chrome (or any browser)
#   - Type the URL shown on the teacher's screen
#   - Bookmark it for quick access next time
#
# =========================================
# Only use this script if you want to run the
# server directly from an Android device via Termux.
# =========================================

cd "$(dirname "$0")"
echo "========================================="
echo "  SilverStone Capital - Flipbook (Termux)"
echo "========================================="
echo ""

# Get device IP
DEVICE_IP=$(ip route get 1 2>/dev/null | awk '{print $7; exit}' || hostname -I 2>/dev/null | awk '{print $1}')

start_server() {
    echo "  This device: http://localhost:8080"
    if [ -n "$DEVICE_IP" ]; then
        echo "  On network:  http://$DEVICE_IP:8080"
    fi
    echo ""
    echo "Open one of the above URLs in your Android browser."
    echo "Press Ctrl+C to stop the server."
    echo "========================================="
    echo ""
    # Try to auto-open browser
    if command -v termux-open-url &>/dev/null; then
        (sleep 2 && termux-open-url "http://localhost:8080") &
    fi
}

if command -v python3 &>/dev/null; then
    start_server
    python3 -m http.server 8080
elif command -v python &>/dev/null; then
    start_server
    python -m http.server 8080
else
    echo "Python not found. Install it by running:"
    echo ""
    echo "   pkg install python"
    echo ""
    echo "Then run this script again."
fi
