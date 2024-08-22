import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ShopNow() {
  const navigate = useNavigate();

  const handleShopLink = () => {
    navigate("/shop");
  };
  return (
    <div className="w-full h-[600px] relative rounded-lg  flex items-center justify-center z-20">
      <div className="w-9/12 h-full z-20 ">
        <div className="absolute left-1/2 -translate-x-1/2  z-10 w-10/12 ">
          <img
            className="rounded-xl"
            src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2024/02/video.jpg"
          ></img>
        </div>
        <div className="absolute  w-10/12 h-full flex flex-col items-center justify-center gap-10 z-20 ">
          <div className="text-black hover:bg-[#54d9e1] size-20 rounded-full flex items-center justify-center duration-500">
            <FaPlay className="size-10" />
          </div>
          <div className="text-6xl font-bold">Step into Fashion Excellence</div>
          <div>Unveiling the Latest Trends and Must-Have Looks</div>
          <div className="p-5">
            <button
              onClick={handleShopLink}
              className="border border-black p-3 px-5 rounded-xl hover:bg-[#54d9e1] hover:border-white hover:text-white duration-500 "
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
