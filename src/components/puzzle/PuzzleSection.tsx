import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';

const phrases = [
  "иди медленно",
  "не спеши",
  "путь продолжается",
  "всё встанет на свои места",
  "ты в пути",
  "центр уже недалеко",
  "еще один шаг",
  "понимание приходит постепенно",
  "всё не открывается сразу",
  "ты не пришла.\nты приблизилась."
];

export function PuzzleSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.05) {
      setActiveIndex(-1);
    } else {
      // Map scroll progress (0.05 - 1.0) to array index (0 - 9)
      const adjusted = (latest - 0.05) / 0.95;
      let index = Math.floor(adjusted * 10);
      if (index > 9) index = 9;
      if (index < 0) index = 0;
      setActiveIndex(index);
    }
  });

  // Generate 10 points for the spiral path
  const points = phrases.map((text, i) => {
    const step = 9 - i; // 9 is outermost, 0 is center
    const angle = step * 1.6; // Spread angle
    const r = 12 + step * 18; // Radius increased for slightly larger spiral
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;
    return { x, y, text, isCenter: i === 9 };
  });

  return (
    <section ref={containerRef} className="relative w-full h-[1000vh] bg-space-dark">
      {/* Sticky container that stays on screen while scrolling */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Sparse star background */}
        <div className="absolute inset-0 bg-stars pointer-events-none" />
        
        {/* Glowing Text Display Area (Replaces static text and bottom text) */}
        <div className="h-24 flex items-center justify-center px-6 mb-8 md:mb-12">
          <AnimatePresence mode="wait">
            {activeIndex === -1 ? (
              <motion.p
                key="title"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-serif text-starlight/30 text-[10px] md:text-xs tracking-[0.4em] text-center uppercase"
              >
                найди свой путь
              </motion.p>
            ) : (
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, filter: "blur(6px)", scale: 0.98 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(6px)", scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-white text-sm md:text-base font-sans tracking-[0.2em] text-center lowercase drop-shadow-[0_0_12px_rgba(224,242,255,0.8)] whitespace-pre-line leading-relaxed"
              >
                {phrases[activeIndex]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Spiral Visual */}
        <div className="relative w-[360px] h-[360px] md:w-[400px] md:h-[400px] max-w-[100vw]">
          {/* Faint connecting constellation line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-180 -180 360 360">
            <motion.path
              d={`M ${points[0].x} ${points[0].y} ` + points.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ')}
              fill="none"
              stroke="var(--color-starlight)"
              strokeWidth="1"
              strokeOpacity="0.15"
            />
          </svg>

          {/* Nodes */}
          {points.map((p, i) => {
            const isActive = activeIndex === i;
            const isPassed = activeIndex > i;
            
            return (
              <div
                key={i}
                className="absolute z-20 transition-all duration-1000"
                style={{
                  left: `calc(50% + ${p.x}px)`,
                  top: `calc(50% + ${p.y}px)`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Active Glow */}
                <div 
                  className={`absolute inset-0 -m-4 rounded-full bg-starlight blur-md transition-opacity duration-1000 
                  ${isActive ? 'opacity-40' : 'opacity-0'}`} 
                />
                
                {/* Core Dot */}
                <div 
                  className={`rounded-full transition-all duration-1000 relative z-10
                  ${isActive 
                    ? (p.isCenter ? 'bg-white w-3 h-3 shadow-[0_0_16px_rgba(224,242,255,1)]' : 'bg-white w-2.5 h-2.5 shadow-[0_0_8px_rgba(224,242,255,0.8)]') 
                    : isPassed 
                      ? 'bg-starlight/40 w-1.5 h-1.5' 
                      : 'bg-starlight/10 w-1 h-1'}`} 
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
