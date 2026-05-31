import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function UploadBox({ onRoast, language, intensity }) {
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      handleFile(file);
    }
  };

  const handleFile = (file) => {
    setSelectedFile(file);
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      handleFile(file);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    setSelectedFile(null);
    setFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleChange = () => {
    fileInputRef.current?.click();
  };

  if (preview) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="glass glow-purple p-6 upload-dropzone"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="space-y-4">
          <div className="relative rounded-xl overflow-hidden border border-neon-cyan/30">
            <img src={preview} alt="Preview" className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
              <button
                onClick={handleChange}
                className="bg-neon-gradient text-black px-6 py-2 rounded-lg font-bold hover:scale-105 transition-transform"
              >
                Change Image
              </button>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Selected File</p>
            <p className="text-white font-semibold truncate">{fileName}</p>
            <p className="text-white/50 text-sm mt-2">
              {language} roast, {intensity} intensity
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <button
              onClick={handleRemove}
              className="glass border-neon-pink/50 text-white font-bold py-3 px-4 rounded-lg hover:bg-neon-pink/10 transition-all active:scale-95"
            >
              ✕ Remove
            </button>
            <button
              onClick={handleChange}
              className="glass border-neon-cyan/50 text-white font-bold py-3 px-4 rounded-lg hover:bg-neon-cyan/10 transition-all active:scale-95"
            >
              🔄 Change
            </button>
            <button
              onClick={() => selectedFile && onRoast(selectedFile)}
              className="bg-neon-gradient text-black font-black py-3 px-4 rounded-lg hover:scale-105 transition-transform"
            >
              Roast this selfie
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`upload-dropzone glass glow-purple p-8 text-center cursor-pointer transition-all ${
          dragActive ? 'scale-105 border-neon-purple/60 bg-neon-purple/20' : 'border-white/30'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.div
            animate={{ y: [-4, 4, -4], rotate: [-3, 3, -3] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            className="text-6xl"
          >
            📸
          </motion.div>
          <div>
            <p className="text-2xl font-black text-white mb-2">Drop your selfie here</p>
            <p className="text-white/60">or click to enter the roast zone</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {['instant roast', 'share card', 'aura scan'].map((tag) => (
              <span key={tag} className="text-xs text-neon-cyan glass-sm px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs text-white/40 mt-4">JPG, PNG, or WebP - max 10MB</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
