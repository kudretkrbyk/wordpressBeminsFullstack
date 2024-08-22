import PropTypes from "prop-types";
export default function ShopGridFilterComp({ onFilterClick }) {
  return (
    <div className="w-full flex items-center justify-between p-5 px-10">
      <div className="w-full">
        <button className="border border-gray-500 p-2"> Default Sorting</button>
      </div>
      <div className="flex items-center justify-end gap-3 w-full">
        <div
          id="1"
          className="flex items-center justify-center gap-2 border border-black p-1 w-12 h-12 cursor-pointer"
          onClick={() => onFilterClick(1)}
        >
          <div className="bg-gray-500 w-1 h-8"></div>
          <div className="bg-gray-500 w-1 h-8"></div>
        </div>
        <div
          id="2"
          className="flex items-center justify-center gap-2 border border-black p-1 w-12 h-12 cursor-pointer"
          onClick={() => onFilterClick(2)}
        >
          <div className="bg-gray-500 w-1 h-8"></div>
          <div className="bg-gray-500 w-1 h-8"></div>
          <div className="bg-gray-500 w-1 h-8"></div>
        </div>
        <div
          id="3"
          className="flex items-center justify-center gap-2 border border-black p-1 w-12 h-12 cursor-pointer"
          onClick={() => onFilterClick(3)}
        >
          <div className="bg-gray-500 w-1 h-8"></div>
          <div className="bg-gray-500 w-1 h-8"></div>
          <div className="bg-gray-500 w-1 h-8"></div>
          <div className="bg-gray-500 w-1 h-8"></div>
        </div>
        <div
          id="4"
          className="flex flex-col items-center justify-center gap-3 border border-black p-1 h-12 w-12 cursor-pointer"
          onClick={() => onFilterClick(4)}
        >
          <div className="bg-gray-500 w-8 h-1"></div>
          <div className="bg-gray-500 w-8 h-1"></div>
        </div>
      </div>
    </div>
  );
}
ShopGridFilterComp.propTypes = {
  onFilterClick: PropTypes.func.isRequired,
};
