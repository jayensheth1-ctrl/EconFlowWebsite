import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/landing/PageLayout';
import { Linkedin, Instagram, Mail, ArrowRight, MessageCircle } from 'lucide-react';

const CONTACT_EMAIL = 'econflowyouth@gmail.com';

const socials = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'EconFlow',
    href: 'https://www.linkedin.com/company/econflow/',
    color: 'purple',
    description: 'Follow us for financial education insights, platform updates, and partnership opportunities.',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    handle: '@econflowyouth',
    href: 'https://www.instagram.com/econflowyouth/',
    color: 'green',
    description: 'Daily financial tips, student spotlights, and behind-the-scenes content from our team.',
  },
  {
    icon: MessageCircle,
    label: 'TikTok',
    handle: '@econflowyouth',
    href: 'https://www.tiktok.com/@econflowyouth',
    color: 'purple',
    description: 'Short-form financial lessons that make complex concepts simple and fun for students.',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    color: 'green',
    description: 'Reach out directly for partnerships, press inquiries, or any questions about EconFlow.',
  },
];

export default function ConnectPage() {
  return (
    <PageLayout>
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-green-500/6 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-400">Get In Touch</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-white">
              Connect <span className="gradient-text-mixed">With Us</span>
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              Whether you are a school, nonprofit, financial organization, or just a student who wants to help, we would love to hear from you.
            </p>
          </motion.div>

          {/* Partner CTA - Prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-3xl p-8 sm:p-12 mb-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-green-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-300 text-xs font-medium mb-6">
                <ArrowRight size={12} />
                For Organizations and Schools
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                Become a <span className="gradient-text-purple">Partner</span>
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
                We partner with schools, nonprofits, financial institutions, and youth organizations to bring free financial education to more students. If your mission aligns with ours, let us build something together.
              </p>
              <a
                href="https://form.typeform.com/to/j1xMNvny"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold text-lg hover:from-purple-500 hover:to-purple-400 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25"
              >
                Become a Partner
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Socials grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {socials.map((social, i) => {
              const Icon = social.icon;
              const isPurple = social.color === 'purple';
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 flex items-start gap-5 group no-underline"
                >
                  <div className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center ${
                    isPurple ? 'bg-purple-500/10 group-hover:bg-purple-500/20' : 'bg-green-500/10 group-hover:bg-green-500/20'
                  } transition-colors`}>
                    <Icon size={22} className={isPurple ? 'text-purple-400' : 'text-green-400'} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-semibold text-white">{social.label}</span>
                      <span className={`text-sm ${isPurple ? 'text-purple-400' : 'text-green-400'}`}>{social.handle}</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{social.description}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Warm message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-500 text-sm leading-relaxed max-w-lg mx-auto">
              We are a student-led organization and we genuinely read every message. Do not hesitate to reach out, no matter how big or small the idea.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}