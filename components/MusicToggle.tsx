"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Volume2, VolumeX } from "lucide-react";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/background.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.warn("Audio playback failed:", error);
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="absolute bottom-full right-0 mb-2 px-3 py-1.5 text-xs font-medium bg-surface border border-border rounded-lg whitespace-nowrap text-foreground shadow-lg"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2 }}
          >
            {isPlaying ? "Pause Music" : "Play Music"}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        onClick={togglePlay}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative p-3.5 rounded-full bg-surface border border-border hover:border-accent/40 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
      >
        {/* Animated ring when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-accent/40"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* Icon */}
        <motion.div
          key={isPlaying ? "playing" : "paused"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-accent" />
          ) : (
            <Music className="w-5 h-5 text-muted group-hover:text-foreground transition-colors" />
          )}
        </motion.div>

        {/* Music bars animation when playing */}
        {isPlaying && (
          <div className="absolute -top-1 -right-1 flex items-end gap-0.5">
            {[0, 0.2, 0.4].map((delay, i) => (
              <motion.div
                key={i}
                className="w-0.5 bg-accent rounded-full"
                animate={{ height: [4, 12, 4] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
      </motion.button>
    </div>
  );
}
