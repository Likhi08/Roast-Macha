@echo off
echo.
echo ========================================
echo   Roast Macha - Phase 1 Setup
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Installing backend dependencies...
cd backend
if exist node_modules (
    echo Backend dependencies already installed
) else (
    call npm install
    if %errorlevel% neq 0 (
        echo Error: Backend installation failed
        pause
        exit /b 1
    )
)
cd ..

echo.
echo Installing frontend dependencies...
cd frontend
if exist node_modules (
    echo Frontend dependencies already installed
) else (
    call npm install
    if %errorlevel% neq 0 (
        echo Error: Frontend installation failed
        pause
        exit /b 1
    )
)
cd ..

echo.
echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo To start the application:
echo.
echo 1. Open Terminal 1 and run:
echo    cd backend
echo    npm run dev
echo.
echo 2. Open Terminal 2 and run:
echo    cd frontend
echo    npm run dev
echo.
echo 3. Open http://localhost:3000 in your browser
echo.
pause
