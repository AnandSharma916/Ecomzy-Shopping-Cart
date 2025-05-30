import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Toast from "../components/Toast";
import 'react-toastify/dist/ReactToastify.css';
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [amount, setAmount] = useState(0);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const handleClick = () => {
    setToast(`You clicked on Cart page! You have ${cart.length} items.`);
  };

  return (
    <div className="mb-10" onClick={handleClick}>
      {cart.length > 0 ? (
        <div className="flex flex-row justify-center max-[1300px] mx-auto gap-x-5">
          {/* Cart Items */}
          <div className="w-[60%] flex flex-col p-2">
            {cart.map((cartItem, index) => (
              <CartItem item={cartItem} key={cartItem.id} itemIndex={index} />
            ))}
          </div>

          {/* Summary */}
          <div className="w-[40%] mt-5 flex flex-col">
            <div className="flex flex-col h-[100%] justify-between p-5 gap-5 my-14">
              <div className="flex flex-col gap-5">
                <div className="font-semibold text-xl text-green-800">Your Cart</div>
                <div className="font-semibold text-5xl text-green-700 -mt-5">Summary</div>
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold text-xl">
                    Total Items: {cart.length}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold">
                <span className="text-gray-700 font-semibold">Total Amount:</span> ${amount}
              </p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl mr-10">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col justify-center items-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</h1>
          <NavLink to="/">
            <button className="uppercase bg-green-600 p-3 px-10 rounded-lg text-white mt-6 font-semibold tracking-wider hover:bg-purple-50 duration-300 transition-all ease-in hover:text-green-600 border-2 border-green-600">
              shop now
            </button>
          </NavLink>
        </div>
      )}

      {/* Toast popup */}
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
};

export default Cart;
