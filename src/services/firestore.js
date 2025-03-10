import { db } from "../Firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Get all products
export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Get cart items
export const getCart = async (userId) => {
  const querySnapshot = await getDocs(collection(db, "cart"));
  return querySnapshot.docs
    .filter((doc) => doc.data().userId === userId)
    .map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Get total price of cart items
export const addToCart = async (userId, product) => {
  await addDoc(collection(db, "cart"), {
    userId,
    productId: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
    image: product.image,
  });
};

// Delete product from cart
export const removeFromCart = async (cartItemId) => {
  await deleteDoc(doc(db, "cart", cartItemId));
};

// Update cart item quantity
export const updateCartItemQuantity = async (cartItemId, newQuantity) => {
  const cartItemRef = doc(db, "cart", cartItemId);
  await updateDoc(cartItemRef, { quantity: newQuantity });
};
