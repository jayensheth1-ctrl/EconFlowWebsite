import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/landing/PageLayout';
const platformFeatures = [
  { emoji: '📚', title: '25 Interactive Lessons', desc: 'Duolingo-style modules with multiple question formats and curated reading passages before each lesson.' },
  { emoji: '🔓', title: 'Progression System', desc: '10 lessons unlocked first, followed by 10 advanced lessons with new themes and stock market content.' },
  { emoji: '🏆', title: 'Competitive Leaderboards', desc: 'Driving healthy competition and sustained motivation among student users.' },
  { emoji: '📈', title: 'Stock Market Simulator', desc: 'Real-world market dynamics in a safe, gamified learning environment.' },
  { emoji: '💸', title: 'Lifestyle Budgeting Games', desc: 'Real-life financial decisions simulated in immersive, engaging game scenarios.' },
  { emoji: '🏰', title: 'Tower Defense Investment Game', desc: 'A strategy-based game teaching long-term investment thinking in a fun format.' },
  { emoji: '🎁', title: 'Daily Rewards', desc: 'Streak-based rewards and progression systems that encourage consistent daily engagement.' },
  { emoji: '🦎', title: 'Mascot Customization', desc: 'Unlockable levels including Wealth, Influence, and more for deep personal expression.' },
  { emoji: '🛒', title: 'In-Game Shop', desc: 'Perks, power-ups, themes, and cosmetics purchasable with in-platform currency.' },
  { emoji: '📖', title: 'Built-In Wiki / Resource Page', desc: 'An always-available reference library for financial terminology and concepts.' },
  { emoji: '♿', title: 'Accessibility Features', desc: 'Read-aloud support and inclusive design standards so every student can participate.' },
  { emoji: '🔧', title: 'Continuously Growing', desc: 'New features actively in development, with the platform improving every week.' },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 -left-48 w-96 h-96 bg-purple-600/6 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-400">The Platform</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-white">
              About <span className="gradient-text-purple">EconFlow</span>
            </h1>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              A comprehensive financial literacy platform that turns complex economics into engaging, game-like experiences for the next generation.
            </p>
          </motion.div>

          {/* Story block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-3xl p-8 sm:p-12 mb-14 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/6 via-transparent to-green-500/6" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Why <span className="gradient-text-mixed">EconFlow</span> Exists
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Schools rarely teach students how to file taxes, manage a credit card, or invest for retirement. EconFlow was built to close that gap. We take the topics that schools overlook and make them genuinely exciting through games, simulations, and challenges.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Think of it as Duolingo for finance. Short lessons, instant feedback, real-world context, and a progression system that keeps you coming back. Every module is grounded in real financial concepts that students will face in the real world.
              </p>
            </div>
          </motion.div>

          {/* Platform features */}
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-400">Features</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-display font-bold text-white">
              The <span className="gradient-text-purple">Platform</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
              EconFlow is far more than a lesson library. It is a fully gamified, personalized financial literacy experience built to keep students coming back. We tailor lessons and platform features for each partner based on their curriculum and educational goals — and offer separately versioned deployments so every partner gets an EconFlow that feels built specifically for their students.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {platformFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="glass-card glass-card-hover rounded-xl p-5 flex gap-4 items-start"
              >
                <span className="text-2xl shrink-0">{f.emoji}</span>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">{f.title}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}