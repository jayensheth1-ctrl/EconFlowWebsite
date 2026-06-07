const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import ImpactStats from '../components/landing/ImpactStats';
import MissionSection from '../components/landing/MissionSection';
import PartnersWall from '../components/landing/PartnersWall';
import AboutSection from '../components/landing/AboutSection';
import TeamSection from '../components/landing/TeamSection';
import GlobalReach from '../components/landing/GlobalReach';
import Footer from '../components/landing/Footer';

const HERO_IMAGE = 'https://media.db.com/images/public/6a2382d47f6f3ef5ee2d09b4/84d32237b_generated_83b9fc58.png';
const MISSION_IMAGE = 'https://media.db.com/images/public/6a2382d47f6f3ef5ee2d09b4/d4f0ad0ff_generated_72b7874a.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <ImpactStats />
      <MissionSection missionImage={MISSION_IMAGE} />
      <PartnersWall />
      <AboutSection />
      <TeamSection />
      <GlobalReach />
      <Footer />
    </div>
  );
}