import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Profile from "./Profile";

export default function Navbar() {
  const location = useLocation();
  const [navbarİcon, setNavbarIcon] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const favoriteItems = useSelector((state) => state.favorites.favoriteItems);
  const navigate = useNavigate();
  const handleCartLink = () => {
    navigate("/cart");
  };
  const handleFavoritesLink = () => {
    navigate("/favorites");
  };
  const handleHomeLink = () => {
    navigate("/");
  };
  const handleProfileOpen = () => {
    setProfileOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      setNavbarIcon(true);
    } else {
      setNavbarIcon(false);
    }
  }, [location]);

  return (
    <div>
      <div
        className={`flex items-center justify-center w-full bg-white p-4 px-10  top-0 z-40 transition-all duration-300 ${
          isScrolled ? "shadow-lg  fixed" : ""
        }`}
      >
        <div className="w-8/12 flex items-center justify-between text-xl font-bold  ">
          {navbarİcon ? (
            <div className="flex items-center justify-between w-full">
              <div className="w-full ">
                {" "}
                <img
                  onClick={handleHomeLink}
                  className=" object-cover object-center w-48 hover:cursor-pointer"
                  src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2020/06/logo.png"
                ></img>
              </div>

              <div className="flex items-center w-full justify-center gap-10 ">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/blog">Blog</Link>

                <Link to="/page">Page</Link>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full ">
              <div className="flex items-center w-full justify-center gap-10 ">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/blog">Blog</Link>

                <Link to="/page">Page</Link>
              </div>
              <div className="w-full flex items-center justify-center">
                {" "}
                <img
                  onClick={handleHomeLink}
                  className=" object-cover object-center w-48 hover:cursor-pointer"
                  src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2020/06/logo.png"
                ></img>
              </div>
            </div>
          )}
        </div>

        <div className="flex w-4/12 items-center justify-center gap-10  p-2 ">
          <span className="hover:cursor-pointer ">
            <IoIosSearch className="size-6" />
          </span>
          <span onClick={handleProfileOpen} className="hover:cursor-pointer ">
            <GoPerson className="size-6" />
          </span>
          <span
            onClick={handleFavoritesLink}
            className="relative hover:cursor-pointer"
          >
            <CiHeart className="size-6" />
            <div className="bg-[#54d9e1] rounded-full size-6 absolute -top-2 -right-3 flex items-center justify-center">
              {favoriteItems.length}
            </div>
          </span>
          <span
            onClick={handleCartLink}
            className="relative hover:cursor-pointer "
          >
            <IoBagOutline className="size-6 " />

            <div className="bg-[#54d9e1] rounded-full size-6 absolute -top-2 -right-3 flex items-center justify-center">
              {cartItems.length}
            </div>
          </span>
        </div>
      </div>{" "}
      <div className="py-10">
        <Profile
          profileOpen={profileOpen}
          setProfileOpen={setProfileOpen}
        ></Profile>
      </div>
    </div>
  );
}
