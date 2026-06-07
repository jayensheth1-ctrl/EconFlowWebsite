import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Wallet, Trophy, BarChart3, GraduationCap } from 'lucide-react';

const features = [
{
  icon: TrendingUp,
  title: 'Stock Market Simulator',
  description: "Practice trading with virtual portfolios in realistic market conditions.",
  color: 'green'
},
{
  icon: Wallet,
  title: 'Budgeting Games',
  description: 'Master personal finance through interactive budgeting challenges and scenarios.',
  color: 'purple'
},
{
  icon: GraduationCap,
  title: 'Interactive Lessons',
  description: 'Bite-sized, gamified lessons covering everything from savings to investing.',
  color: 'green'
},
{
  icon: Trophy,
  title: 'Progression System',
  description: 'Earn XP, unlock achievements, and climb leaderboards as you learn.',
  color: 'purple'
},
{
  icon: BarChart3,
  title: 'Real-World Scenarios',
  description: "Navigate real financial decisions \u2014 from buying a house to managing student loans.",
  color: 'green'
},
{
  icon: GraduationCap,
  title: "Finance Wiki",
  description: "Learn about essential financial concepts at your own pace.",
  color: 'purple'
}];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-400">Platform</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-white">
            About <span className="gradient-text-purple">EconFlow</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">A comprehensive financial literacy platform that turns complex economics into engaging, game-like experiences.

          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isPurple = feature.color === 'purple';
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card glass-card-hover rounded-2xl p-6 group">
                
                <div className={`w-11 h-11 rounded-xl mb-4 flex items-center justify-center ${
                isPurple ? 'bg-purple-500/10' : 'bg-green-500/10'} group-hover:${
                isPurple ? 'bg-purple-500/20' : 'bg-green-500/20'} transition-colors`}>
                  <Icon size={20} className={isPurple ? 'text-purple-400' : 'text-green-400'} />
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}