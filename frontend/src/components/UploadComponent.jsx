import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function UploadBox({ onRoast }) {
  const [preview, setPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      handleFile(file);
    }
  };

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(file);
    onRoast(file);
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
        className={`glass glow-purple p-8 text-center cursor-pointer transition-all ${
          dragActive ? 'scale-105 border-neon-purple/50 bg-neon-purple/20' : 'border-white/30'
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
          <div className="text-5xl">📸</div>
          <div>
            <p className="text-xl font-bold text-white mb-2">Drop your selfie here</p>
            <p className="text-white/60">or click to upload</p>
          </div>
          <p className="text-xs text-white/40 mt-4">JPG, PNG, or WebP • Max 10MB</p>
        </motion.div>
      </div>

      {preview && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 glass p-4"
        >
          <p className="text-sm text-white/60 mb-3">Preview:</p>
          <img
            src={preview}
            alt="Preview"
            className="w-full h-64 object-cover rounded-lg border border-neon-cyan/30"
          />
        </motion.div>
      )}
    </motion.div>
  );
}
