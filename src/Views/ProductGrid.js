import { useMemo, useState, useContext } from 'react';
import './ProductGrid.css';

import ProductCard from '../Components/ProductCard';
import { CartAnimationContext } from '../context/CartAnimationContext';

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
  ]), []);

  const [liked,setLiked] = useState(() => new Set());
  const { runGenieAnimation } = useContext(CartAnimationContext) ?? {};

  const toggleLike = (id) => {
    setLiked((prev) => {
      const next = new Set(prev);
      if(next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const addToCart = (product, flyData) => {
    if (runGenieAnimation && flyData?.sourceRect && flyData?.imageSrc) {
      runGenieAnimation(flyData, () => {
        console.log('Add to cart:', product.id);
      });
    } else {
      console.log('Add to cart:', product.id);
    }
  };

  return (
    <section className="product-section">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isLiked={liked.has(product.id)}
            onToggleLike={toggleLike}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
