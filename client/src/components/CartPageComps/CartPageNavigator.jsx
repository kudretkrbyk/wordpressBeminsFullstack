import { Link, useLocation } from "react-router-dom";

export default function CartPageNavigator() {
  const location = useLocation();

  return (
    <div className="flex items-center justify-center gap-10 text-xl font-bold">
      <div className="flex flex-col items-center group/cart ">
        <Link className="" to="/cart">
          Cart
        </Link>
        <div
          className={`h-[2px] bg-black duration-300 ${
            location.pathname === "/cart"
              ? "w-full"
              : "w-[0px] group-hover/cart:w-full"
          }`}
        ></div>
      </div>
      <div className="flex flex-col items-center group/checkout">
        <Link to="/checkout">Checkout</Link>
        <div
          className={`h-[2px] bg-black duration-300 ${
            location.pathname === "/checkout"
              ? "w-full"
              : "w-[0px] group-hover/checkout:w-full"
          }`}
        ></div>
      </div>
      <div className="flex flex-col items-center group/order">
        <Link to="/orderTracking">Order Tracking</Link>
        <div
          className={`h-[2px] bg-black duration-300 ${
            location.pathname === "/orderTracking"
              ? "w-full"
              : "w-[0px] group-hover/order:w-full"
          }`}
        ></div>
      </div>
    </div>
  );
}
