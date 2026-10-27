import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import TrustedClients from '@/components/TrustedClients';
import Services from '@/components/Services';
import YouTubePortfolio from '@/components/YouTubePortfolio';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import SectionAnimator from '@/components/SectionAnimator';
import Team from '@/components/Team';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Studio Junction - Entertainment Reimagined</title>
        <meta name="description" content="Studio Junction brings creative visions to life through cutting-edge production, innovative storytelling, and immersive entertainment experiences for the digital age." />
      </Helmet>
      <Hero />
      <SectionAnimator><TrustedClients /></SectionAnimator>
      <SectionAnimator><Services /></SectionAnimator>
      
      {/* YouTube Portfolio section */}
      <SectionAnimator><YouTubePortfolio /></SectionAnimator>
      
      <SectionAnimator><Team /></SectionAnimator>
      <SectionAnimator><Stats /></SectionAnimator>
      <SectionAnimator><CTA /></SectionAnimator>
    </>
  );
};

export default Home;