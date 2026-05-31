import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AnimatedLoader({ onScanSound }) {
  const [text, setText] = useState('Scanning your aura');
  const messages = [
    'Scanning your aura',
    'Detecting bad decisions',
    'Consulting local aunties',
    'Cooking emotional damage',
    'Finalizing roast'
  ];

  useEffect(() => {
    let currentMessage = 0;
    const interval = setInterval(() => {
      currentMessage = (currentMessage + 1) % messages.length;
      setText(messages[currentMessage]);
      onScanSound?.();
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center py-20 gap-6"
    >
      <div className="loader-stage glass glow-purple">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="scan-ring"
        />
        <div className="scan-face">💀</div>
        <div className="scan-bar scan-bar-one"></div>
        <div className="scan-bar scan-bar-two"></div>
        <div className="scan-grid"></div>
      </div>

      <motion.div
        key={text}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <p className="glitch-text text-lg sm:text-2xl">
          <span className="text-white font-black">{text}</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            ...
          </motion.span>
        </p>
        <p className="text-white/40 text-xs uppercase tracking-[0.25em] mt-3">aura scan in progress</p>
      </motion.div>

      <div className="w-full max-w-md glass-sm p-3">
        {[0, 1, 2, 3].map((idx) => (
          <motion.div
            key={idx}
            animate={{
              width: ['18%', '100%', '18%'],
              opacity: [0.35, 1, 0.35]
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              delay: idx * 0.18
            }}
            className="h-2 rounded-full bg-neon-gradient mb-2 last:mb-0"
          />
        ))}
      </div>
    </motion.div>
  );
}
