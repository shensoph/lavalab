import {useMemo,useContext} from 'react';
import './ProductGrid.css';

import ProductCard from '../Components/ProductCard';
import {CartAnimationContext} from '../context/CartAnimationContext';
import {ShopContext} from '../context/ShopContext';

import blueShoe from '../assets/images/blueShoe.png';
import greenShoe from '../assets/images/greenShoes.png';
import redShoe from '../assets/images/redShoe.png';
import whiteShoe from '../assets/images/whiteShoe.png';
import heartFilled from '../assets/images/heartFilled.svg';
import heartEmpty from '../assets/images/heartEmpty.svg';

const ProductGrid = () => {
  const products = useMemo(() => ([
    {id:'p1',title:'HAVIT HV-G92 Gamepad',price:160,originalPrice:null,rating:5,reviewCount:88,image:whiteShoe,heartFilled,heartEmpty},
    {id:'p2',title:'HAVIT HV-G92 Gamepad',price:160,originalPrice:null,rating:5,reviewCount:88,image:redShoe,heartFilled,heartEmpty},
    {id:'p3',title:'HAVIT HV-G92 Gamepad',price:160,originalPrice:null,rating:5,reviewCount:88,image:blueShoe,heartFilled,heartEmpty},
    {id:'p4',title:'HAVIT HV-G92 Gamepad',price:960,originalPrice:1160,discountText:'-35%',rating:4,reviewCount:75,image:greenShoe,heartFilled,heartEmpty},
    {id:'p5',title:'HAVIT HV-G92 Gamepad',price:160,originalPrice:null,rating:5,reviewCount:88,image:blueShoe,heartFilled,heartEmpty},
    {id:'p6',title:'HAVIT HV-G92 Gamepad',price:960,originalPrice:1160,discountText:'-35%',rating:4,reviewCount:75,image:greenShoe,heartFilled,heartEmpty},
    {id:'p7',title:'HAVIT HV-G92 Gamepad',price:160,originalPrice:null,rating:5,reviewCount:88,image:redShoe,heartFilled,heartEmpty},
    {id:'p8',title:'HAVIT HV-G92 Gamepad',price:960,originalPrice:1160,discountText:'-35%',rating:4,reviewCount:75,image:whiteShoe,heartFilled,heartEmpty},
  ]),[]);

  const {runGenieAnimation} = useContext(CartAnimationContext) ?? {};
  const shop = useContext(ShopContext);

  const addToCart = (product,flyData) => {
    if (runGenieAnimation && flyData?.sourceRect && flyData?.imageSrc) {
      runGenieAnimation(flyData,() => {
        shop?.addToCart(product.id,1);
      });
    } else {
      shop?.addToCart(product.id,1);
    }
  };

  return (
    <section className="product-section">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isLiked={shop?.likedIds?.has(product.id)}
            onToggleLike={shop?.toggleLike}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
