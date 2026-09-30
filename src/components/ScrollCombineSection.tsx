import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollCombineSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress within this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // We want the elements to converge around 0.5 (middle of the scroll) and stay there
  // or smoothly converge as we scroll down to 1. Let's make them converge at 1.

  // Center Text Transformations
  const titleScale = useTransform(scrollYProgress, [0, 0.8, 1], [0.2, 1.2, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  
  // Element 1: Top Left Image
  const el1X = useTransform(scrollYProgress, [0, 1], ['-150vw', '0vw']);
  const el1Y = useTransform(scrollYProgress, [0, 1], ['-150vh', '0vh']);
  const el1Rotate = useTransform(scrollYProgress, [0, 1], [-120, -10]);

  // Element 2: Top Right Card
  const el2X = useTransform(scrollYProgress, [0, 1], ['150vw', '0vw']);
  const el2Y = useTransform(scrollYProgress, [0, 1], ['-100vh', '0vh']);
  const el2Rotate = useTransform(scrollYProgress, [0, 1], [90, 15]);

  // Element 3: Bottom Left Graphic
  const el3X = useTransform(scrollYProgress, [0, 1], ['-100vw', '0vw']);
  const el3Y = useTransform(scrollYProgress, [0, 1], ['150vh', '0vh']);
  const el3Rotate = useTransform(scrollYProgress, [0, 1], [180, -20]);

  // Element 4: Bottom Right Image
  const el4X = useTransform(scrollYProgress, [0, 1], ['100vw', '0vw']);
  const el4Y = useTransform(scrollYProgress, [0, 1], ['150vh', '0vh']);
  const el4Rotate = useTransform(scrollYProgress, [0, 1], [-90, 8]);

  // Element 5: Floating Badge (Left)
  const el5X = useTransform(scrollYProgress, [0, 1], ['-200vw', '0vw']);
  const el5Y = useTransform(scrollYProgress, [0, 1], ['50vh', '0vh']);
  
  // Element 6: Floating Badge (Right)
  const el6X = useTransform(scrollYProgress, [0, 1], ['200vw', '0vw']);
  const el6Y = useTransform(scrollYProgress, [0, 1], ['-50vh', '0vh']);

  return (
    // The container needs to be very tall so we have plenty of scroll distance to animate
    <section ref={containerRef} className="relative h-[250vh] bg-[#0F172A] overflow-clip">
      {/* The sticky container that holds the viewport view */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-1000">
        
        {/* Background glow that fades in */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-radial from-[#7C3AED]/20 to-transparent opacity-0 pointer-events-none"
          style={{ opacity: scrollYProgress }}
        />

        {/* Center Content */}
        <motion.div 
          className="relative z-50 text-center flex flex-col items-center justify-center max-w-3xl px-4"
          style={{ scale: titleScale, opacity: titleOpacity }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
            <span>Seamless Integration</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white leading-tight">
            All Your Channels. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#7C3AED]">
              One Unified Strategy.
            </span>
          </h2>
          <p className="mt-6 text-slate-300 text-lg md:text-xl">
            Watch how fragmented efforts seamlessly come together to build an unstoppable growth engine.
          </p>
        </motion.div>

        {/* --- SCATTERED ELEMENTS --- */}

        {/* Element 1: Image top-left */}
        <motion.div 
          className="absolute z-40 hidden md:block"
          style={{ x: el1X, y: el1Y, rotate: el1Rotate, top: '15%', left: '15%' }}
        >
          <div className="w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80" alt="Data" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Element 2: Card top-right */}
        <motion.div 
          className="absolute z-40 hidden md:block"
          style={{ x: el2X, y: el2Y, rotate: el2Rotate, top: '20%', right: '15%' }}
        >
          <div className="w-64 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center text-white font-bold">ROI</div>
              <div>
                <div className="text-white font-bold text-sm">Performance Marketing</div>
                <div className="text-[#06B6D4] text-xs">+340% Growth</div>
              </div>
            </div>
            <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-[#06B6D4]"></div>
            </div>
          </div>
        </motion.div>

        {/* Element 3: Abstract Graphic bottom-left */}
        <motion.div 
          className="absolute z-40 hidden sm:block"
          style={{ x: el3X, y: el3Y, rotate: el3Rotate, bottom: '20%', left: '20%' }}
        >
          <div className="w-56 p-5 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-purple-900 shadow-2xl border border-white/20 text-white">
            <h3 className="font-bold mb-2">Content Strategy</h3>
            <p className="text-xs text-purple-200">Engaging stories that convert audiences into brand advocates.</p>
          </div>
        </motion.div>

        {/* Element 4: Image bottom-right */}
        <motion.div 
          className="absolute z-40 hidden md:block"
          style={{ x: el4X, y: el4Y, rotate: el4Rotate, bottom: '15%', right: '20%' }}
        >
          <div className="w-56 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80" alt="Dashboard" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Element 5: Small Badge Left */}
        <motion.div 
          className="absolute z-30"
          style={{ x: el5X, y: el5Y, top: '45%', left: '5%' }}
        >
          <div className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 font-bold text-sm backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            SEO & Search
          </div>
        </motion.div>

        {/* Element 6: Small Badge Right */}
        <motion.div 
          className="absolute z-30"
          style={{ x: el6X, y: el6Y, top: '55%', right: '5%' }}
        >
          <div className="px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400 font-bold text-sm backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            Conversion Rate Ops
          </div>
        </motion.div>

      </div>
    </section>
  );
};
