import Slider from "react-slick";
import PropTypes from "prop-types";
import "../../slick-carousel/slick.css";
import "../../slick-carousel/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";

const PrevArrow = ({ onClick }) => (
  <IoIosArrowBack
    style={{
      zIndex: "1",
    }}
    onClick={onClick}
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
  onClick: PropTypes.func,
};
export default function Instagram() {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    className: "react__slick__slider__parent",
  };

  const feeds = [
    {
      id: 1,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/12/instagram-1.jpg",
    },
    {
      id: 2,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/12/instagram-2.jpg",
    },
    {
      id: 3,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/12/instagram-3.jpg",
    },
    {
      id: 4,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/12/instagram-4.jpg",
    },
    {
      id: 5,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/12/instagram-5.jpg",
    },
    {
      id: 6,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/12/instagram.jpg",
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center ">
      <div className=" w-full h-full group">
        <Slider {...settings}>
          {feeds.map((feed) => (
            <div key={feed.id} className="p-5 w-[400px] outline-none   ">
              <div className="relative  w-full overflow-hidden rounded group/image">
                {" "}
                <img
                  src={feed.image}
                  className="w-full h-full object-cover scale-110 hover:scale-100 duration-700"
                  alt={`Feed ${feed.id}`}
                />
                <div className="absolute translate-y-3 opacity-0 group-hover/image:opacity-100   group-hover/image:-translate-y-1/2 duration-500  top-1/2  left-1/2 -translate-x-1/2  bg-white rounded-full p-3">
                  <BsInstagram className="z-30 size-5 " />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
