# 🔥 Roast Macha - Architecture & Data Flow

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    USER BROWSER (localhost:3000)             │
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                  React Application                     │  │
│  │                                                         │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │              HomePage Component                  │  │  │
│  │  │                                                   │  │  │
│  │  │  ┌──────────────────┬──────────────────────────┐ │  │  │
│  │  │  │   UploadBox      │    Result Display        │ │  │  │
│  │  │  │                  │    ┌──────────────┐      │ │  │  │
│  │  │  │ • Drag/drop      │    │ • Loader     │      │ │  │  │
│  │  │  │ • Click select   │    │ • RoastCard  │      │ │  │  │
│  │  │  │ • Preview        │    │   - Roast    │      │ │  │  │
│  │  │  │                  │    │   - Score    │      │ │  │  │
│  │  │  │ onRoast()        │    │   - Vibes    │      │ │  │  │
│  │  │  │   ↓              │    │   - Buttons  │      │ │  │  │
│  │  │  │                  │    │              │      │ │  │  │
│  │  │  └──────────────────┴──────────────────────────┘ │  │  │
│  │  │                                                   │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  │                                                         │  │
│  └────────────────────────┬────────────────────────────────┘  │
│                           │                                   │
│                    axios.post('/api/roast')                   │
│                           │                                   │
└─────────────────────────────────────────────────────────────┘
                            │
              ┌─────────────┴─────────────┐
              │   Vite Proxy Config       │
              │   /api → localhost:5000   │
              └─────────────┬─────────────┘
                            │
┌─────────────────────────────────────────────────────────────┐
│                  EXPRESS.JS API (localhost:5000)             │
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  CORS Middleware (allow all origins in dev)           │  │
│  └────────────────────────┬────────────────────────────────┘  │
│                           │                                   │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Multer File Upload Middleware                       │  │
│  │  (memory storage)                                     │  │
│  └────────────────────────┬──────────────────────────────┘  │
│                           │                                   │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Route: POST /api/roast                              │  │
│  │                                                       │  │
│  │  1. Validate file exists                             │  │
│  │  2. Simulate 1.2s processing (setTimeout)            │  │
│  │  3. Select random mock roast data                    │  │
│  │  4. Return JSON response                             │  │
│  │                                                       │  │
│  │  Response:                                            │  │
│  │  {                                                    │  │
│  │    success: true,                                     │  │
│  │    data: {                                            │  │
│  │      roast: "string",                                 │  │
│  │      auraScore: 0-100,                                │  │
│  │      vibes: [3 strings]                               │  │
│  │    }                                                  │  │
│  │  }                                                    │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Mock Data Store (5 roasts)                          │  │
│  │                                                       │  │
│  │  1. Sleep schedule war (score: 23)                   │  │
│  │  2. Filters > brains (score: 15)                      │  │
│  │  3. Camera roll energy (score: 41)                    │  │
│  │  4. Angle victims (score: 56)                         │  │
│  │  5. Ring light catalog (score: 33)                    │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
App
└── HomePage
    ├── UploadBox
    │   ├── file input (hidden)
    │   └── drag-drop zone
    │
    ├── Loader (conditional)
    │   └── spinning animation
    │
    └── RoastCard (conditional)
        ├── image preview
        ├── aura score display
        ├── roast text
        ├── vibe tags
        └── action buttons
            ├── copy button
            ├── download button
            └── new roast button
```

## State Management (HomePage)

```javascript
HomePage Component State:
├── roastResult: { roast, auraScore, vibes } | null
├── loading: boolean
├── error: string
└── uploadedImage: DataURL | null

State Flow:
1. user uploads → loading = true
2. API response → loading = false, roastResult = data
3. click "New Roast" → reset all state
4. API error → loading = false, error = msg
```

## Data Flow Diagram

```
User uploads file
     │
     ↓
UploadBox validates file
     │
     ↓
preview shown (FileReader)
     │
     ↓
axios.post('/api/roast') with FormData
     │
     ├─ Frontend: loading = true
     │
     ↓
Backend receives request
     │
     ├─ Validate file exists
     ├─ setTimeout(1.2s) ← intentional delay
     │
     ↓
Random roast selected
     │
     ↓
JSON response sent
     │
     ├─ Frontend: loading = false
     ├─ roastResult = data
     │
     ↓
RoastCard rendered with:
  • Image preview
  • Roast text
  • Aura score (color-coded)
  • Vibe tags
  • Action buttons
```

## Styling Pipeline

```
Tailwind CSS classes
     ↓
(tailwind.config.js)
├─ Custom colors:
│  ├─ neon-pink: #ff006e
│  ├─ neon-purple: #8000ff
│  ├─ neon-cyan: #00f0ff
│  └─ dark-bg: #0a0a0a
│
├─ Custom utilities:
│  ├─ .glass (glassmorphism)
│  ├─ .glow-pink (neon shadow)
│  └─ .gradient-text (gradient effect)
│
↓
(postcss.config.js)
├─ tailwindcss
├─ autoprefixer
↓
(index.css)
├─ @tailwind base
├─ @tailwind components (custom .glass, .glow)
├─ @tailwind utilities
└─ custom scrollbar styles
│
↓
(src/index.css)
Compiled CSS → Applied to DOM
```

## Animation Pipeline

```
Framer Motion Timeline:

HomePage
├─ Header fade-in: 0-0.6s
├─ Content scale: 0-0.5s
└─ Footer fade-in: 0-0.8s (delayed)

UploadBox
└─ Icon scale-in: 0-0.4s

Loader
├─ Container fade-in: instant
├─ Spinner rotation: 2s infinite
│  └─ ease: linear
└─ Text animations: staggered

RoastCard
├─ Container fade-in: 0-0.5s
├─ Image zoom: 0.1s-0.2s (delayed)
├─ Score bounce: 0.2-0.4s (delayed)
├─ Roast slide-up: 0.3-0.5s (delayed)
├─ Vibes stagger: 0.4-1.0s (each +0.1s)
└─ Buttons fade: 0.5-0.7s (delayed)
```

## API Request/Response Cycle

```
Client → Server:
POST /api/roast
Headers:
  - Content-Type: multipart/form-data
  - (CORS headers handled by middleware)
Body:
  - FormData
    └─ image: File object

Server Processing:
1. CORS middleware ✓
2. Multer saves to memory ✓
3. Route handler checks file ✓
4. setTimeout(1200ms) ✓
5. Random roast selected ✓

Server → Client:
Status: 200
Content-Type: application/json
Body: {
  "success": true,
  "message": "Your aura has been analyzed",
  "data": {
    "roast": "This selfie looks...",
    "auraScore": 23,
    "vibes": ["NPC Energy", "Chronically Online", "Main Character Syndrome"]
  }
}

Client Processing:
1. axios.then() captures response ✓
2. setRoastResult(data) ✓
3. setLoading(false) ✓
4. RoastCard mounts ✓
5. Animations trigger ✓
```

## File Upload Flow

```
User drops image
     │
     ↓
handleDrop event
     │
     ├─ event.preventDefault()
     ├─ extract File from DataTransfer
     │
     ↓
handleFile(file)
     │
     ├─ Validate file type (image/*)
     │
     ↓
FileReader.readAsDataURL()
     │
     ├─ Convert to data URL
     ├─ setPreview(url)
     │
     ↓
Preview displays
     │
     ├─ <img src={preview} />
     │
     ↓
onRoast(file) called
     │
     ├─ handleRoast(file) in HomePage
     │
     ↓
FormData created
     │
     ├─ append('image', file)
     │
     ↓
axios.post('/api/roast', formData)
     │
     └─ (REST API flow continues...)
```

## Error Handling Flow

```
Try block
├─ File validation
│  └─ if (!req.file) → 400 error
│
├─ setTimeout processing
│  └─ (no error risk here)
│
├─ Random selection
│  └─ (always succeeds)
│
├─ JSON response
│  └─ send()

Catch block
└─ Generic 500 error

Axios error handling
├─ .catch()
└─ setError() message
```

---

## Environment Variables (None Required)

This is a dev-only project with no env vars needed!

Hardcoded values:
- Backend PORT: 5000
- Frontend PORT: 3000
- API BASE: /api (proxied)
- Processing delay: 1200ms

---

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (15+)
- Mobile: ✅ Responsive
- IE: ❌ Not supported (uses modern JS)

---

**Architecture maintained simple for MVP phase!** 🎯
