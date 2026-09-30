import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

interface Props {
  isPlaying: boolean;
}

export default function MusicToggle({ isPlaying }: Props) {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(weddingConfig.musicPath);
    audioRef.current.loop = true;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying && audioRef.current && !isMuted) {
      audioRef.current.play().catch(() => {
        // Autoplay policy might block it, user needs to interact
        setIsMuted(true);
      });
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying, isMuted]);

  if (!isPlaying) return null;

  return (
    <button
      onClick={() => setIsMuted(!isMuted)}
      className="w-10 h-10 bg-maroon text-ivory rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label={isMuted ? "Unmute music" : "Mute music"}
    >
      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
    </button>
  );
}
