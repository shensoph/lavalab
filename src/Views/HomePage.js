import NavBar from '../Components/NavBar';
import Header from './Header';
import CategoryTabs from '../Components/CategoryTabs';
import ProductGrid from '../Views/ProductGrid';
import Guarantees from '../Views/Guarantees';
import Footer from '../Views/Footer';
import FadeInSection from '../Components/FadeInSection';
import { CartAnimationProvider, CartAnimationContext } from '../context/CartAnimationContext';
import { useContext } from 'react';

const HomePageContent = () => {
  const { cartRef } = useContext(CartAnimationContext);
  return (
    <>
      <NavBar cartRef={cartRef} />
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
