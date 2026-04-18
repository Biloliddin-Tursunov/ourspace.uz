import { motion } from 'motion/react';
import { MeaningBlock } from './MeaningBlock';
import { SpiralExamples } from './SpiralExamples';
import { SpiralVariantOne, SpiralVariantTwo, SpiralVariantThree } from './visuals/MeaningSpirals';

export function MeaningSection() {
  return (
    <section className="relative w-full bg-space-dark py-20 px-6 flex flex-col items-center overflow-hidden">
      {/* Sparse star background */}
      <div className="absolute inset-0 bg-stars pointer-events-none" />
      
      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col">
        
        {/* Intro Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 3 }}
          className="min-h-[60vh] flex items-center justify-center text-center px-4"
        >
          <p className="font-serif text-2xl md:text-3xl text-starlight/90 leading-relaxed tracking-wide">
            Возможно, ты часто видела эту форму вокруг себя.
          </p>
        </motion.div>

        {/* 5 Visual Examples */}
        <SpiralExamples />

        {/* Spacer */}
        <div className="h-20 md:h-32" />

        <MeaningBlock 
          visual={<SpiralVariantOne />}
          text={
            <>
              <p>Это не просто форма.</p>
              <p>
                Она похожа на путь.<br/>
                На путь, ведущий к центру.
              </p>
            </>
          }
        />

        <MeaningBlock 
          visual={<SpiralVariantTwo />}
          reverse
          text={
            <>
              <p>
                Самое удивительное,<br/>
                что у этого пути нет ни начала,<br/>
                ни конца.
              </p>
              <p>
                Он уходит вовнутрь<br/>
                и продолжается наружу.
              </p>
            </>
          }
        />

        <MeaningBlock 
          visual={<SpiralVariantThree />}
          text={
            <>
              <p>Человек тоже идет по такому пути.</p>
              <p>
                Иногда кажется, что ты отдаляешься,<br/>
                но на самом деле — приближаешься.
              </p>
            </>
          }
        />

      </div>
    </section>
  );
}
