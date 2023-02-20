import Pricing from 'components/Pricing';
import { Product } from 'types';
import Hero from 'components/ui/Hero';
import Footer from 'components/ui/Footer';
import Features from 'components/ui/Features';
import Features2 from 'components/ui/Features2';
import CTA from 'components/ui/CTA';

export default function HomePage() {
  return (
    <>
      <Hero/> 
      <Features/>
      <Features2/>
      <CTA/>
    </>
  )
}
