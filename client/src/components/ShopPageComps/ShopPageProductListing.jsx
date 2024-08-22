import ShopGridFilterComp from "./ShopGridFilterComp";
import ShopProductDetails from "./ShopProductDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function ShopPageProductListing({ filteredProducts }) {
  const navigate = useNavigate();
  const [gridCols, setGridCols] = useState("grid-cols-3"); // Varsayılan grid kolonları
  const [visibleProducts, setVisibleProducts] = useState(10); // Başlangıçta 10 ürün göster
  const handleShowMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 10); // Her seferinde 10 ürün daha göster
  };
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleFilterClick = (id) => {
    switch (id) {
      case 1:
        setGridCols("grid-cols-2");
        break;
      case 2:
        setGridCols("grid-cols-3");
        break;
      case 3:
        setGridCols("grid-cols-4");
        break;
      case 4:
        setGridCols("grid-rows-1");
        break;
      default:
        setGridCols("grid-cols-3");
        break;
    }
  };
  return (
    <div className="w-9/12 h-full ">
      <ShopGridFilterComp onFilterClick={handleFilterClick} />
      <div className={`grid ${gridCols} gap-4 p-4 overflow-hidden`}>
        {filteredProducts.slice(0, visibleProducts).map(
          (
            product,
            index // Yalnızca visibleProducts kadar ürün göster
          ) => (
            <div
              onClick={() => handleProductClick(product.id)}
              className="relative group overflow-hidden "
              key={index}
            >
              <div className="relative">
                <img
                  src={product.fotograflar[0]}
                  alt={product.name}
                  className="transition-opacity duration-500 ease-in-out"
                />
                <img
                  src={product.fotograflar[1]}
                  alt={product.name}
                  className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
                />
              </div>
              <div className="bg-red-500 w-auto flex items-center justify-center absolute top-3 left-0 rounded p-1 px-3 ">
                {product.tag[0]}
              </div>
              <ShopProductDetails />
              {product.size.length > 0 && (
                <div className=" group-hover:opacity-60 opacity-0 flex  duration-700 flex-col items-center justify-center absolute bottom-0  bg-white w-full h-16 ">
                  <div>
                    <div>Select Options</div>
                    <div className="flex items-center justify-center gap-4">
                      {product.size.map((size, index) => (
                        <div key={index}>{size} </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </div>
      {visibleProducts < filteredProducts.length && (
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleShowMoreProducts}
          >
            Daha Fazla Göster
          </button>
        </div>
      )}
    </div>
  );
}
ShopPageProductListing.propTypes = {
  filteredProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      ad: PropTypes.string.isRequired,
      fotograflar: PropTypes.arrayOf(PropTypes.string).isRequired,
      tag: PropTypes.arrayOf(PropTypes.string).isRequired,
      size: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
