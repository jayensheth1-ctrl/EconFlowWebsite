import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  { name: 'Alex Chen', title: 'Founder & CEO', initials: 'AC' },
  { name: 'Priya Sharma', title: 'Head of Curriculum', initials: 'PS' },
  { name: 'Marcus Johnson', title: 'Lead Developer', initials: 'MJ' },
  { name: 'Sarah Al-Rashid', title: 'Director of Partnerships', initials: 'SA' },
  { name: 'David Kim', title: 'Head of Design', initials: 'DK' },
  { name: 'Aisha Patel', title: 'Community Manager', initials: 'AP' },
  { name: 'James Wright', title: 'Content Lead', initials: 'JW' },
  { name: 'Luna Rodriguez', title: 'Marketing Director', initials: 'LR' },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-green-400">Our People</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-white">
            Meet the <span className="gradient-text-green">Team</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg mx-auto">
            A passionate group of students and young professionals driving financial literacy forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="glass-card glass-card-hover rounded-2xl p-5 text-center group"
            >
              {/* Avatar placeholder */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-green-500/20 flex items-center justify-center border border-white/5 group-hover:border-purple-500/30 transition-colors">
                <span className="text-lg sm:text-xl font-display font-bold text-slate-300 group-hover:text-white transition-colors">
                  {member.initials}
                </span>
              </div>
              <h3 className="font-display font-semibold text-white text-sm sm:text-base">{member.name}</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">{member.title}</p>
              <div className="mt-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 rounded-lg hover:bg-white/5 text-slate-500 hover:text-purple-400 transition-colors">
                  <Linkedin size={14} />
                </button>
                <button className="p-1.5 rounded-lg hover:bg-white/5 text-slate-500 hover:text-purple-400 transition-colors">
                  <Twitter size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}