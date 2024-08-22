import Slider from "react-slider";
import PropTypes from "prop-types";

export default function ShopPageFilterSlider({
  priceRange,
  maxPrice,
  handlePriceChange,
}) {
  return (
    <div className="Filter ">
      <div className="font-bold">Price</div>
      <Slider
        className="horizontal-slider"
        thumbClassName="thumb"
        trackClassName="track"
        value={priceRange}
        min={0}
        max={maxPrice}
        step={10}
        onChange={handlePriceChange}
      />
      <div className="flex flex-col gap-2 ">
        <div className="bg-black w-full h-1"></div>
        <div className="flex items-center justify-between w-full">
          {" "}
          <span>{priceRange[0]} TL</span>
          <span>{priceRange[1]} TL</span>
        </div>
        <div>
          <span>
            Range: {priceRange[0]}-{priceRange[1]}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
ShopPageFilterSlider.propTypes = {
  priceRange: PropTypes.arrayOf(PropTypes.number).isRequired,
  handlePriceChange: PropTypes.func.isRequired,
  maxPrice: PropTypes.number.isRequired,
};
