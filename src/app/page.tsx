import HeroSlider from '@/components/home/HeroSlider';
import AboutSection from '@/components/home/AboutSection';
import ProductLineup from '@/components/home/ProductLineup';
import ConsultingOrbit from '@/components/home/ConsultingOrbit';
import PartnerMarquee from '@/components/home/PartnerMarquee';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ProductLineup />
      <ConsultingOrbit />
      <PartnerMarquee />
    </>
  );
}
