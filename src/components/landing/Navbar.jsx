const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
{ label: 'Home', href: '/' },
{ label: 'Mission', href: '/mission' },
{ label: 'Impact', href: '/impact' },
{ label: 'Partners', href: '/partners' },
{ label: 'About', href: '/about' },
{ label: 'Team', href: '/team' },
{ label: 'Connect with Us', href: '/connect' }];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-card border-b border-white/5' : 'bg-[#050505]/80 backdrop-blur-md'}`
        }>
        
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://media.db.com/images/public/6a2382d47f6f3ef5ee2d09b4/963a0130e_image1.jpg"
              alt="EconFlow Logo"
              className="h-10 w-auto object-contain rounded-lg" />
            
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive ?
                  'text-white bg-white/8' :
                  'text-slate-400 hover:text-white hover:bg-white/5'}`
                  }>
                  
                  {link.label}
                </Link>);

            })}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://play.econflow.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-semibold hover:from-purple-500 hover:to-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">Launch EconFlow

            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white">
              
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-4">
          
            {navLinks.map((link, i) => {
            const isActive = location.pathname === link.href;
            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}>
                
                  <Link
                  to={link.href}
                  className={`text-2xl font-display font-semibold transition-colors ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`
                  }>
                  
                    {link.label}
                  </Link>
                </motion.div>);

          })}
            <a
            href="https://play.econflow.org"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold">
            
              Play Now
            </a>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}