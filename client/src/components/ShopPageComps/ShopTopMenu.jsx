import { useNavigate, useLocation } from "react-router-dom";
import useFetchProducts from "../../hooks/useFetchProducts";
import Slider from "react-slick";
import PropTypes from "prop-types";

import "../../slick-carousel/slick.css";
import "../../slick-carousel/slick-theme.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ShopTopMenu({ handleCategoryClick }) {
  const { categories } = useFetchProducts();
  const navigate = useNavigate();
  const location = useLocation();

  const handleProductClick = (categoryName) => {
    handleCategoryClick(categoryName);
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
    <div className="w-full h-[480px] relative ">
      <div className="absolute z-20">
        <img
          src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2024/02/lookbook-3.jpg"
          alt="Lookbook"
        />
      </div>
      <div className="absolute z-30 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-xl">
        <span className="font-bold">Shop</span>
        <div className="flex">
          {" "}
          <span className=" font-bold hover:text-[#54d9e1] duration-300 hover:cursor-pointer ">
            Home{" "}
          </span>
          <span> {location.pathname}</span>
        </div>
      </div>
      <div className="absolute  w-full  bottom-10 z-20 ">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div
              onClick={() => handleProductClick(category.name)}
              key={index}
              className="w-full"
            >
              <div className="flex flex-col items-center justify-center  w-full">
                {" "}
                <img
                  className="rounded-full w-40 h-40 hover:scale-90 duration-700  "
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
  );
}
ShopTopMenu.propTypes = {
  handleCategoryClick: PropTypes.func,
};
