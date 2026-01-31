import NavBar from '../Components/NavBar';
import Header from './Header';
import CategoryTabs from '../Components/CategoryTabs';
import ProductGrid from '../Views/ProductGrid';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <CategoryTabs />
      <ProductGrid />
    </>
  );
};

export default HomePage;
