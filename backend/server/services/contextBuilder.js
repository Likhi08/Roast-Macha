export function buildRoastContext({ language, intensity, emotionResult, image }) {
  return {
    language,
    intensity,
    detectedEmotion: emotionResult.detectedEmotion,
    emotionConfidence: emotionResult.emotionConfidence,
    image: {
      originalName: image.originalname,
      mimeType: image.mimetype,
      size: image.size
    }
  };
}
