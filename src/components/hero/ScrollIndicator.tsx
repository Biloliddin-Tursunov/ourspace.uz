import { motion } from 'motion/react';

export function ScrollIndicator() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, delay: 2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-sans">
        Sayohatni boshlash
      </span>
      
      {/* Floating line */}
      <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
        <motion.div 
          animate={{ 
            y: [-64, 64] 
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-gold-400 to-transparent"
        />
      </div>
    </motion.div>
  );
}
