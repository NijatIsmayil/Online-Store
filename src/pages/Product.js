import React from "react";
import { addToCart } from "../services/firestore";
import { motion } from "framer-motion";

const Product = ({ product }) => {
  const userId = "USER_ID"; // Replace with your user ID(when it need)

  const handleAddToCart = async () => {
    try {
      await addToCart(userId, product);
      alert("Product added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <motion.div
      className="card h-100 shadow-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {product.image && (
        <img
          src={product.image}
          className="card-img-top p-3"
          alt={product.name}
          style={{ height: "200px", objectFit: "contain" }}
        />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text fw-bold">${product.price}</p>
        <button
          className="btn btn-primary mt-auto"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default Product;