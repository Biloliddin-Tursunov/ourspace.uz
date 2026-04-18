import { motion } from 'motion/react';

export function SpiralVisual() {
  // Generate spiral points for a softer, imperfect dotted spiral
  const points = [];
  const numPoints = 120;
  const a = 2; // starting radius
  const b = 3.5; // distance between turns

  for (let i = 0; i < numPoints; i++) {
    const angle = 0.18 * i;
    const r = a + b * angle;
    const x = r * Math.cos(angle);
    const y = r * Math.sin(angle);
    
    // Calculate opacity and size based on distance from center
    const progress = i / numPoints;
    
    // Center is bright, edges fade out
    const opacity = 0.1 + (1 - progress) * 0.9;
    const size = 0.8 + (1 - progress) * 2;
    
    // Color logic: white in the very center, soft blue in middle, dark blue at edges
    let fill = '#1a324d'; // space-light
    if (progress < 0.2) fill = '#ffffff';
    else if (progress < 0.6) fill = '#e0f2ff'; // starlight

    // Arm 1
    points.push({ id: `arm1-${i}`, x, y, opacity, size, fill, progress, delayIndex: i });
    
    // Arm 2 (Mirrored symmetrically 180 degrees)
    points.push({ id: `arm2-${i}`, x: -x, y: -y, opacity, size, fill, progress, delayIndex: i });
  }

  return (
    <div className="relative flex items-center justify-center w-[40vh] h-[40vh] md:w-[50vh] md:h-[50vh]">
      {/* Central white-blue glow */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(224,242,255,0.15)_0%,transparent_60%)] blur-[30px]"
      />

      {/* Rotating Spiral */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ 
          duration: 90, // Very slow rotation
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <svg viewBox="-120 -120 240 240" className="w-full h-full overflow-visible">
          {points.map((p) => (
            <motion.circle
              key={p.id}
              cx={p.x}
              cy={p.y}
              r={p.size}
              fill={p.fill}
              opacity={p.opacity}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 3, delay: p.delayIndex * 0.03 }}
              style={p.progress < 0.3 ? { filter: 'drop-shadow(0 0 6px rgba(224, 242, 255, 0.8))' } : {}}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
