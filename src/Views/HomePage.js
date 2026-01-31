import { useState, useContext } from 'react';
import './HomePage.css';
import NavBar from '../Components/NavBar';
import Banner from '../Components/Banner';
import Header from './Header';
import CategoryTabs from '../Components/CategoryTabs';
import ProductGrid from '../Views/ProductGrid';
import Guarantees from '../Views/Guarantees';
import Footer from '../Views/Footer';
import FadeInSection from '../Components/FadeInSection';
import { CartAnimationProvider, CartAnimationContext } from '../context/CartAnimationContext';

const HomePageContent = () => {
  const { cartRef } = useContext(CartAnimationContext);
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner && <Banner onDismiss={() => setShowBanner(false)} />}
      <NavBar cartRef={cartRef} hasBannerAbove={showBanner} />
      <div className={`mainContent ${showBanner ? 'withBanner' : ''}`}>
        <FadeInSection>
          <Header />
        </FadeInSection>
        <FadeInSection>
          <CategoryTabs />
        </FadeInSection>
        <FadeInSection>
          <ProductGrid />
        </FadeInSection>
        <FadeInSection>
          <Guarantees />
        </FadeInSection>
        <FadeInSection>
          <Footer />
        </FadeInSection>
      </div>
    </>
  );
};

const HomePage = () => {
  return (
    <CartAnimationProvider>
      <HomePageContent />
    </CartAnimationProvider>
  );
};

export default HomePage;