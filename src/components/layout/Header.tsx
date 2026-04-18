import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, delay: 1 }}
      className="absolute top-0 left-0 w-full p-8 md:p-12 flex justify-between items-center z-10"
    >
      <div className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 font-sans">
        Kosmik Sayohat
      </div>
      <div className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 font-sans">
        Hozirgi On
      </div>
    </motion.header>
  );
}
