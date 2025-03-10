import React, { useEffect, useState } from "react";
import { getCart, removeFromCart, updateCartItemQuantity } from "../services/firestore";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const userId = "USER_ID"; // Replace with the user ID(when it need)

  useEffect(() => {
    const fetchCart = async () => {
      const data = await getCart(userId);
      setCartItems(data);
    };
    fetchCart();
  }, [userId]);

  const handleRemove = async (cartItemId) => {
    await removeFromCart(cartItemId);
    setCartItems(cartItems.filter((item) => item.id !== cartItemId));
  };

  const handleIncreaseQuantity = async (cartItemId, currentQuantity) => {
    const newQuantity = currentQuantity + 1;
    await updateCartItemQuantity(cartItemId, newQuantity);
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleDecreaseQuantity = async (cartItemId, currentQuantity) => {
    if (currentQuantity > 1) {
      const newQuantity = currentQuantity - 1;
      await updateCartItemQuantity(cartItemId, newQuantity);
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === cartItemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "80px", 
                            height: "80px", 
                            objectFit: "cover", 
                            borderRadius: "8px", 
                          }}
                        />
                      )}
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() =>
                            handleDecreaseQuantity(item.id, item.quantity)
                          }
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() =>
                            handleIncreaseQuantity(item.id, item.quantity)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-end mt-4">
            <h4>Total: ${totalPrice.toFixed(2)}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;