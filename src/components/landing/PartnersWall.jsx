import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const partners = [
  'Junior Achievement',
  'DECA International',
  'National Financial Educators',
  'Youth Finance Initiative',
  'Global Student Network',
  'EduTech Alliance',
  'FinLit Foundation',
  'Next Gen Economics',
  'Student Capital Partners',
  'Digital Finance Academy',
  'Youth Empowerment Fund',
  'Future Leaders Collective',
];

export default function PartnersWall() {
  return (
    <section id="partners" className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-green-400">Partnerships</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-white">
            Our Global <span className="gradient-text-green">Partners</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg mx-auto">
            Trusted by leading organizations committed to financial education and youth empowerment.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="glass-card glass-card-hover rounded-xl p-5 flex items-center gap-3 group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-green-500/10 transition-colors">
                <Building2 size={18} className="text-slate-500 group-hover:text-green-400 transition-colors" />
              </div>
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => document.querySelector('#footer')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass-card text-sm text-slate-400 hover:text-white hover:border-green-500/30 transition-all"
          >
            Interested in partnering? Get in touch ↓
          </button>
        </motion.div>
      </div>
    </section>
  );
}