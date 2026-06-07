import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/landing/PageLayout';
import { DollarSign, FlaskConical, ArrowRight, BookOpen, Unlock, Trophy, TrendingUp, Wallet, Shield, Gift, Smile, ShoppingBag, FileText, Accessibility, Zap, Target, Globe, Handshake } from 'lucide-react';

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

const partnerPerks = [
  { emoji: '🎯', title: 'Complete Personalization', desc: 'Every lesson set and curriculum unit is fully customized for each partner, aligned to your specific educational standards, student audience, and learning goals. No partner receives a generic product. EconFlow is rebuilt for you.' },
  { emoji: '🌐', title: 'Free Custom Domain', desc: 'Every partner receives their own dedicated domain, a standalone version of EconFlow branded and hosted specifically for your organization, completely free of charge.' },
  { emoji: '🤝', title: 'Partnership Network Access', desc: "Partners gain access to EconFlow's growing network of aligned organizations for cross-promotion and collaborative visibility. Where missions match, we connect partners to amplify each other's reach even further." },
];

const partnerCategories = [
  {
    label: '💵 Finance & Wealth-Building Initiatives',
    color: 'green',
    partners: [
      { name: 'FinanceMeta', desc: 'An elite global network reaching 100k+ students across 50 countries, offering high-level research labs and mentorship from top-tier colleges and top finance firms like Jane Street.' },
      { name: 'Financial Youth Club (FYC)', desc: 'A student-led international chapter network that partners with major economics olympiads to provide local study halls, global essay competitions, and hands-on finance workshops.' },
      { name: 'EmpowerED Finances', desc: 'A mission-driven organization that has reached over 15,000 marginalized and neurodiverse youth through college-credit personal finance courses backed by deposit-matching savings funds.' },
      { name: 'Youth In-Vest', desc: 'A dynamic, youth-led digital movement that uses highly visual social content and interactive workshops to teach Gen Z the essentials of investing, budgeting, and building credit.' },
      { name: 'Wall Street Oasis (WSO)', desc: 'The world\'s largest finance career community with over 1 million members, providing crowdsourced industry data, forums, and elite financial modeling interview prep.' },
    ],
  },
  {
    label: '🔬 Academic Research & Tech Platforms',
    color: 'purple',
    partners: [
      { name: 'Synthica', desc: 'A massive open-access research and edtech platform operating across 96+ countries, providing AI data workbenches and hosting premier international student research competitions.' },
      { name: 'YRI Fellowship', desc: 'An intensive, highly selective mentorship program that pairs advanced students one-on-one with PhD mentors from top-tier universities to produce publication-grade scientific research.' },
      { name: 'Project Q2', desc: 'A structured, youth-led non-profit that utilizes collaborative digital platforms to guide student researchers step-by-step from initial hypothesis to final academic manuscript.' },
      { name: 'Venn (Student Org Connector)', desc: 'A specialized campus-tech directory designed to eliminate extracurricular fragmentation by streamlining club discovery, event tracking, and roster management for students.' },
    ],
  },
];

const partnerBenefits = [
  { emoji: '🎓', title: 'Intern Pipeline', desc: "Partners get priority access to EconFlow's intern cohort, a vetted group of student entrepreneurs and youth leaders who can assist with live projects, research, outreach, and daily operations." },
  { emoji: '🎉', title: 'Joint Campaigns', desc: 'Collaborate on financial literacy events, workshops, and online campaigns.' },
  { emoji: '📣', title: 'Co-Branded Content', desc: 'Your organization featured across EconFlow\'s platforms and shared with our partner network on LinkedIn.' },
];

export default function PartnersPage() {
  return (
    <PageLayout>
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]" />
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-green-400">Partnerships</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-white">
              Our Global <span className="gradient-text-green">Partners</span>
            </h1>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Trusted by leading organizations committed to financial education and youth empowerment worldwide.
            </p>
          </motion.div>

          {/* Partner categories */}
          <div className="space-y-12 mb-20">
            {partnerCategories.map((category, ci) => {
              const isGreen = category.color === 'green';
              return (
                <div key={category.label}>
                  <h2 className={`text-lg font-display font-semibold mb-5 ${isGreen ? 'text-green-400' : 'text-purple-400'}`}>
                    {category.label}
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.partners.map((partner, i) => (
                      <motion.div
                        key={partner.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: ci * 0.1 + i * 0.06, duration: 0.4 }}
                        className="glass-card glass-card-hover rounded-xl p-5 group cursor-default"
                      >
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${isGreen ? 'bg-green-500/10 group-hover:bg-green-500/20' : 'bg-purple-500/10 group-hover:bg-purple-500/20'} transition-colors`}>
                          {isGreen
                            ? <DollarSign size={16} className="text-green-400" />
                            : <FlaskConical size={16} className="text-purple-400" />}
                        </div>
                        <p className="text-sm font-semibold text-white mb-1">{partner.name}</p>
                        <p className="text-xs text-slate-400 leading-relaxed">{partner.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Become a partner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden mb-16"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/8 via-transparent to-purple-600/8" />
            <div className="relative z-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                Become a <span className="gradient-text-green">Partner</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8">
                Whether you are a school, nonprofit, financial institution, or youth organization, we would love to build something meaningful together.
              </p>
              <a
                href="https://form.typeform.com/to/j1xMNvny"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold hover:from-green-500 hover:to-green-400 transition-all hover:shadow-lg hover:shadow-green-500/20"
              >
                Become a Partner
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Partner perks + benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...partnerPerks, ...partnerBenefits].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="glass-card rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-green-500/5" />
                <div className="relative z-10">
                  {item.emoji && <span className="text-3xl mb-4 block">{item.emoji}</span>}
                  <h4 className="font-display font-bold text-white text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}