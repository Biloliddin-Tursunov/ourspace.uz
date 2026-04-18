import { motion } from 'motion/react';

const letterLines = [
  "Привет.",
  "То, что у тебя в руках — не просто картина.",
  "Это маленький путь.",
  "Возможно, собирая его,\nты думаешь, что просто расставляешь фигуры по местам.",
  "Но на самом деле,\nты собираешь путь.",
  "Этот путь похож на спираль.",
  "Он никогда не заканчивается.",
  "Иногда он уходит вглубь,\nа иногда — выходит наружу.",
  "Совсем как жизнь человека.",
  "Иногда всё кажется запутанным,\nно в конце концов всё встает на свои места.",
  "Если присмотреться,\nвсё постепенно возвращается к центру.",
  "И этот путь\nведет к самой прекрасной цели."
];

export function LetterSection() {
  return (
    <section className="relative w-full bg-space-dark py-64 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Faint star background */}
      <div className="absolute inset-0 bg-stars pointer-events-none opacity-30" />
      
      <div className="relative z-10 w-full max-w-xl flex flex-col items-center text-center space-y-20 md:space-y-32">
        {letterLines.map((line, i) => {
          const isLast = i === letterLines.length - 1;
          return (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className={`font-serif leading-loose whitespace-pre-line ${
                isLast 
                  ? 'text-white text-xl md:text-2xl pt-12 tracking-[0.2em] drop-shadow-[0_0_16px_rgba(224,242,255,0.6)]' 
                  : 'text-starlight/70 text-base md:text-lg tracking-wide'
              }`}
            >
              {line}
            </motion.p>
          );
        })}
      </div>
    </section>
  );
}
