import NavBar from '../Components/NavBar';
import Header from './Header';
import CategoryTabs from '../Components/CategoryTabs';
import ProductGrid from '../Views/ProductGrid';
import Guarantees from '../Views/Guarantees';
import Footer from '../Views/Footer';


const HomePage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <CategoryTabs />
      <ProductGrid />
      <Guarantees />
      <Footer />
    </>
  );
};

export default HomePage;
