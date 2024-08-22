import PropTypes from "prop-types";

export default function CartPageCalculate({ SubTotalCost, totalCost }) {
  return (
    <div className="flex flex-col w-3/12">
      <div className="bg-[#e9e9e9] p-5 font-bold"> Cart Totals</div>
      <div className="flex flex-col bg-[#f6f6f6] p-5 gap-10">
        <div className="flex items-center justify-between gap-40 ">
          <div>Sub total</div>
          <div className="font-bold">${SubTotalCost}</div>
        </div>
        <div className="flex items-center justify-between gap-40 ">
          <div>Shipping</div>
          <div>Turkey</div>
        </div>
        <div className="flex items-center justify-between gap-40 ">
          {" "}
          <div>Total</div>
          <div className="font-bold">${totalCost} </div>
        </div>
        <div>
          <button className="text-white bg-black p-4 px-20 rounded hover:bg-[#54d9e1] duration-300">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

CartPageCalculate.propTypes = {
  SubTotalCost: PropTypes.object.isRequired,
  totalCost: PropTypes.object.isRequired,
};
