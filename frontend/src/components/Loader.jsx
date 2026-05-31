import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-center py-20"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 rounded-full border-4 border-white/20 border-t-neon-pink mx-auto mb-6"
        />
        <p className="text-white/60 text-lg">
          <span className="text-white font-bold">roasting</span> your aura...
        </p>
        <p className="text-white/40 text-sm mt-2">this might take a sec</p>
      </div>
    </motion.div>
  );
}
