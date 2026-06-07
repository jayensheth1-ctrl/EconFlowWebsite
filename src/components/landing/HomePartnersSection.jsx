import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const partnerPerks = [
  { emoji: '🎯', title: 'Complete Personalization', desc: 'Every lesson set and curriculum unit is fully customized for each partner, aligned to your specific educational standards, student audience, and learning goals. No partner receives a generic product. EconFlow is rebuilt for you.' },
  { emoji: '🌐', title: 'Free Custom Domain', desc: 'Every partner receives their own dedicated domain, a standalone version of EconFlow branded and hosted specifically for your organization, completely free of charge.' },
  { emoji: '🤝', title: 'Partnership Network Access', desc: "Partners gain access to EconFlow's growing network of aligned organizations for cross-promotion and collaborative visibility. Where missions match, we connect partners to amplify each other's reach even further." },
  { emoji: '🎓', title: 'Intern Pipeline', desc: "Partners get priority access to EconFlow's intern cohort, a vetted group of student entrepreneurs and youth leaders who can assist with live projects, research, outreach, and daily operations." },
  { emoji: '🎉', title: 'Joint Campaigns', desc: 'Collaborate on financial literacy events, workshops, and online campaigns.' },
  { emoji: '📣', title: 'Co-Branded Content', desc: "Your organization featured across EconFlow's platforms and shared with our partner network on LinkedIn." },

];

export default function HomePartnersSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-400">Partner Benefits</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-white">
            What Makes Us <span className="gradient-text-mixed">Different</span>
          </h2>
        </motion.div>

        {/* Partner perks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {partnerPerks.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass-card rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-green-500/5" />
              <div className="relative z-10">
                <span className="text-3xl mb-4 block">{item.emoji}</span>
                <h4 className="font-display font-bold text-white text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to About page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-purple-400 transition-all hover:shadow-lg hover:shadow-purple-500/20"
          >
            Learn More About EconFlow
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}