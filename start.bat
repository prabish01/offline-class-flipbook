@echo off
cd /d "%~dp0"
echo =========================================
echo   SilverStone Capital - Flipbook Launcher
echo =========================================
echo.

:: Get local IP address
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4" ^| findstr /v "127.0.0.1"') do (
    set LAN_IP=%%a
    goto :found_ip
)
:found_ip
set LAN_IP=%LAN_IP: =%

:: Try Python
python --version > nul 2>&1
if %errorlevel% == 0 (
    goto :run_python
)
python3 --version > nul 2>&1
if %errorlevel% == 0 (
    set PYTHON_CMD=python3
    goto :run_python3
)
node --version > nul 2>&1
if %errorlevel% == 0 (
    goto :run_node
)

echo ERROR: Python or Node.js is required.
echo.
echo Install Python (recommended): https://python.org/downloads
echo Install Node.js (alternative): https://nodejs.org
echo.
pause
goto :end

:run_python
set PYTHON_CMD=python
:run_python3
echo   This device:     http://localhost:8080
echo   Android tablets: http://%LAN_IP%:8080
echo.
echo Make sure tablets are on the same WiFi as this device.
echo No WiFi? Enable a Hotspot on this laptop:
echo   Settings - Network - Mobile Hotspot - turn ON
echo Close this window to stop the server.
echo =========================================
echo.
start /b "" powershell -WindowStyle Hidden -Command "Start-Sleep 2; Start-Process 'http://localhost:8080'"
%PYTHON_CMD% -m http.server 8080
goto :end

:run_node
echo   This device:     http://localhost:8080
echo   Android tablets: http://%LAN_IP%:8080
echo.
echo Make sure tablets are on the same WiFi as this device.
echo No WiFi? Enable a Hotspot on this laptop:
echo   Settings - Network - Mobile Hotspot - turn ON
echo Close this window to stop the server.
echo =========================================
echo.
start /b "" powershell -WindowStyle Hidden -Command "Start-Sleep 3; Start-Process 'http://localhost:8080'"
npx --yes http-server . -p 8080 --silent

:end
