import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';

export default function RoastCard({
  roast,
  auraScore,
  vibeTags,
  detectedEmotion,
  emotionConfidence,
  intensity,
  image,
  language,
  onNewRoast,
  onRevealSound
}) {
  const [copied, setCopied] = useState(false);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [typedRoast, setTypedRoast] = useState('');
  const [downloading, setDownloading] = useState('');
  const [format, setFormat] = useState('story');
  const cardRef = useRef(null);

  useEffect(() => {
    const scoreTimer = setInterval(() => {
      setAnimatedScore((prev) => {
        if (prev < auraScore) return Math.min(prev + 2, auraScore);
        return prev;
      });
    }, 18);

    return () => clearInterval(scoreTimer);
  }, [auraScore]);

  useEffect(() => {
    setTypedRoast('');
    onRevealSound?.();
    let index = 0;
    const typeTimer = setInterval(() => {
      index += 1;
      setTypedRoast(roast.slice(0, index));
      if (index >= roast.length) clearInterval(typeTimer);
    }, 22);

    return () => clearInterval(typeTimer);
  }, [roast]);

  const auraColor = animatedScore <= 30 ? '#ff3b3b' : animatedScore <= 60 ? '#ffd84d' : '#35ff8d';
  const auraLabel = animatedScore <= 30 ? 'Aura needs CPR' : animatedScore <= 60 ? 'Mid but moving' : 'Certified glow';
  const circumference = 2 * Math.PI * 54;
  const strokeOffset = circumference - (animatedScore / 100) * circumference;

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(
        `${roast}\n\nAura: ${auraScore}/100\nMood: ${detectedEmotion}\nIntensity: ${intensity}\n#RoastMacha`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = async (downloadFormat) => {
    try {
      setFormat(downloadFormat);
      setDownloading(downloadFormat);
      await new Promise((resolve) => setTimeout(resolve, 80));

      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#07070b',
        scale: 2,
        useCORS: true
      });
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `aura-roast-${downloadFormat}-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Download failed:', err);
    } finally {
      setDownloading('');
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`share-card mx-auto ${format === 'story' ? 'story-format' : 'square-format'}`}
      >
        <div className="share-card-bg"></div>
        <div className="flex items-center justify-between gap-3 relative z-10">
          <div>
            <p className="text-neon-cyan text-xs uppercase tracking-[0.25em] font-bold">Roast Macha</p>
            <h2 className="text-white text-2xl sm:text-3xl font-black mt-1">Aura Report</h2>
          </div>
          <motion.div
            animate={{ rotate: [-8, 8, -8], scale: [1, 1.08, 1] }}
            transition={{ duration: 2.4, repeat: Infinity }}
            className="reaction-sticker"
          >
            💀
          </motion.div>
        </div>

        <div className="result-grid relative z-10">
          {image && (
            <div className="selfie-frame">
              <img src={image} alt="Your selfie" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-xs uppercase tracking-[0.18em]">meme evidence</p>
              </div>
            </div>
          )}

          <div className="aura-panel">
            <div className="aura-meter" style={{ '--aura-color': auraColor }}>
              <svg viewBox="0 0 132 132" className="w-full h-full">
                <circle cx="66" cy="66" r="54" className="aura-track" />
                <motion.circle
                  cx="66"
                  cy="66"
                  r="54"
                  className="aura-progress"
                  strokeDasharray={circumference}
                  animate={{ strokeDashoffset: strokeOffset }}
                  transition={{ duration: 0.35 }}
                />
              </svg>
              <div className="aura-score">
                <span>{animatedScore}</span>
                <small>/100</small>
              </div>
            </div>
            <p className="text-white font-black text-center mt-3">{auraLabel}</p>
          </div>
        </div>

        <div className="roast-copy relative z-10">
          <p>{typedRoast}<span className="typing-cursor">|</span></p>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-3 text-sm">
          <Meta label="Mood" value={detectedEmotion} />
          <Meta label="Confidence" value={`${emotionConfidence}%`} />
          <Meta label="Language" value={language} />
          <Meta label="Intensity" value={intensity} />
        </div>

        <div className="relative z-10 flex flex-wrap gap-2">
          {vibeTags.map((vibe, idx) => (
            <motion.span
              key={vibe}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.08 }}
              className="vibe-tag"
            >
              #{vibe.replace(/\s+/g, '')}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto"
      >
        <button onClick={handleShare} className="action-button bg-neon-gradient text-black">
          {copied ? 'Copied ✓' : 'Copy roast'}
        </button>
        <button
          onClick={() => handleDownload('story')}
          disabled={Boolean(downloading)}
          className="action-button glass glow-pink border-neon-pink/50 text-white"
        >
          {downloading === 'story' ? 'Saving...' : 'Story export'}
        </button>
        <button
          onClick={() => handleDownload('square')}
          disabled={Boolean(downloading)}
          className="action-button glass glow-cyan border-neon-cyan/50 text-white"
        >
          {downloading === 'square' ? 'Saving...' : 'Square export'}
        </button>
        <button onClick={onNewRoast} className="action-button glass glow-purple border-neon-purple/50 text-white">
          New roast
        </button>
      </motion.div>

      <p className="text-center text-white/40 text-xs max-w-2xl mx-auto">
        reel mode is the vertical story export: perfect for Instagram screenshots and shares.
      </p>
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div className="meta-pill">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
