#!/bin/bash

echo ""
echo "========================================"
echo "  Roast Macha - Phase 1 Setup"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed"
    echo "Please install from https://nodejs.org/"
    exit 1
fi

echo "Installing backend dependencies..."
cd backend
if [ ! -d "node_modules" ]; then
    npm install
    if [ $? -ne 0 ]; then
        echo "Error: Backend installation failed"
        exit 1
    fi
else
    echo "Backend dependencies already installed"
fi
cd ..

echo ""
echo "Installing frontend dependencies..."
cd frontend
if [ ! -d "node_modules" ]; then
    npm install
    if [ $? -ne 0 ]; then
        echo "Error: Frontend installation failed"
        exit 1
    fi
else
    echo "Frontend dependencies already installed"
fi
cd ..

echo ""
echo "========================================"
echo "  Setup Complete!"
echo "========================================"
echo ""
echo "To start the application:"
echo ""
echo "1. Open Terminal 1 and run:"
echo "   cd backend"
echo "   npm run dev"
echo ""
echo "2. Open Terminal 2 and run:"
echo "   cd frontend"
echo "   npm run dev"
echo ""
echo "3. Open http://localhost:3000 in your browser"
echo ""
