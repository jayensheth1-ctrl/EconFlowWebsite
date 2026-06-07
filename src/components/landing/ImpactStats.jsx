import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Users, Handshake, BookOpen } from 'lucide-react';

const stats = [
  { icon: Globe, value: 4, suffix: '+', label: 'Countries Reached', color: 'purple' },
  { icon: Handshake, value: 15, suffix: '+', label: 'Global Partners', color: 'green' },
  { icon: Users, value: 50, suffix: 'k+', label: 'Students Impacted', color: 'purple' },
  { icon: BookOpen, value: 100, suffix: '+', label: 'Lessons & Challenges', color: 'green' },
];

function AnimatedCounter({ value, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function ImpactStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="impact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-400">Our Impact</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-white">
            Numbers That <span className="gradient-text-mixed">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            const isPurple = stat.color === 'purple';
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 text-center group"
              >
                <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                  isPurple ? 'bg-purple-500/10' : 'bg-green-500/10'
                }`}>
                  <Icon size={22} className={isPurple ? 'text-purple-400' : 'text-green-400'} />
                </div>
                <div className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-2 ${
                  isPurple ? 'gradient-text-purple' : 'gradient-text-green'
                }`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                </div>
                <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
                {/* Liquid fill effect */}
                <div className={`absolute bottom-0 left-0 right-0 rounded-b-2xl transition-all duration-1000 ${
                  inView ? 'h-1' : 'h-0'
                } ${isPurple ? 'bg-purple-500/30' : 'bg-green-500/30'}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}