# 🔥 Roast Macha - Phase 1 Complete!

## Project Rebuilt: Coffee → Selfies 📸

The project has been completely rebuilt from a coffee roast analyzer to a **Gen Z selfie roasting app**.

## What Changed ✨

### Concept
- ❌ Coffee roast analysis
- ✅ Gen Z selfie roasting (funny insults/jokes)

### Backend Updates

**New Mock Data Structure:**
```javascript
{
  roast: "This selfie looks like your sleep schedule lost a civil war 💀",
  auraScore: 23,
  vibes: ["NPC Energy", "Chronically Online", "Main Character Syndrome"]
}
```

**API Endpoints:**
- `GET /api/health` - Health check
- `POST /api/roast` - Analyze selfie (replaces `/api/roast/analyze`)
- `GET /api/roast/sample` - Get sample data

**5 Mock Roasts included** with Gen Z humor

### Frontend Updates

**Color Theme:**
- ❌ Coffee brown & orange
- ✅ Dark mode with neon purple/pink/cyan

**Components Refactored:**
1. `UploadBox.jsx` (was UploadComponent)
   - Drag-drop selfie upload
   - Real-time preview
   - Dark glassmorphism styling

2. `Loader.jsx` (new)
   - Spinning loader with neon glow
   - "roasting your aura..." text
   - Framer Motion animations

3. `RoastCard.jsx` (new)
   - Display roast result
   - Aura score with color coding
   - Vibe tags as hashtags
   - Share button (copy to clipboard)
   - Download button (save image)
   - New roast button

**Styling:**
- Dark background (`#0a0a0a`)
- Neon gradients (pink → purple → cyan)
- Glassmorphism cards (blur + transparency)
- Smooth transitions with Framer Motion
- Gen Z meme aesthetic

### Dependencies Added
- `framer-motion` - For smooth animations

### Design System

**Colors:**
- `#0a0a0a` - Dark background
- `#ff006e` - Neon pink
- `#8000ff` - Neon purple
- `#00f0ff` - Neon cyan

**Glass Effect:**
```css
backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl
```

**Neon Glow:**
```css
shadow-[0_0_20px_rgba(255,0,110,0.5)]
```

## File Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── UploadBox.jsx       ← Refactored upload
│   │   ├── Loader.jsx           ← New loading spinner
│   │   ├── RoastCard.jsx        ← New results display
│   │   ├── UploadComponent.jsx  ← (old, can delete)
│   │   └── ResultsDisplay.jsx   ← (old, now has Loader code)
│   ├── pages/
│   │   └── HomePage.jsx         ← Completely rewritten
│   ├── App.jsx                  ← Dark background
│   ├── index.css                ← Glassmorphism + dark mode
│   └── main.jsx
├── tailwind.config.js           ← Neon colors added
├── postcss.config.js
├── vite.config.js               ← Proxy configured
└── package.json                 ← framer-motion added

backend/
├── server.js                    ← 5 mock roasts, /api/roast endpoint
└── package.json
```

## Features Implemented

✅ Upload selfies via drag-drop  
✅ Real-time image preview  
✅ Mock AI roast generation  
✅ Aura score (0-100) with color coding  
✅ 3 personalized vibe tags  
✅ Copy roast to clipboard  
✅ Download image as JPG  
✅ New roast button  
✅ Dark meme aesthetic  
✅ Smooth Framer Motion animations  
✅ Responsive design (mobile + desktop)  
✅ Glassmorphism UI  
✅ Neon glow effects  

## How It Works

1. User uploads a selfie (drag-drop or click)
2. Image preview shows immediately
3. Click to upload → 1.2s loading animation
4. Backend returns random roast + aura score + vibes
5. Results display in stunning RoastCard
6. User can:
   - Copy roast text
   - Download image
   - Upload another selfie

## Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Framer Motion (NEW)
- Axios

**Backend:**
- Express.js
- CORS
- Multer
- Node.js

## Setup & Run

```bash
# Option 1: Automated
.\setup.bat              # Windows
bash setup.sh            # Mac/Linux

# Option 2: Manual
cd backend && npm install && npm run dev
cd frontend && npm install && npm run dev

# Open http://localhost:3000
```

## Next Steps (Phase 2)

- 🤖 Real AI integration
- 🗄️ Database for history
- 🔐 User authentication
- 📊 Leaderboards
- 🎨 Custom themes
- 🔗 Social sharing

## Code Quality

✅ Beginner-friendly  
✅ Modular components  
✅ Clean separation of concerns  
✅ No unnecessary abstractions  
✅ Well-commented  
✅ Responsive design  
✅ Accessibility considered  

## Notes

- Processing delay (1.2s) is intentional for UX
- Images stored in memory only
- 5 different roasts rotate randomly
- Aura scores vary (15-56)
- All styling is Tailwind CSS
- No database or auth yet

---

**Status:** ✅ Phase 1 Complete - Ready to Roast! 🔥
**Version:** 1.0.0
**Date:** May 2026
