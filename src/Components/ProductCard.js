import { useRef } from 'react';
import './ProductCard.css';

const ProductCard = ({product,isLiked,onToggleLike,onAddToCart}) => {
  const formatMoney = (n) => `$${n}`;
  const productImgRef = useRef(null);

  const handleAddToCart = () => {
    const rect = productImgRef.current?.getBoundingClientRect?.();
    const imageSrc = product.image;
    onAddToCart(product, rect ? { sourceRect: rect, imageSrc } : null);
  };

  return (
    <article className="product-card">
      <div className="product-media">
        {product.discountText ? (
          <span className="product-badge">{product.discountText}</span>
        ) : null}

        <button
          className="wish-btn"
          type="button"
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={() => onToggleLike(product.id)}
        >
          <img
            className="wish-icon"
            src={isLiked ? product.heartFilled : product.heartEmpty}
            alt=""
          />
        </button>

        <img ref={productImgRef} className="product-img" src={product.image} alt={product.title} />

        <button className="add-to-cart" type="button" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>

      <div className="product-meta">
        <h3 className="product-title">{product.title}</h3>

        <div className="product-price">
          <span className={product.originalPrice ? 'price-now sale' : 'price-now'}>
            {formatMoney(product.price)}
          </span>

          {product.originalPrice ? (
            <span className="price-was">{formatMoney(product.originalPrice)}</span>
          ) : null}
        </div>

        <div className="product-rating" aria-label={`${product.rating} out of 5 stars`}>
          <Stars value={product.rating} />
          <span className="review-count">({product.reviewCount})</span>
        </div>
      </div>
    </article>
  );
};

const Stars = ({value}) => {
  const full = Math.max(0,Math.min(5,Math.floor(value)));
  const empty = 5 - full;

  return (
    <span className="stars">
      {Array.from({length:full}).map((_,i) => (
        <span className="star star-full" key={`f-${i}`}>★</span>
      ))}
      {Array.from({length:empty}).map((_,i) => (
        <span className="star star-empty" key={`e-${i}`}>★</span>
      ))}
    </span>
  );
};

export default ProductCard;
