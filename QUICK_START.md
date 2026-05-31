# 🚀 Roast Macha - Quick Start Guide

## In 30 Seconds

```bash
# Clone/open this folder, then:

# Windows
.\setup.bat

# Mac/Linux
bash setup.sh

# Or manually (two terminals):
cd backend && npm install && npm run dev
cd frontend && npm install && npm run dev

# Open → http://localhost:3000
```

## Usage

1. **Upload a Selfie**
   - Drag & drop a photo
   - Or click to select

2. **Wait for Analysis**
   - 1.2 second loading animation
   - Aura being roasted...

3. **See Results**
   - Your roast (funny insult)
   - Aura score (0-100)
   - 3 vibe tags

4. **Share the Chaos**
   - Copy roast text
   - Download the image
   - Upload another

## What You Get

✅ Dark meme aesthetic UI  
✅ Neon purple/pink/cyan colors  
✅ Smooth animations  
✅ Glassmorphism cards  
✅ Responsive design  
✅ No login required  

## Requirements

- Node.js 18+
- npm or yarn
- A sense of humor

## Troubleshooting

**Port already in use?**
```powershell
# Kill port 3000
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force

# Kill port 5000
Stop-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess -Force
```

**Can't install packages?**
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

**Getting CORS errors?**
- Make sure BOTH backend and frontend are running
- Backend should be on http://localhost:5000
- Frontend should be on http://localhost:3000

## File Locations

- **Backend**: `/backend/server.js` (port 5000)
- **Frontend**: `/frontend/src/` (port 3000)
- **Config**: `vite.config.js`, `tailwind.config.js`

## API Endpoint

**Upload & Roast:**
```
POST /api/roast
Content-Type: multipart/form-data

Response:
{
  "roast": "funny insult...",
  "auraScore": 42,
  "vibes": ["tag1", "tag2", "tag3"]
}
```

## Components

- `HomePage.jsx` - Main page
- `UploadBox.jsx` - File upload area
- `Loader.jsx` - Loading spinner
- `RoastCard.jsx` - Results display

## Ports

- Frontend: `3000`
- Backend: `5000`

## Next Phase

Real AI integration coming next! 🤖

---

**Happy roasting!** 🔥
