import { motion } from 'motion/react';

const examples = [
  { text: "В цветах.", img: "https://images.unsplash.com/photo-1567684041088-6b22b6f12015?q=80&w=600&auto=format&fit=crop" },
  { text: "В ракушках.", img: "https://images.unsplash.com/photo-1515444744559-7be63e1600de?q=80&w=600&auto=format&fit=crop" },
  { text: "В водоворотах.", img: "https://images.unsplash.com/photo-1527066236129-8eb1b6d186f2?q=80&w=600&auto=format&fit=crop" },
  { text: "В галактиках,", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600&auto=format&fit=crop" },
  { text: "На орбитах звезд,", img: "https://images.unsplash.com/photo-1513628253939-010e64ac66cd?q=80&w=600&auto=format&fit=crop" },
];

export function SpiralExamples() {
  return (
    <div className="w-full max-w-4xl mx-auto py-20 flex flex-col gap-24 md:gap-32">
      {examples.map((ex, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center gap-8 md:gap-24`}
        >
          <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,var(--color-space-dark)_70%)] z-10 pointer-events-none" />
            <img 
              src={ex.img} 
              alt={ex.text} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-40 mix-blend-screen grayscale" 
            />
          </div>
          <div className="font-serif text-2xl md:text-3xl text-starlight/80 tracking-wide text-center md:text-left">
            {ex.text}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
