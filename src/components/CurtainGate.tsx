import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isOpen: boolean;
  onOpen: () => void;
}

const LotusHalf = ({ side }: { side: 'left' | 'right' }) => {
  // We draw the right half of a lotus, and if side === 'left', we flip it.
  return (
    <svg viewBox="0 0 150 400" className="w-full h-full drop-shadow-2xl">
      <defs>
        <linearGradient id={`grad1-${side}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d81b60" />
          <stop offset="60%" stopColor="#f48fb1" />
          <stop offset="100%" stopColor="#fce4ec" />
        </linearGradient>
        <linearGradient id={`grad2-${side}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ad1457" />
          <stop offset="70%" stopColor="#f06292" />
          <stop offset="100%" stopColor="#f8bbd0" />
        </linearGradient>
        <linearGradient id={`grad3-${side}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#880e4f" />
          <stop offset="80%" stopColor="#e91e63" />
          <stop offset="100%" stopColor="#fce4ec" />
        </linearGradient>
      </defs>
      <g transform={side === 'left' ? "translate(150, 0) scale(-1, 1)" : ""}>
        {/* Outer back petal */}
        <path d="M0 350 C 120 280, 180 150, 100 40 C 60 100, 20 200, 0 350" fill={`url(#grad3-${side})`} opacity="0.9" />
        {/* Middle petal */}
        <path d="M0 350 C 90 260, 130 130, 60 20 C 30 100, 10 200, 0 350" fill={`url(#grad2-${side})`} opacity="0.95" />
        {/* Inner front petal */}
        <path d="M0 350 C 50 250, 60 120, 0 0" fill={`url(#grad1-${side})`} />
      </g>
    </svg>
  );
};

export default function CurtainGate({ isOpen, onOpen }: Props) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden bg-[#faf8f5]"
        >
          {/* Left Door */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-0 left-0 w-1/2 h-full bg-[#faf8f5] z-10 flex justify-end items-center shadow-[2px_0_10px_rgba(0,0,0,0.05)] overflow-hidden"
          >
            {/* Lace Texture */}
            <div 
              className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
              style={{ backgroundImage: "url('/lace-texture.jpg')", backgroundSize: "cover", backgroundPosition: "left" }}
            />

            <div className="w-[150px] h-[400px] md:w-[250px] md:h-[600px] absolute right-0">
              <LotusHalf side="left" />
            </div>
          </motion.div>
          
          {/* Right Door */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-0 right-0 w-1/2 h-full bg-[#faf8f5] z-10 flex justify-start items-center shadow-[-2px_0_10px_rgba(0,0,0,0.05)] overflow-hidden"
          >
            {/* Lace Texture */}
            <div 
              className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
              style={{ backgroundImage: "url('/lace-texture.jpg')", backgroundSize: "cover", backgroundPosition: "right" }}
            />

            <div className="w-[150px] h-[400px] md:w-[250px] md:h-[600px] absolute left-0">
              <LotusHalf side="right" />
            </div>
          </motion.div>

          

          {/* Center Content (Wax Seal Button) */}
          <motion.div
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 flex flex-col items-center gap-4"
          >
            <button
              onClick={onOpen}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-maroon text-gold font-display font-bold text-3xl md:text-4xl shadow-[0_10px_25px_rgba(0,0,0,0.5),inset_0_5px_8px_rgba(255,255,255,0.2),inset_0_-5px_8px_rgba(0,0,0,0.6)] border-2 border-[#4c0814] flex flex-col items-center justify-center text-center p-2 hover:scale-105 transition-transform relative group"
            >
              {/* Irregular outer edge illusion */}
              <div className="absolute inset-[-4px] rounded-[48%] border-2 border-[#4c0814]/30 rotate-12" />
              <div className="absolute inset-[-2px] rounded-[52%] border-2 border-[#4c0814]/20 -rotate-45" />

              {/* Inner embossed ring */}
              <div className="absolute inset-3 rounded-full border-[3px] border-[#4c0814]/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_1px_1px_rgba(255,255,255,0.1)]" />
              
              {/* Monogram */}
              <span className="relative z-10 text-gold/90 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] tracking-wider">
                H<span className="text-xl md:text-2xl mx-1 text-gold/70">&</span>S
              </span>
            </button>
            
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
