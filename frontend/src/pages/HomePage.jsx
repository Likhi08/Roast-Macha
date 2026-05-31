import { useState } from 'react';
import { motion } from 'framer-motion';
import LanguageSelector from '../components/LanguageSelector';
import UploadBox from '../components/UploadBox';
import AnimatedLoader from '../components/AnimatedLoader';
import RoastCard from '../components/RoastCard';
import IntensitySelector from '../components/IntensitySelector';
import axios from 'axios';

export default function HomePage() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedIntensity, setSelectedIntensity] = useState('medium');
  const [roastResult, setRoastResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const playSound = (type) => {
    if (!soundEnabled || typeof window === 'undefined') return;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const audio = new AudioContext();
    const gain = audio.createGain();
    const osc = audio.createOscillator();
    const now = audio.currentTime;
    const soundMap = {
      upload: { start: 540, end: 740, volume: 0.035, duration: 0.12, wave: 'triangle' },
      scan: { start: 220, end: 520, volume: 0.025, duration: 0.2, wave: 'sawtooth' },
      reveal: { start: 620, end: 420, volume: 0.03, duration: 0.16, wave: 'sine' },
      bass: { start: 120, end: 48, volume: 0.06, duration: 0.28, wave: 'sine' }
    };
    const sound = soundMap[type] || soundMap.upload;

    osc.type = sound.wave;
    osc.frequency.setValueAtTime(sound.start, now);
    osc.frequency.exponentialRampToValueAtTime(sound.end, now + sound.duration);
    gain.gain.setValueAtTime(sound.volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + sound.duration);
    osc.connect(gain);
    gain.connect(audio.destination);
    osc.start(now);
    osc.stop(now + sound.duration);
  };

  const handleRoast = async (file) => {
    setLoading(true);
    setError('');
    setRoastResult(null);
    playSound('upload');

    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('language', selectedLanguage);
      formData.append('intensity', selectedIntensity);

      const reader = new FileReader();
      reader.onload = (e) => setUploadedImage(e.target.result);
      reader.readAsDataURL(file);

      const response = await axios.post('/api/roast', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setRoastResult(response.data);
      playSound('bass');
    } catch (err) {
      const status = err.response?.status;
      const serverMessage = err.response?.data?.error;

      if (status === 400 && serverMessage) {
        setError(serverMessage);
      } else if (err.code === 'ERR_NETWORK' || !err.response) {
        setError('Backend is not running. Start it with: cd backend && npm run dev');
      } else {
        setError(serverMessage || 'Roast failed. Try again in a second.');
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleNewRoast = () => {
    setRoastResult(null);
    setUploadedImage(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-dark-bg overflow-hidden relative">
      <div className="fixed inset-0 -z-10 neon-grid-bg">
        <div className="neon-sweep"></div>
      </div>

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 min-h-[78vh] flex items-center px-4 border-b border-white/10"
      >
        {['💀', '😭', '🗿', '🤡', '😂', '✨'].map((emoji, idx) => (
          <motion.span
            key={`${emoji}-${idx}`}
            className="floating-emoji"
            style={{ left: `${8 + idx * 16}%`, top: `${18 + (idx % 3) * 18}%` }}
            animate={{ y: [-10, 18, -10], rotate: [-8, 10, -8] }}
            transition={{ duration: 4 + idx, repeat: Infinity, ease: 'easeInOut' }}
          >
            {emoji}
          </motion.span>
        ))}

        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-neon-cyan font-bold uppercase tracking-[0.35em] text-xs mb-4"
            >
              Viral aura scanner
            </motion.p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-5 gradient-text leading-none">
              ROAST MACHA
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-2xl">
              Upload a selfie, pick your language and intensity, then get an Instagram-ready meme card with aura damage included.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a href="#roast-lab" className="hero-button bg-neon-gradient text-black">
                Start scan
              </a>
              <button
                onClick={() => setSoundEnabled((value) => !value)}
                className="hero-button glass border-neon-cyan/40 text-white"
              >
                {soundEnabled ? 'Sound on 🔊' : 'Sound off 🔇'}
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {[
              'Soft Roast: cute but camera asked for confirmation 😌',
              'Medium Roast: meme page material loading 💀',
              'Savage Roast: hero entry output zero ✨'
            ].map((preview, idx) => (
              <motion.div
                key={preview}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + idx * 0.1 }}
                className="trend-card"
              >
                <span className="text-white/45 text-xs uppercase tracking-widest">Trending roast</span>
                <p className="text-white font-bold mt-2">{preview}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.header>

      <main id="roast-lab" className="relative z-10 max-w-5xl mx-auto px-4 py-12 scroll-mt-8">
        {!roastResult && (
          <>
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              onLanguageSelect={setSelectedLanguage}
            />
            <IntensitySelector
              selectedIntensity={selectedIntensity}
              onIntensitySelect={setSelectedIntensity}
            />
          </>
        )}

        {!roastResult && !loading ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <UploadBox
              onRoast={handleRoast}
              language={selectedLanguage}
              intensity={selectedIntensity}
            />
          </motion.div>
        ) : loading ? (
          <AnimatedLoader onScanSound={() => playSound('scan')} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RoastCard
              roast={roastResult.roast}
              auraScore={roastResult.auraScore}
              vibeTags={roastResult.vibeTags}
              detectedEmotion={roastResult.detectedEmotion}
              emotionConfidence={roastResult.emotionConfidence}
              intensity={roastResult.intensity}
              image={uploadedImage}
              language={roastResult.language}
              onNewRoast={handleNewRoast}
              onRevealSound={() => playSound('reveal')}
            />
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 glass p-4 border-neon-pink/50 bg-neon-pink/10 text-center max-w-2xl mx-auto"
          >
            <p className="text-white">{error}</p>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center py-6 text-white/40 text-sm border-t border-white/10 mt-12"
      >
        <p>made with bad vibes and worse decisions ✨</p>
      </motion.footer>
    </div>
  );
}
