import { motion } from 'motion/react';

function CoreGlow() {
  return (
    <motion.div
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.15, 0.3, 0.15] 
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity,
        ease: "easeInOut" 
      }}
      className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(224,242,255,0.2)_0%,transparent_50%)] blur-[24px]"
    />
  );
}

export function SpiralVariantOne() {
  const points = [];
  const numPoints = 90;
  const arms = 3;
  const a = 1;
  const b = 3.5;

  for (let arm = 0; arm < arms; arm++) {
    const armOffset = (Math.PI * 2 / arms) * arm;
    for (let i = 0; i < numPoints; i++) {
      const angle = 0.15 * i;
      const r = a + b * angle;
      const x = r * Math.cos(angle + armOffset);
      const y = r * Math.sin(angle + armOffset);
      const progress = i / numPoints;
      
      const opacity = Math.max(0.05, Math.pow(1 - progress, 1.5));
      const size = 0.8 + (1 - progress) * 2;
      const fill = progress < 0.3 ? '#ffffff' : '#a0d1ff';

      points.push({ id: `a${arm}-${i}`, x, y, opacity, size, fill });
    }
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center mix-blend-screen opacity-70">
      <CoreGlow />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 180, repeat: Infinity, ease: "linear" }} className="w-full h-full origin-center">
        <svg viewBox="-140 -140 280 280" className="w-full h-full overflow-visible">
          {points.map((p) => (
            <circle key={p.id} cx={p.x} cy={p.y} r={p.size} fill={p.fill} opacity={p.opacity} />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}

export function SpiralVariantTwo() {
  const points = [];
  const numPoints = 180;
  const arms = 5;
  const a = 2;
  const b = 2.2;

  for (let arm = 0; arm < arms; arm++) {
    const armOffset = (Math.PI * 2 / arms) * arm;
    for (let i = 0; i < numPoints; i++) {
      const angle = 0.18 * i;
      const r = a + b * angle;
      const x = r * Math.cos(angle + armOffset);
      const y = r * Math.sin(angle + armOffset);
      const progress = i / numPoints;
      
      const opacity = 0.05 + (1 - progress) * 0.6;
      const size = 0.4 + (1 - progress) * 1.2;
      const fill = progress < 0.4 ? '#ffffff' : '#73baff';

      points.push({ id: `a${arm}-${i}`, x, y, opacity, size, fill });
    }
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center mix-blend-screen opacity-80">
      <CoreGlow />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="w-full h-full origin-center">
        <svg viewBox="-160 -160 320 320" className="w-full h-full overflow-visible">
          {points.map((p) => (
            <circle key={p.id} cx={p.x} cy={p.y} r={p.size} fill={p.fill} opacity={p.opacity} />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}

export function SpiralVariantThree() {
  const points = [];
  const numPoints = 250;
  const a = 1;
  const b = 1.3;

  for (let i = 0; i < numPoints; i++) {
    const angle = 0.12 * i;
    const r = a + b * angle;
    const x = r * Math.cos(angle);
    const y = r * Math.sin(angle);
    const progress = i / numPoints;
    
    const opacity = 0.1 + (1 - progress) * 0.9;
    const size = 1.2 + (1 - progress) * 1.5;
    const fill = progress < 0.2 ? '#ffffff' : '#cce6ff';

    points.push({ id: `p-${i}`, x, y, opacity, size, fill });
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center mix-blend-screen opacity-60">
      <CoreGlow />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} className="w-full h-full origin-center">
        <svg viewBox="-80 -80 160 160" className="w-full h-full overflow-visible">
          {points.map((p) => (
            <circle key={p.id} cx={p.x} cy={p.y} r={p.size} fill={p.fill} opacity={p.opacity} />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
