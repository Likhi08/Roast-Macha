# Roast Macha - Gen Z Selfie Roasting App

A dark, meme-aesthetic web app that uses mock emotion detection to roast your selfies and rate your aura. All in good fun, bestie.

## What Is Roast Macha?

Upload a selfie, choose a language and roast intensity, get a meme-style aura report, then copy or download the card.

## Phase 2 Features

- Upload selfies with drag-and-drop, click upload, and image preview
- Language cards for English, Telugu, Hindi, Tamil, Kannada, and Malayalam
- Intensity selector for Soft, Medium, and Savage
- Mock emotion detection with mood and confidence
- Emotion-based roast selection by language, mood, and intensity
- Aura score and vibe tags
- Dark neon UI with mobile-responsive result cards
- PNG download using html2canvas

## Quick Start

```bash
# Windows
.\setup.bat

# Mac/Linux
bash setup.sh

# Or manually:
# Terminal 1
cd backend && npm install && npm run dev

# Terminal 2
cd frontend && npm install && npm run dev

# Open http://localhost:3000
```

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Framer Motion
- Backend: Express.js, Multer
- Styling: dark mode, neon gradients, glassmorphism
- Capture: html2canvas

## Component Structure

```text
HomePage.jsx
├── LanguageSelector.jsx
├── IntensitySelector.jsx
├── UploadBox.jsx
├── AnimatedLoader.jsx
└── RoastCard.jsx
```

## Backend Structure

```text
backend/server.js
backend/server/data/roastsByEmotion.js
backend/server/services/emotionService.js
backend/server/services/contextBuilder.js
backend/server/services/roastSelector.js
```

## API

```text
POST /api/roast
FormData:
  image: File
  language: English | Telugu | Hindi | Tamil | Kannada | Malayalam
  intensity: soft | medium | savage
```

```json
{
  "language": "Telugu",
  "intensity": "Savage",
  "detectedEmotion": "sleepy",
  "emotionConfidence": 87,
  "roast": "macha nee selfie campus WiFi la buffering chestundi, sleep mode, hero entry output zero.",
  "auraScore": 31,
  "vibeTags": ["Sleep Mode", "Low Battery Aura", "Alarm Defeated"]
}
```

## Mock Data

- 6 languages
- 7 emotions
- 3 intensity levels
- 5 roasts per language, emotion, and intensity combination

## Troubleshooting

**Port conflicts?**

```powershell
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force
Stop-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess -Force
```

**Missing dependencies?**

```bash
cd backend && npm install
cd frontend && npm install
```

## Notes

- Mock emotion detection is random
- Images are kept in memory only
- No real AI, database, or authentication yet

**Version:** 2.0.0 (Phase 2)
**Status:** Ready to roast
