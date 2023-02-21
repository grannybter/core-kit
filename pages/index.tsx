import Pricing from 'components/Pricing';
import { Product } from 'types';
import Hero from 'components/ui/Hero';
import Footer from 'components/ui/Footer';
import Features from 'components/ui/Features';
import Features2 from 'components/ui/Features2';
import CTA from 'components/ui/CTA';
import LastCommit from 'components/ui/LastCommit';

export default function HomePage() {
  return (
    <>
      <Hero/> 
      <Features/>
      <LastCommit/>
      <Features2/>
      <CTA/>
    </>
  )
}
