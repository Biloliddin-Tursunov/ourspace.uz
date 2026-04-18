import { motion } from 'motion/react';
import Gul from "../../assets/images/gul.jpg";
import Shell from "../../assets/images/chiganoq.webp";
import Vortex from "../../assets/images/girdob.jpg";
import Galaxy from "../../assets/images/galaxy.jpg";
import Stars from "../../assets/images/stars.jpg";

const examples = [
  { text: "В цветах.", img: Gul },
  { text: "В ракушках.", img: Shell },
  { text: "В вихрях.", img: Vortex },
  { text: "В галактиках,", img: Galaxy },
  { text: "На орбитах звезд,", img: Stars },
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
          <div className="w-64 h-64 md:w-96 md:h-96 relative rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_80%,var(--color-space-dark)_90%)] z-10 pointer-events-none" />
            <img
              src={ex.img}
              alt={ex.text}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-60 mix-blend-screen "
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
