import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CartPageNavigator from "../components/CartPageComps/CartPageNavigator";
import handleCalculateSubTotalCost from "../functions/handleCalculateSubTotalCost";

import { updateCartItem, removeFromCart } from "../redux/slices/cartSlicie";
import CartPageCalculate from "../components/CartPageComps/CartPageCalculate";

export default function CartPage() {
  const [subTotalCost, setSubTotalCost] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const calculatedSubTotalCost = handleCalculateSubTotalCost(cartItems);
      setSubTotalCost(calculatedSubTotalCost);
    } else {
      setSubTotalCost(0); // Eğer cartItems boşsa veya null ise toplam maliyeti sıfır yapar
    }
  }, [cartItems]);

  const totalCost = subTotalCost + (subTotalCost * 18) / 100;

  const handleUpdateCart = (id, newQuantity, newColor, newSize) => {
    if (newQuantity === 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(
        updateCartItem({
          id,
          quantity: newQuantity,
          color: newColor,
          size: newSize,
        })
      );
    }
  };

  return (
    <div className="w-full h-full  flex flex-col gap-10 p-10">
      <CartPageNavigator></CartPageNavigator>
      <div className="w-full h-full flex items-center justify-center gap-10 ">
        <div className="flex flex-col gap-10 w-9/12 border ">
          <div className="flex items-center justify-between w-full border-b p-4">
            <div className="">Product</div>
            <div className="w-full flex items-center justify-end gap-20 ">
              <div>Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
            </div>
          </div>
          {cartItems.map((items, index) => (
            <div key={index} className="flex items-center justify-between ">
              <div className="flex items-center gap-3 w-full ">
                <img
                  className="w-[200px] h-[200px] object-contain object-center"
                  src={items.fotograflar[0]}
                />
                <div>
                  {items.ad},{items.selectedSize}{" "}
                </div>
              </div>
              <div className="flex items-start justify-end gap-16 w-full p-4">
                <div>{items.fiyat} </div>
                <div className="flex items-center justify-center border gap-10 p-2">
                  <span
                    onClick={() =>
                      handleUpdateCart(items.id, items.quantity + 1)
                    }
                    className="font-bold hover:cursor-pointer "
                  >
                    +
                  </span>
                  <span>{items.quantity}</span>
                  <span
                    onClick={() =>
                      handleUpdateCart(items.id, items.quantity - 1)
                    }
                    className="font-bold hover:cursor-pointer"
                  >
                    -
                  </span>
                </div>
                <div>${items.fiyat} </div>
              </div>
            </div>
          ))}
          <div>
            <div className="p-4 flex items-center justify-between ">
              <div className="flex items-center justify-center gap-3">
                <input
                  className="border focus:outline-none w-80 h-10 rounded px-2 "
                  placeholder="Coupon code"
                  type="input"
                ></input>
                <button className="bg-black text-white p-2 px-6 rounded hover:bg-[#54d9e1] duration-300">
                  Apply Coupon
                </button>
              </div>

              <div>
                <button className="border border-black rounded p-2 px-6 hover:bg-[#54d9e1] duration-300">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
        <CartPageCalculate
          SubTotalCost={subTotalCost}
          totalCost={totalCost}
        ></CartPageCalculate>
      </div>
    </div>
  );
}
