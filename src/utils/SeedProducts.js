import {doc,setDoc} from 'firebase/firestore';
import {db} from '../firebase';
import {PRODUCTS_SEED} from '../data/ProductSeeds';

export const seedProducts = async () => {
  await Promise.all(PRODUCTS_SEED.map(async (p) => {
    const {id,...data} = p;
    await setDoc(doc(db,'products',id),data,{merge:true});
  }));
  return {count: PRODUCTS_SEED.length};
};
