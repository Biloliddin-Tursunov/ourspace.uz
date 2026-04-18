import { motion } from 'motion/react';
import { SpiralVisual } from './SpiralVisual';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-between py-12 md:py-20 overflow-hidden">
      {/* Deep space radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-space-mid)_0%,var(--color-space-dark)_70%)] pointer-events-none" />
      
      {/* Sparse star background */}
      <div className="absolute inset-0 bg-stars pointer-events-none" />

      {/* Top Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="relative z-10 mt-8"
      >
        <h2 className="font-sans text-xs md:text-sm uppercase tracking-[0.4em] text-starlight/40">
          Cosmic Order
        </h2>
      </motion.div>

      {/* Center Visual */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, delay: 1 }}
        className="relative z-10 flex-1 flex items-center justify-center w-full"
      >
        <SpiralVisual />
      </motion.div>

      {/* Bottom Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 2, ease: "easeOut" }}
        className="relative z-10 mb-8"
      >
        <p className="font-serif text-lg md:text-xl text-starlight/80 tracking-wide font-light text-center px-6">
          всё постепенно возвращается к центру
        </p>
      </motion.div>
    </section>
  );
}
