import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const locations = [
{ country: 'United States', flag: '🇺🇸', description: 'Headquarters & primary operations', color: 'purple' },
{ country: 'United Arab Emirates', flag: '🇦🇪', description: 'Middle East partner network', color: 'green' },
{ country: 'India', flag: '🇮🇳', description: 'South Asia engagement center', color: 'purple' },
{ country: 'Canada', flag: '🇨🇦', description: 'North American partner network', color: 'green' },
{ country: 'Italy', flag: '🇮🇹', description: 'European partner network', color: 'purple' },
{ country: 'Peru', flag: '🇵🇪', description: 'Latin America expansion', color: 'green' },
];

export default function GlobalReach() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/3 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          
          
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-white">
            Global <span className="gradient-text-mixed">Presence</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            EconFlow is global — with access across <span className="text-white font-semibold">50+ countries</span>, including the USA, UAE, India, Canada, Italy, Peru, and more.
          </p>
        </motion.div>

        {/* Network visualization */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Decorative connection lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <line x1="25%" y1="30%" x2="75%" y2="30%" stroke="url(#grad)" strokeWidth="0.5" />
              <line x1="25%" y1="30%" x2="25%" y2="70%" stroke="url(#grad)" strokeWidth="0.5" />
              <line x1="75%" y1="30%" x2="75%" y2="70%" stroke="url(#grad)" strokeWidth="0.5" />
              <line x1="25%" y1="70%" x2="75%" y2="70%" stroke="url(#grad)" strokeWidth="0.5" />
              <line x1="25%" y1="30%" x2="75%" y2="70%" stroke="url(#grad)" strokeWidth="0.5" />
              <line x1="75%" y1="30%" x2="25%" y2="70%" stroke="url(#grad)" strokeWidth="0.5" />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#22C55E" />
                </linearGradient>
              </defs>
            </svg>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {locations.map((loc, i) => {
                const isPurple = loc.color === 'purple';
                return (
                  <motion.div
                    key={loc.country}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="text-center group">
                    
                    {/* Node */}
                    <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center relative ${
                    isPurple ? 'bg-purple-500/10' : 'bg-green-500/10'}`
                    }>
                      <div className={`absolute inset-0 rounded-full animate-pulse-glow ${
                      isPurple ? 'bg-purple-500/20' : 'bg-green-500/20'}`
                      } style={{ animationDelay: `${i * 0.5}s` }} />
                      <span className="text-2xl relative z-10">{loc.flag}</span>
                    </div>
                    <h3 className="font-display font-semibold text-white text-sm">{loc.country}</h3>
                    <p className="text-xs text-slate-500 mt-1">{loc.description}</p>
                    <div className={`mt-2 flex items-center justify-center gap-1 ${
                    isPurple ? 'text-purple-400' : 'text-green-400'}`
                    }>
                      <MapPin size={10} />
                      <span className="text-xs font-medium">Active</span>
                    </div>
                  </motion.div>);

              })}
            </div>
          </div>
        </div>
      </div>
    </section>);

}