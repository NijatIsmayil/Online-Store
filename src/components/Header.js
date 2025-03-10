import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="https://marketplace.canva.com/EAFvDRwEHHg/1/0/1600w/canva-colorful-abstract-online-shop-free-logo-cpI8ixEpis8.jpg" // Замени на ссылку на твоё лого
              alt="Logo"
              className="me-2"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            />
            <span>Online Store</span>
          </Link>
        </motion.div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Mainmenu*/}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <motion.li
              className="nav-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link className="nav-link" to="/" onClick={toggleMenu}>
                Home
              </Link>
            </motion.li>
            <motion.li
              className="nav-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link className="nav-link" to="/cart" onClick={toggleMenu}>
                Cart
              </Link>
            </motion.li>
            <motion.li
              className="nav-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link className="nav-link" to="/checkout" onClick={toggleMenu}>
                Checkout
              </Link>
            </motion.li>
            <motion.li
              className="nav-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link className="nav-link" to="/auth" onClick={toggleMenu}>
                Login
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;