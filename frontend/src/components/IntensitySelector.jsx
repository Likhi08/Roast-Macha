import { motion } from 'framer-motion';

const intensities = [
  { key: 'soft', label: 'Soft', hint: 'friendly fire' },
  { key: 'medium', label: 'Medium', hint: 'meme-page heat' },
  { key: 'savage', label: 'Savage', hint: 'maximum damage' }
];

export default function IntensitySelector({ selectedIntensity, onIntensitySelect }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="mb-8"
    >
      <div className="flex items-end justify-between gap-4 mb-4">
        <div>
          <p className="text-white/60 text-sm uppercase tracking-widest">Roast Intensity</p>
          <p className="text-white/40 text-xs mt-1">Choose the heat level before the selfie goes in.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {intensities.map((intensity, idx) => (
          <motion.button
            key={intensity.key}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.04 }}
            onClick={() => onIntensitySelect(intensity.key)}
            className={`mode-tile min-h-[92px] text-left p-4 rounded-lg border transition-all ${
              selectedIntensity === intensity.key
                ? 'is-active bg-neon-gradient text-black shadow-lg shadow-neon-pink/40'
                : 'glass border-white/20 text-white hover:border-neon-cyan/60 hover:bg-neon-cyan/10'
            }`}
          >
            <span className="block text-base font-black leading-tight">{intensity.label}</span>
            <span
              className={`block text-xs mt-2 ${
                selectedIntensity === intensity.key ? 'text-black/70' : 'text-white/45'
              }`}
            >
              {intensity.hint}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
}
