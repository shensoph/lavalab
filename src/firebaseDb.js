import {db} from './firebase';
import {getDeviceId} from './utils/deviceId';
import {
  collection,
  doc,
  increment,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc
} from 'firebase/firestore';

const deviceRef = () => doc(db,'devices',getDeviceId());

export const ensureDeviceDoc = async () => {
  await setDoc(deviceRef(),{likes:{},cart:{},updatedAt:serverTimestamp()},{merge:true});
};

export const subscribeToProducts = ({onChange,onError}) => {
  return onSnapshot(collection(db,'products'),(snap) => {
    const products = snap.docs.map((d) => ({id:d.id,...d.data()}));
    onChange(products);
  },(err) => onError?.(err));
};

export const subscribeToDeviceState = ({onChange,onError}) => {
  return onSnapshot(deviceRef(),(snap) => {
    const data = snap.data() || {};
    onChange({
      likes:data.likes || {},
      cart:data.cart || {}
    });
  },(err) => onError?.(err));
};

export const setLike = async ({productId,isLiked}) => {
  await ensureDeviceDoc();
  await updateDoc(deviceRef(),{
    [`likes.${productId}`]: isLiked ? true : null,
    updatedAt: serverTimestamp()
  });
};

export const addToCart = async ({productId,delta=1}) => {
  await ensureDeviceDoc();
  await updateDoc(deviceRef(),{
    [`cart.${productId}`]: increment(delta),
    updatedAt: serverTimestamp()
  });
};
