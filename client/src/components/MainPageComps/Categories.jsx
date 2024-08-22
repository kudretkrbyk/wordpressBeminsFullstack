import { useNavigate } from "react-router-dom";
import useFetchProducts from "../../hooks/useFetchProducts";
import Slider from "react-slick";

import "../../slick-carousel/slick.css";
import "../../slick-carousel/slick-theme.css";
import PropTypes from "prop-types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function Categories() {
  const { categories } = useFetchProducts();
  const navigate = useNavigate();

  const handleProductClick = (categoryName) => {
    navigate(`/shop/${categoryName}`);
  };
  const PrevArrow = ({ onClick }) => (
    <IoIosArrowBack
      style={{
        zIndex: "1",
      }} // Stil ve konum ayarları
      onClick={onClick} // Tıklama işlevi
      className="size-8 hover:cursor-pointer top-1/2 left-2 border border-black absolute rounded-full hover:bg-[#54d9e1] hover:text-white hover:border-none duration-300" // Varsayılan sınıf adları
    />
  );
  const NextArrow = ({ onClick }) => (
    <IoIosArrowForward
      onClick={onClick}
      className="size-8 hover:cursor-pointer top-1/2 right-2 border border-black absolute rounded-full hover:bg-[#54d9e1] hover:text-white hover:border-none duration-300 "
    ></IoIosArrowForward>
  );
  PrevArrow.propTypes = NextArrow.propTypes = {
    onClick: PropTypes.func, // onClick'in bir fonksiyon olduğunu belirtir
  };
  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    className: "react__slick__slider__parent",
  };
  return (
    <div className="w-full p-4 flex flex-col">
      <div className="w-full flex items-center justify-center">
        <span>Shop By Categories</span>
      </div>
      <div className="flex items-center justify-center w-full gap-10">
        <div className="  w-full z-50 ">
          <Slider {...settings}>
            {categories.map((category, index) => (
              <div
                onClick={() => handleProductClick(category.name)}
                key={index}
                className="w-full p-10"
              >
                <div className="flex flex-col items-center justify-center  w-full">
                  {" "}
                  <img
                    className="rounded-full w-40 h-40 object-cover object-center  hover:scale-90 duration-700  "
                    src={category.image}
                    alt={category.name}
                  />
                  <span>{category.name} </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
