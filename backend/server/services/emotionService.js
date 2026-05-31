import { supportedEmotions } from '../data/roastsByEmotion.js';

const randomItem = (items) => items[Math.floor(Math.random() * items.length)];

export function detectMockEmotion() {
  return {
    detectedEmotion: randomItem(supportedEmotions),
    emotionConfidence: Math.floor(Math.random() * 26) + 70
  };
}
