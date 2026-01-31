import {useEffect,useMemo,useState,useContext} from 'react';
import './ProductGrid.css';

import ProductCard from '../Components/ProductCard';
import {CartAnimationContext} from '../context/CartAnimationContext';
import {ShopContext} from '../context/ShopContext';

import {collection,getDocs} from 'firebase/firestore';
import {db} from '../firebase';

import blueShoe from '../assets/images/blueShoe.png';
import greenShoe from '../assets/images/greenShoes.png';
import redShoe from '../assets/images/redShoe.png';
import whiteShoe from '../assets/images/whiteShoe.png';
import heartFilled from '../assets/images/heartFilled.svg';
import heartEmpty from '../assets/images/heartEmpty.svg';

const ProductGrid = () => {
  const {runGenieAnimation} = useContext(CartAnimationContext) ?? {};
  const shop = useContext(ShopContext);

  const imageByKey = useMemo(() => ({
    blueShoe,
    greenShoe,
    redShoe,
    whiteShoe
  }),[]);

  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    const load = async () => {
      try {
        const snap = await getDocs(collection(db,'products'));
        const next = snap.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            ...data,
            image: imageByKey[data.imageKey] ?? whiteShoe,
            heartFilled,
            heartEmpty
          };
        });

        if (alive) setProducts(next);
      } finally {
        if (alive) setLoading(false);
      }
    };

    load();
    return () => { alive = false; };
  },[imageByKey]);

  const addToCart = (product,flyData) => {
    if (runGenieAnimation && flyData?.sourceRect && flyData?.imageSrc) {
      runGenieAnimation(flyData,() => {
        shop?.addToCart(product.id,1);
      });
    } else {
      shop?.addToCart(product.id,1);
    }
  };

  if (loading) {
    return (
      <section className="product-section">
        <div className="product-grid">Loading…</div>
      </section>
    );
  }

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
