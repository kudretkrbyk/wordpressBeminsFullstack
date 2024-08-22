import { useNavigate } from "react-router-dom";
export default function Banner() {
  const navigate = useNavigate();

  const handleShopLink = () => {
    navigate("/shop");
  };

  return (
    <div className="flex items-center justify-center w-full gap-10 p-20 py-40 text-white text-xl font-bold">
      <div className="relative overflow-hidden rounded-xl ">
        <span className="absolute bottom-20  left-1/2 -translate-x-1/2 z-30">
          Spring Collection
        </span>
        <button
          onClick={handleShopLink}
          className="z-30 bg-white text-sm text-black rounded-xl absolute p-2 px-7 bottom-5  left-1/2 -translate-x-1/2  hover:bg-[#54d9e1] hover:text-white duration-300"
        >
          Shop Now{" "}
        </button>
        <img
          className="hover:scale-110 duration-1000 rounded-xl"
          src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/banner.jpg"
        ></img>
      </div>
      <div className="relative overflow-hidden rounded-xl">
        <span className="absolute bottom-20  left-1/2 -translate-x-1/2 z-30">
          30% off all order
        </span>
        <button
          onClick={handleShopLink}
          className="z-30 bg-white text-sm text-black rounded-xl absolute p-2 px-7 bottom-5  left-1/2 -translate-x-1/2  hover:bg-[#54d9e1] hover:text-white duration-300"
        >
          Shop Now{" "}
        </button>
        <img
          className="hover:scale-110 duration-1000 rounded-xl"
          src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/banner-1.jpg"
        ></img>
      </div>
      <div className="relative overflow-hidden rounded-xl">
        <span className="absolute z-30 bottom-20  left-1/2 -translate-x-1/2">
          Must-Have Style
        </span>
        <button
          onClick={handleShopLink}
          className="z-30 bg-white text-sm text-black rounded-xl absolute p-2 px-7 bottom-5  left-1/2 -translate-x-1/2 hover:bg-[#54d9e1] hover:text-white duration-300"
        >
          Shop Now{" "}
        </button>
        <img
          className="hover:scale-110 duration-1000 rounded-xl"
          src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/banner-2.jpg"
        ></img>
      </div>
    </div>
  );
}
