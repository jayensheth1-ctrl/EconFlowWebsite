const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative pt-24 pb-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Final CTA */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-green-500/10" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              Ready to rewrite your<br />
              <span className="gradient-text-mixed">financial future?</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-md mx-auto">
              Join thousands of students already building their financial skills — for free.
            </p>
            <a
              href="https://play.econflow.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-green-500 text-white font-bold text-lg hover:from-purple-500 hover:to-green-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:px-14"
            >
              Play Now
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer links */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <img
                src="https://media.db.com/images/public/6a2382d47f6f3ef5ee2d09b4/963a0130e_image1.jpg"
                alt="EconFlow Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              A free, student-led gamified financial literacy platform for the next generation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigate</h4>
            <div className="space-y-2">
              {['Mission', 'Impact', 'Partners', 'About', 'Team'].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(`#${link.toLowerCase()}`)}
                  className="block text-sm text-slate-500 hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Platform</h4>
            <div className="space-y-2">
              <a href="https://play.econflow.org" target="_blank" rel="noopener noreferrer" className="block text-sm text-slate-500 hover:text-white transition-colors">
                Play EconFlow
              </a>
              <a href="https://econflow.org" target="_blank" rel="noopener noreferrer" className="block text-sm text-slate-500 hover:text-white transition-colors">
                econflow.org
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-slate-500 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="block text-sm text-slate-500 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="block text-sm text-slate-500 hover:text-white transition-colors">Twitter / X</a>
              <a href="#" className="block text-sm text-slate-500 hover:text-white transition-colors">Discord</a>
            </div>
          </div>
        </div>

        <div className="precision-line w-full mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} EconFlow. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built by students, for students.
          </p>
        </div>
      </div>
    </footer>
  );
}