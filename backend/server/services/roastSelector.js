import { roastsByEmotion } from '../data/roastsByEmotion.js';

const randomItem = (items) => items[Math.floor(Math.random() * items.length)];

const vibeTagsByEmotion = {
  happy: ['Smile Overload', 'Main Character Maybe', 'Festival Mode'],
  sad: ['Exam Hall Face', 'Rainy Playlist Aura', 'Seen Zone Survivor'],
  angry: ['Keyboard Warrior', 'Traffic Signal Patience', 'Group Project Rage'],
  neutral: ['Default Settings', 'NPC Energy', 'Passport Photo Mood'],
  sleepy: ['Sleep Mode', 'Low Battery Aura', 'Alarm Defeated'],
  confused: ['Buffering Thoughts', 'GPS Recalculating', 'Maths Board Face'],
  surprised: ['Plot Twist Face', 'Notification Panic', 'Camera Flash Betrayal']
};

const intensityAuraRanges = {
  soft: [48, 92],
  medium: [28, 76],
  savage: [5, 55]
};

const clampAura = (score) => Math.max(0, Math.min(100, score));

function makeAuraScore(intensity, confidence) {
  const [min, max] = intensityAuraRanges[intensity] || intensityAuraRanges.medium;
  const base = Math.floor(Math.random() * (max - min + 1)) + min;
  const confidencePenalty = Math.floor((confidence - 70) / 5);
  return clampAura(base - confidencePenalty);
}

export function selectRoast(context) {
  const roasts =
    roastsByEmotion[context.language]?.[context.detectedEmotion]?.[context.intensity] ||
    roastsByEmotion.English.neutral.medium;

  return {
    roast: randomItem(roasts),
    auraScore: makeAuraScore(context.intensity, context.emotionConfidence),
    vibeTags: [...(vibeTagsByEmotion[context.detectedEmotion] || vibeTagsByEmotion.neutral)]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
  };
}
