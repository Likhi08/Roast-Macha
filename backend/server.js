import express from 'express';
import cors from 'cors';
import multer from 'multer';
import {
  displayIntensity,
  supportedIntensities,
  supportedLanguages
} from './server/data/roastsByEmotion.js';
import { buildRoastContext } from './server/services/contextBuilder.js';
import { detectMockEmotion } from './server/services/emotionService.js';
import { selectRoast } from './server/services/roastSelector.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }
});

const normalizeLanguage = (language) =>
  supportedLanguages.includes(language) ? language : 'English';

const normalizeIntensity = (intensity) => {
  const normalized = String(intensity || '').toLowerCase();
  return supportedIntensities.includes(normalized) ? normalized : 'medium';
};

app.get('/api/health', (req, res) => {
  res.json({ status: 'Roast Macha Phase 2 is live. Aura scanner ready.' });
});

app.post('/api/roast', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No selfie provided. Upload an image first.' });
    }

    const language = normalizeLanguage(req.body.language);
    const intensity = normalizeIntensity(req.body.intensity);
    const emotionResult = detectMockEmotion();
    const context = buildRoastContext({
      language,
      intensity,
      emotionResult,
      image: req.file
    });
    const selectedRoast = selectRoast(context);

    setTimeout(() => {
      res.json({
        success: true,
        language: context.language,
        intensity: displayIntensity(context.intensity),
        detectedEmotion: context.detectedEmotion,
        emotionConfidence: context.emotionConfidence,
        roast: selectedRoast.roast,
        auraScore: selectedRoast.auraScore,
        vibeTags: selectedRoast.vibeTags,
        imageInfo: context.image
      });
    }, 1200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Aura analysis failed. Try again bestie.' });
  }
});

app.get('/api/roast/options', (req, res) => {
  res.json({
    success: true,
    languages: supportedLanguages,
    intensities: supportedIntensities.map(displayIntensity)
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Roast pipeline had a moment. Try again.' });
});

app.listen(PORT, () => {
  console.log(`Roast Macha backend running at http://localhost:${PORT}`);
});
