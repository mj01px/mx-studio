import { useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";

const springTransition = { type: "spring" as const, stiffness: 100, damping: 20 };

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && videoRef.current.duration) {
      // Small optimization to only request frame if reasonable
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = videoRef.current.duration * latest;
        }
      });
    }
  });

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        
        {/* Shifted Video Asset - Reduced stretch for better pixel density */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[70vw] lg:w-[60vw] max-w-[1200px] z-0 flex items-center justify-end overflow-visible pointer-events-none">
          <div 
            className="relative w-full aspect-[16/9] translate-x-4 md:translate-x-[5%]"
            style={{ maskImage: 'linear-gradient(to bottom, transparent 1%, black 15%, black 85%, transparent 99%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 1%, black 15%, black 85%, transparent 99%)' }}
          >
            <video
              ref={videoRef}
              src={`/video_kf.mp4?bust=${Date.now()}`}
              muted
              playsInline
              style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)' }}
              className="absolute inset-0 w-full h-full object-cover object-right mix-blend-darken opacity-95"
              preload="auto"
            />
          </div>
        </div>
        
        {/* Text Legibility Gradient */}
        <div className="absolute inset-0 w-full md:w-[65vw] bg-gradient-to-r from-background via-background/90 to-transparent z-[5] pointer-events-none" />
        
        {/* Foreground Content Container */}
        <div className="relative z-10 flex flex-col justify-center h-full max-w-[1400px] mx-auto px-6 md:px-12">
          
          {/* Brand Logo - Asymmetric Top Left */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, ...springTransition }}
            className="absolute top-8 left-6 md:left-12 h-10 flex items-center"
          >
            <img 
              src="/logo.png" 
              alt="MX STUDIO" 
              className="h-full w-auto object-contain"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2, ...springTransition }}
            className="space-y-8 max-w-2xl mt-12 md:mt-0"
          >
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-sm font-medium text-foreground backdrop-blur-md bg-white/5 border border-white/10 shadow-lg">
              <Sparkle weight="fill" className="text-accent" />
              <span>Scroll-linked Experience.</span>
            </motion.div>
            
            <motion.h1 className="text-5xl md:text-7xl lg:text-[5rem] font-semibold tracking-tighter leading-[1.05] text-foreground drop-shadow-lg">
              Create, code <br />
              <span className="text-accent drop-shadow-none">without boundaries.</span>
            </motion.h1>
            
            <motion.p className="text-lg md:text-xl text-foreground/90 max-w-[45ch] leading-relaxed font-medium drop-shadow-md">
              Scroll down to explore every angle of your new creation partner in detail. The power of MX is literally in your hands.
            </motion.p>
            
            <div className="flex items-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button" 
                className="bg-accent text-white px-8 py-4 rounded-full flex items-center gap-3 font-medium transition-colors hover:bg-accent/90 shadow-xl shadow-accent/20"
              >
                Explore MX Keys <ArrowRight weight="bold" />
              </motion.button>
              
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.8 }}
                className="text-sm text-foreground/90 font-medium flex flex-col drop-shadow-md"
              >
                <span className="text-foreground tracking-tight text-base font-semibold">$149.99</span>
                <span>View buying options</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
