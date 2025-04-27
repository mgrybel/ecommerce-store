import Hero from './sections/Hero';
import MainCarousel from './sections/MainCarousel';
import Services from './sections/Services';
import FeaturedProducts from './sections/FeaturedProducts';
import CallToAction from './sections/CallToAction';
import FooterHome from './sections/FooterHome';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <MainCarousel />
      <Services />
      <CallToAction />
      <FooterHome />
    </div>
  );
};

export default HomePage;
