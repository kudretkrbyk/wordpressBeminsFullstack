import { GoPerson } from "react-icons/go";
import { BiSolidDiscount } from "react-icons/bi";
import { GoDotFill, GoDot } from "react-icons/go";

import { useSelector } from "react-redux";

import ChectOutForm from "../components/CheckOutPageComps/ChectOutForm";
import CartPageNavigator from "../components/CartPageComps/CartPageNavigator";
import handleCalculateSubTotalCost from "../functions/handleCalculateSubTotalCost";
import { useEffect, useState } from "react";

export default function CheckOut() {
  const [subTotalCost, setSubTotalCost] = useState(0);
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
  return (
    <div className="w-full h-full flex flex-col items-center gap-10 ">
      <CartPageNavigator></CartPageNavigator>

      <div className="w-8/12 flex items-center justify-between ">
        <div className="flex items-center gap-2 bg-[#f2f2f2] p-5 px-10">
          <GoPerson className="size-5" />
          <div>
            <span>Returning customer?</span>
            <span className="font-bold"> Click here to login</span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#f2f2f2] p-5 px-10">
          <BiSolidDiscount className="size-5" />
          <div>
            <span>Have a coupon?</span>
            <span className="font-bold"> Click here to enter your code</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 w-full p-10">
        <ChectOutForm></ChectOutForm>
        <div className="w-2/5 h-full flex flex-col gap-4 border border-black p-10">
          <div>Product</div>
          <div className="flex flex-col gap-2">
            {" "}
            {cartItems.map((item, index) => (
              <div
                className="w-full flex items-start justify-between"
                key={index}
              >
                <div>
                  {" "}
                  <div className="w-full flex items-start justify-center p-3">
                    <div className="flex flex-col gap-4">
                      <img
                        className="w-[100px] h-[100px] object-contain object-center"
                        src={item.fotograflar[0]}
                      ></img>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                      <span>{item.ad} </span>
                      <span className="font-bold">QTY:{item.quantity} </span>
                    </div>
                  </div>
                </div>

                <div>$ {item.fiyat}</div>
              </div>
            ))}
          </div>
          <div className="bg-black w-full h-[1px]"></div>
          <div className="w-full flex items-center justify-between">
            <div>Subtotal</div>
            <div className="text-2xl"> ${subTotalCost}</div>
          </div>
          <div className="bg-black w-full h-[1px]"></div>
          <div className="w-full flex items-center justify-between">
            <div>Shipping</div>
            <div className="text-2xl flex items-center">
              <GoDotFill className="size-7" /> <span> Flat rate</span>
            </div>
          </div>
          <div className="bg-black w-full h-[1px]"></div>

          <div className="w-full flex items-center justify-between">
            <div>Total</div>
            <div className="text-2xl"> ${totalCost}</div>
          </div>

          <div className="flex flex-col gap-5 border border-black p-3">
            <div className="flex items-center">
              <GoDotFill className="size-7" />
              <span> Direct bank transfer</span>
            </div>
            <div>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                <GoDot className="size-5" /> <span>Chech Payments</span>
              </div>
              <div className="flex items-center gap-1">
                <GoDot className="size-5" /> <span>Cash on delivery</span>
              </div>
              <div className="flex items-center gap-1">
                <GoDot className="size-5" /> <span>Paypal</span>
              </div>
            </div>
          </div>

          <div>
            <button className="w-full bg-black text-white p-2 rounded hover:bg-[#54d9e1] duration-300">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
