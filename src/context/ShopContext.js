import {createContext,useEffect,useMemo,useState} from 'react';
import {loadLocal,saveLocal} from '../utils/storage';

export const ShopContext = createContext(null);

const LIKES_KEY = 'shop.likes.v1';
const CART_KEY = 'shop.cart.v1';

export const ShopProvider = ({children}) => {
  const [likedIds,setLikedIds] = useState(() => {
    const arr = loadLocal(LIKES_KEY,[]);
    return new Set(Array.isArray(arr) ? arr : []);
  });

  const [cartById,setCartById] = useState(() => {
    const obj = loadLocal(CART_KEY,{});
    return (obj && typeof obj === 'object' && !Array.isArray(obj)) ? obj : {};
  });

  useEffect(() => {
    saveLocal(LIKES_KEY,Array.from(likedIds));
  },[likedIds]);

  useEffect(() => {
    saveLocal(CART_KEY,cartById);
  },[cartById]);

  const toggleLike = (id) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const addToCart = (id,qty=1) => {
    setCartById((prev) => {
      const nextQty = (prev[id] ?? 0) + qty;
      return {...prev,[id]: nextQty};
    });
  };

  const removeFromCart = (id,qty=1) => {
    setCartById((prev) => {
      const current = prev[id] ?? 0;
      const nextQty = current - qty;
      if (nextQty <= 0) {
        const {[id]:_,...rest} = prev;
        return rest;
      }
      return {...prev,[id]: nextQty};
    });
  };

  const clearCart = () => setCartById({});

  const cartCount = useMemo(() => {
    return Object.values(cartById).reduce((sum,n) => sum + (Number(n) || 0),0);
  },[cartById]);

  const value = useMemo(() => ({
    likedIds,
    cartById,
    cartCount,
    toggleLike,
    addToCart,
    removeFromCart,
    clearCart
  }),[likedIds,cartById,cartCount]);

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};
