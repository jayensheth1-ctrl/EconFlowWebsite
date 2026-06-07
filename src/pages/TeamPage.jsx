import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/landing/PageLayout';
import { Users } from 'lucide-react';

const team = [
  {
    title: 'Founder & CEO',
    name: 'Tejas Jain',
    initials: 'TJ',
    bio: 'Visionary leader and founding force behind EconFlow, driving the mission to make financial education accessible to every student worldwide.',
    color: 'purple',
  },
  {
    title: 'Chief Technology Officer',
    name: 'Jayen Sheth',
    initials: 'JS',
    bio: 'The engineering mind behind the EconFlow platform, building the simulations, games, and infrastructure that power the learning experience.',
    color: 'green',
  },
  {
    title: 'Chief Marketing Officer',
    name: 'Pratyush Choudhary',
    initials: 'PC',
    bio: 'Brand strategist and community builder, responsible for growing EconFlow\'s presence across schools, nonprofits, and social media globally.',
    color: 'purple',
  },
];

export default function TeamPage() {
  return (
    <PageLayout>
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-medium text-green-300 mb-6">
              <Users size={14} />
              Our People
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white">
              Meet the <span className="gradient-text-green">Team</span>
            </h1>
            <p className="mt-4 text-slate-400 max-w-lg mx-auto">
              A passionate group of young leaders driving financial literacy forward, one student at a time.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {team.map((member, i) => {
              const isPurple = member.color === 'purple';
              return (
                <motion.div
                  key={member.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="glass-card glass-card-hover rounded-2xl p-7 text-center group"
                >
                  {/* Photo placeholder */}
                  <div className={`w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center border-2 relative ${
                    isPurple ? 'border-purple-500/20 bg-purple-500/8' : 'border-green-500/20 bg-green-500/8'
                  }`}>
                    <div className={`absolute inset-0 rounded-full animate-pulse-glow ${
                      isPurple ? 'bg-purple-500/10' : 'bg-green-500/10'
                    }`} style={{ animationDelay: `${i * 0.7}s` }} />
                    <span className={`text-3xl font-display font-bold relative z-10 ${
                      isPurple ? 'text-purple-300' : 'text-green-300'
                    }`}>
                      {member.initials}
                    </span>
                  </div>

                  <div className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold mb-3 ${
                    isPurple ? 'bg-purple-500/10 text-purple-300' : 'bg-green-500/10 text-green-300'
                  }`}>
                    {member.title}
                  </div>

                  <h3 className="font-display font-bold text-white text-lg mb-3">{member.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{member.bio}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center glass-card rounded-2xl p-8 max-w-lg mx-auto"
          >
            <p className="text-slate-400 text-sm leading-relaxed">
              EconFlow is entirely student-led. Every decision, lesson, and feature is built by young people who believe the next generation deserves better financial education.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}