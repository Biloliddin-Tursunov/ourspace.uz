import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface MeaningBlockProps {
  text: ReactNode;
  visual: ReactNode;
  reverse?: boolean;
}

export function MeaningBlock({ text, visual, reverse }: MeaningBlockProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 2.5, ease: "easeOut" }}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center gap-12 md:gap-32 min-h-[80vh] py-20`}
    >
      {/* Visual Container with fading edges */}
      <div className="w-64 h-64 md:w-96 md:h-96 relative flex items-center justify-center rounded-full overflow-visible md:overflow-hidden">
        {/* Radial gradient to fade the visual into the dark background smoothly */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,var(--color-space-dark)_70%)] z-10 pointer-events-none" />
        
        {visual}
      </div>

      {/* Text Container */}
      <div className="w-full max-w-md text-center md:text-left">
        <div className="font-serif text-xl md:text-2xl lg:text-3xl text-starlight/90 leading-relaxed tracking-wide space-y-8">
          {text}
        </div>
      </div>
    </motion.div>
  );
}
