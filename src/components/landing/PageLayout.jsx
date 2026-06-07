import React from 'react';
import Navbar from './Navbar';

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <div className="py-6 text-center">
        <p className="text-xs text-slate-600">© 2026 EconFlow. All rights reserved.</p>
      </div>
    </div>
  );
}