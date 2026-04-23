import HeroSlider from '@/components/home/HeroSlider';
import AboutSection from '@/components/home/AboutSection';
import ProductLineup from '@/components/home/ProductLineup';
import ConsultingOrbit from '@/components/home/ConsultingOrbit';
import TheraTalkSection from '@/components/home/TheraTalkSection';
import PartnerMarquee from '@/components/home/PartnerMarquee';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ProductLineup />
      <ConsultingOrbit />
      <TheraTalkSection />
      <PartnerMarquee />
    </>
  );
}
