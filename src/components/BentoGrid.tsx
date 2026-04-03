import { motion } from "framer-motion";


const springTransition = { type: "spring" as const, stiffness: 100, damping: 20 };

export function BentoGrid() {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 py-32 z-20">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
           <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground mb-4 leading-tight">
             Mini size, <br />
             <span className="text-muted">maximum comfort.</span>
           </h2>
        </div>
        <p className="text-lg text-muted max-w-[40ch]">
           Layout designed for effortless precision.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {/* Card 1: Iluminação Inteligente */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...springTransition, delay: 0.1 }}
          className="group"
        >
          <div className="bento-card h-[380px] w-full !p-0 relative">
             <video 
               src="/smart_illumination.mp4" 
               autoPlay 
               loop 
               muted 
               playsInline 
               className="w-full h-full object-cover rounded-[2.5rem]" 
             />
          </div>
          <div className="mt-6 px-2">
             <h3 className="text-2xl font-medium tracking-tight mb-2 text-foreground">Smart Illumination</h3>
             <p className="text-muted text-base leading-relaxed max-w-[50ch]">Backlit keys that magically light up the moment your hands approach. Lighting automatically adjusts to suit your environment.</p>
          </div>
        </motion.div>

        {/* Card 3: Teclas Perfeitas */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...springTransition, delay: 0.3 }}
          className="group"
        >
          <div className="bento-card h-[380px] w-full !p-0 relative">
             <video 
               src="/video_teclas.mp4" 
               autoPlay 
               loop 
               muted 
               playsInline 
               className="w-full h-full object-cover rounded-[2.5rem]" 
             />
          </div>
          <div className="mt-6 px-2">
             <h3 className="text-2xl font-medium tracking-tight mb-2 text-foreground">Perfect Stroke</h3>
             <p className="text-muted text-base leading-relaxed">Type with confidence on spherically-dished keys perfectly crafted for the shape of your fingertips.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
