import CartPageNavigator from "../components/CartPageComps/CartPageNavigator";

export default function OrderTracking() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10">
      <CartPageNavigator />
      <div className="flex flex-col w-1/3 gap-5">
        <div>
          <p>
            {`To track your order please enter your Order ID in the box below and
            press the "Track" button. This was given to you on your receipt and
            in the confirmation email you should have received.`}
          </p>
        </div>
        <div>
          <p className="font-bold">Order ID</p>
          <input
            className="border focus:outline-none w-full h-10 rounded px-2 "
            placeholder="Found in your order confirmation email."
            type="input"
          ></input>
        </div>
        <div>
          <p className="font-bold">Billing email</p>
          <input
            className="border focus:outline-none w-full h-10 rounded px-2 "
            placeholder="Email you used during checkout."
            type="input"
          ></input>
        </div>
        <div className=" flex items-center justify-center ">
          <button className="p-3 px-20 bg-black text-white rounded hover:bg-[#54d9e1] duration-300">
            Track
          </button>
        </div>
      </div>
    </div>
  );
}
