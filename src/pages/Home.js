import React, { useEffect, useState } from "react";
import { getProducts } from "../services/firestore";
import Product from "./Product";
import { motion } from "framer-motion";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Welcome to the Online Store!</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Product product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;