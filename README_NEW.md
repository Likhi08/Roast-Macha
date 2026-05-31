# Roast Macha - Gen Z Selfie Roasting App

A dark, meme-aesthetic web app that uses mock emotion detection to roast your selfies and rate your aura. All in good fun, bestie.

## Phase 2 Flow

```text
User uploads selfie
↓
React frontend sends image + language + intensity
↓
Express backend
↓
Mock emotion detection
↓
Context builder
↓
Roast selector
↓
Aura score + vibe tags
↓
Result card
```

## Project Structure

```text
Roast Macha/
├── frontend/
│   ├── src/components/
│   │   ├── LanguageSelector.jsx
│   │   ├── IntensitySelector.jsx
│   │   ├── UploadBox.jsx
│   │   ├── AnimatedLoader.jsx
│   │   └── RoastCard.jsx
│   ├── src/pages/HomePage.jsx
│   └── package.json
├── backend/
│   ├── server.js
│   ├── server/data/roastsByEmotion.js
│   ├── server/services/contextBuilder.js
│   ├── server/services/emotionService.js
│   ├── server/services/roastSelector.js
│   └── package.json
└── README.md
```

## Setup

```bash
# Terminal 1 - Backend
cd backend && npm install && npm run dev

# Terminal 2 - Frontend
cd frontend && npm install && npm run dev
```

Open `http://localhost:3000`.

## API

```text
GET /api/health
GET /api/roast/options
POST /api/roast
```

`POST /api/roast` expects multipart form data with `image`, `language`, and `intensity`.

```json
{
  "success": true,
  "language": "Hindi",
  "intensity": "Medium",
  "detectedEmotion": "confused",
  "emotionConfidence": 82,
  "roast": "tera selfie campus WiFi jaisa buffering kar raha hai, GPS recalculating aura, meme page material ready.",
  "auraScore": 44,
  "vibeTags": ["Buffering Thoughts", "GPS Recalculating", "Maths Board Face"]
}
```

## What Is Still Mocked?

- Emotion detection is random
- Roast selection uses local data
- No real AI model is connected
- No database or authentication is connected

**Version:** 2.0.0 (Phase 2)
