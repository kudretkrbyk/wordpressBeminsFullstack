import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetchProductById from "../hooks/useFetchProductById";
import colorCodes from "../constraint/colors";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlicie";
import { addToFavorites } from "../redux/slices/favoriteSlice";
export default function ProductPage() {
  const dispatch = useDispatch();

  const { productId } = useParams(); // URL'den ürün ID'sini alır
  const { product, loading, error } = useFetchProductById(productId);
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null); // Seçilen boyut
  const [selectedColor, setSelectedColor] = useState(null); // Seçilen renk
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Ürün yüklendiğinde ve fotoğraf varsa, fotoğraf listesini oluştur
  const images = product?.fotograflar || [];
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: count,
        selectedSize, // Seçilen boyut
        selectedColor, // Seçilen renk
      })
    );
  };

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(product));
  };
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!product) return <div>No product found</div>;

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center justify-center p-10 w-full h-full gap-10">
      <div className="flex flex-col items-center  w-1/12 h-[800px]">
        {/* Slider Arrows */}
        <button onClick={handlePrev} className="p-2">
          <IoIosArrowUp size={24} />
        </button>
        <div className="flex flex-col gap-2 overflow-y-auto">
          {/* Fotoğraflar */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product image ${index + 1}`}
              className={`cursor-pointer ${
                index === currentImageIndex ? "border-2 border-black" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        <button onClick={handleNext} className="p-2">
          <IoIosArrowDown size={24} />
        </button>
      </div>
      <div className=" w-5/12 h-[800px] ">
        {/* Seçilen fotoğraf */}
        <img
          src={images[currentImageIndex]}
          alt={`Selected product image`}
          className="w-full h-full  object-center object-fill"
        />
      </div>
      <div className=" flex flex-col gap-5 items-start justify-start w-4/12 h-[800px] ">
        <div>{product.ad} </div>
        <div>{product.aciklama} </div>
        <div className="flex flex-col gap-5">
          <div>Color</div>
          <div className="flex items-start justify-center gap-5">
            {" "}
            {product.colors.map((color, index) => (
              <div
                className={`relative flex items-center justify-center size-7 rounded-full group border border-black cursor-pointer ${
                  selectedColor === color ? "border-2 border-blue-500" : ""
                }`}
                style={{ backgroundColor: colorCodes[color] || "#000000" }}
                key={index}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>Size</div>
          <div className="flex  items-center justify-center gap-4">
            {product.size.map((size, index) => (
              <div
                className={`border border-black w-5 flex items-center justify-center cursor-pointer ${
                  selectedSize === size ? "border-2 border-blue-500" : ""
                }`}
                key={index}
                onClick={() => setSelectedSize(size)}
              >
                {" "}
                {size}{" "}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-start w-full gap-4">
          <div className="flex items-center justify-center gap-10">
            <div
              onClick={handleDecrease}
              className="text-2xl hover cursor-pointer hover:text-[#54d9e1]"
            >
              -
            </div>
            <div>{count} </div>
            <div
              onClick={handleIncrease}
              className="text-2xl hover cursor-pointer hover:text-[#54d9e1]"
            >
              +
            </div>
          </div>
          <div>
            <button
              className="bg-gray-700 text-white px-16 p-2 rounded-xl"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
          <div
            onClick={handleAddToFavorites}
            className="hover:bg-[#54d9e1] duration-300 p-2 rounded hover:cursor-pointer"
          >
            <CiHeart className="size-7" />
          </div>
          <div>
            <MdCompareArrows className="size-7" />
          </div>
        </div>
        <div className="w-full">
          <button className="border border-black w-full p-2 font-bold">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
