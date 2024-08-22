import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../redux/slices/favoriteSlice";

export default function Favorites() {
  const favoriteItems = useSelector((state) => state.favorites.favoriteItems);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="w-full h-[400px] overflow-hidden relative border border-black">
        {" "}
        <div className="absolute  top-0 z-20">
          <img
            src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2024/02/lookbook-3.jpg"
            alt="Lookbook"
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30 flex flex-col text-2xl  items-center justify-center w-full">
          <div>Favorites</div>
          <div>
            <span className="font-bold hover:text-[#54d9e1] duration-300 hover:cursor-pointer">
              Home{" "}
            </span>
            <span> {location.pathname}</span>
          </div>
        </div>
      </div>
      <div className="">
        {favoriteItems.map((item, index) => (
          <div className="flex p-5" key={index}>
            <div className="flex items-center justify-start gap-5 border w-full p-5">
              <div
                onClick={() => handleRemoveFromFavorites(item.id)}
                className="button w-12 h-12 group relative bg-white  rounded-full"
              >
                <div className="w-5 h-[3px] absolute top-6 right-4 -rotate-45 bg-black group-hover:rotate-0 duration-300"></div>
                <div className="w-5 h-[3px] absolute top-6 right-4 rotate-45 bg-black group-hover:rotate-180 duration-300"></div>
              </div>

              <div>
                <img className="w-24" src={item.fotograflar[0]}></img>
              </div>
              <div className="flex flex-col text-2xl">
                <div> {item.ad} </div>
                <div> {item.SKU} </div>
                <div className="font-bold">$ {item.fiyat} </div>
              </div>
            </div>
            <div className="w-full border flex items-center justify-start p-5">
              <button
                onClick={() => handleProductClick(item.id)}
                className="bg-black p-2 px-5 text-white"
              >
                Select Options
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
