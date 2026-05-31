import { motion } from 'framer-motion';

export default function LanguageSelector({ selectedLanguage, onLanguageSelect }) {
  const languages = ['English', 'Telugu', 'Hindi', 'Tamil', 'Kannada', 'Malayalam'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <p className="text-white/60 text-sm uppercase tracking-widest mb-4">Select Language</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {languages.map((lang, idx) => (
          <motion.button
            key={lang}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => onLanguageSelect(lang)}
            className={`p-4 rounded-lg font-semibold transition-all ${
              selectedLanguage === lang
                ? 'bg-neon-gradient text-black shadow-lg shadow-neon-pink/50'
                : 'glass border-white/30 text-white hover:border-neon-pink/50 hover:bg-neon-pink/10'
            }`}
          >
            {lang}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
