import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import PageLayout from '../components/landing/PageLayout';
import { Globe, Users, Handshake, BookOpen } from 'lucide-react';

const stats = [
{ icon: Globe, value: 50, suffix: '+', label: 'Countries with Access', color: 'purple' },
{ icon: Handshake, value: 9, suffix: '+', label: 'Global Partners', color: 'green' },
{ icon: Users, value: 500, suffix: '+', label: 'Students Impacted', color: 'purple' },
{ icon: BookOpen, value: 25, suffix: '+', label: 'Lessons', color: 'green' }];

function AnimatedCounter({ value, suffix, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {setCount(value);clearInterval(timer);} else
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);
  return <span>{count}{suffix}</span>;
}

export default function ImpactPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <PageLayout>
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16">
            
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-400">Our Impact</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-white">
              Numbers That <span className="gradient-text-mixed">Speak</span>
            </h1>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Real outcomes from a real movement. These numbers represent students whose relationship with money has changed for the better.
            </p>
            <div className="mt-6 glass-card rounded-2xl px-6 py-4 max-w-2xl mx-auto border border-purple-500/20">
              <p className="text-sm text-slate-300 leading-relaxed">Note: Because each partner receives their own personalized version and custom domain, leaderboards are scoped to each organization's community. Our total impact spans across all of these separate deployments.

              </p>
            </div>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-24 max-w-4xl mx-auto" ref={ref}>
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
                  className="glass-card glass-card-hover rounded-2xl sm:p-8 text-center py-6 px-5">
                  
                  <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${isPurple ? 'bg-purple-500/10' : 'bg-green-500/10'}`}>
                    <Icon size={22} className={isPurple ? 'text-purple-400' : 'text-green-400'} />
                  </div>
                  <div className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-2 ${isPurple ? 'gradient-text-purple' : 'gradient-text-green'}`}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                  </div>
                  <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
                </motion.div>);

            })}
          </div>

        </div>
      </section>
    </PageLayout>);

}