
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection({ heroImage }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-green-500/8 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            
            

            
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-display font-bold leading-[1.05] tracking-tight">
            
            <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white block">Empowering the</span>
            <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl block mt-2">
              <span className="text-white">Next Gen of </span>
              <span className="gradient-text-mixed">Financial Leaders</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-base sm:text-lg text-slate-400 max-w-lg leading-relaxed">
            
            A gamified platform teaching teens real-world financial skills through interactive simulations, challenges, and community — completely free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-8 flex flex-wrap gap-4">
            
            <a
              href="https://play.econflow.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold text-sm hover:from-purple-500 hover:to-purple-400 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25">
              
              <Play size={16} className="fill-current" />
              Play for Free
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/connect"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-card text-white font-semibold text-sm hover:border-purple-500/30 transition-all duration-300">
              
              Become a Partner
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex items-center gap-6 text-sm text-slate-500">
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>100% Free</span>
            </div>
            <div className="precision-line flex-1 max-w-12" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              <span>Student-Led</span>
            </div>
            <div className="precision-line flex-1 max-w-12" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              <span>Global</span>
            </div>
          </motion.div>
        </div>

        {/* Right - Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex items-center justify-center">
          
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-green-500/10 rounded-3xl blur-3xl" />
          <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
            <img
              src="/logo.png"
              alt="EconFlow - Gamified Financial Literacy"
              className="w-full h-full object-cover rounded-3xl" />
            
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40" />
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>);

}