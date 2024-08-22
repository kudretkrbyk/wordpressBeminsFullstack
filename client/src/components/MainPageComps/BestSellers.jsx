import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import { IoIosArrowForward } from "react-icons/io";

import useFetchProducts from "../../hooks/useFetchProducts";
import ShopProductDetails from "../ShopPageComps/ShopProductDetails";

export default function BestSellers() {
  const [idList] = useState([1, 5, 9, 21, 30, 29]);
  const { productList } = useFetchProducts();
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProducts = productList.filter((product) =>
    idList.includes(product.id)
  );

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredProducts.length - 5 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= filteredProducts.length - 5 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full h-full overflow-hidden">
      <h2 className="font-bold text-3xl">Best Sellers</h2>
      <div className="relative w-full   z-10 group/mainProduct border border-black">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 20}%)` }}
        >
          {filteredProducts.map((product, index) => (
            <div
              className="flex-none w-1/5 p-2"
              key={index}
              style={{
                opacity:
                  index >= currentIndex && index < currentIndex + 5 ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <div className="relative group overflow-hidden">
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
                          <div key={index}>{size}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute flex justify-between w-full z-30 left-0 p-10 top-1/2 -translate-y-1/2 group-hover/mainProduct:opacity-100 opacity-0">
          <div className="border border-black rounded-full p-2 flex items-center justify-center group hover:bg-[#54d9e1] duration-300">
            {" "}
            <IoIosArrowBack
              className="size-7 group-hover:text-white text-black duration-300"
              onClick={handlePrevClick}
            />
          </div>
          <div className="border border-black rounded-full p-2 flex items-center justify-center group hover:bg-[#54d9e1] duration-300">
            {" "}
            <IoIosArrowForward
              className="size-7 group-hover:text-white duration-300"
              onClick={handleNextClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
