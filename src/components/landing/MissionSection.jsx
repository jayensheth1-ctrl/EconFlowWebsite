import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export default function MissionSection({ missionImage }) {
  return (
    <section id="mission" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-medium text-purple-300 mb-8">
            <Target size={14} />
            Our Mission
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
            Bridging the <span className="gradient-text-purple">Financial Literacy</span> Gap
          </h2>

          <div className="mt-8 relative">
            {missionImage && (
              <div className="mb-10 relative rounded-2xl overflow-hidden max-w-2xl mx-auto">
                <img
                  src={missionImage}
                  alt="Light refracting through a crystal prism on obsidian surface"
                  className="w-full h-48 sm:h-64 object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
              </div>
            )}

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              EconFlow was created with a singular vision: to make financial education accessible, engaging, 
              and impactful for every student, regardless of background or location. We believe that financial 
              literacy is not a privilege — it's a fundamental life skill. Through gamified learning experiences, 
              real-world simulations, and a global community of young learners, we're building a future where 
              every teenager enters adulthood equipped with the knowledge to manage, grow, and protect their finances.
            </p>

            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Built by students, for students — EconFlow is a testament to what the next generation can achieve 
              when given the tools and the trust. Our platform has grown from a small idea into a global movement 
              spanning four countries, driven entirely by passionate young people who refuse to let financial 
              illiteracy define their generation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}