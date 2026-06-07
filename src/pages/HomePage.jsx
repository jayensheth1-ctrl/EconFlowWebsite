const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import PageLayout from '../components/landing/PageLayout';
import HeroSection from '../components/landing/HeroSection';
import GlobalReach from '../components/landing/GlobalReach';
import HomePartnersSection from '../components/landing/HomePartnersSection';

const HERO_IMAGE = 'https://media.db.com/images/public/6a2382d47f6f3ef5ee2d09b4/84d32237b_generated_83b9fc58.png';

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection heroImage={HERO_IMAGE} />
      <GlobalReach />
      <HomePartnersSection />
    </PageLayout>
  );
}