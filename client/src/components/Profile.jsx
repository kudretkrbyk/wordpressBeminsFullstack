import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
export default function Profile({ profileOpen, setProfileOpen }) {
  const profileRef = useRef(null);

  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setProfileOpen(false); // Dışarı tıklanırsa div'i kapat
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div>
      {profileOpen && (
        <div className="w-full h-full shadow-3xl z-50">
          <div className="filtre w-full h-full bg-black fixed top-0 left-0 z-40 opacity-40"></div>
          <div className="py-4 w-full h-full fixed top-0 left-1/3 z-50">
            <div
              className="profile-content bg-white flex flex-col w-[500px] h-full rounded gap-12 overflow-hidden"
              ref={profileRef}
            >
              <div className="relative z-50">
                <img
                  className="object-cover object-center w-full h-full"
                  src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2024/02/sing-in.jpg"
                  alt="Sign In"
                />
                <div className="absolute bottom-0 left-0 p-7 text-2xl">
                  Sign In
                </div>
                <div
                  className="button w-12 h-12 group absolute bg-white top-2 right-2 rounded-full"
                  onClick={() => setProfileOpen(false)} // Butona tıklanınca div'i kapat
                >
                  <div className="w-5 h-[3px] absolute top-6 right-4 -rotate-45 bg-black group-hover:rotate-0 duration-300"></div>
                  <div className="w-5 h-[3px] absolute top-6 right-4 rotate-45 bg-black group-hover:rotate-180 duration-300"></div>
                </div>
              </div>
              <div className="flex flex-col gap-3 z-50 px-5">
                <div className="z-50">
                  <label>
                    <input
                      className="border focus:outline-none w-full h-10 rounded px-2 bg-blue-100"
                      placeholder="Name*"
                      type="text"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      className="border focus:outline-none w-full h-10 rounded px-2 bg-blue-100"
                      placeholder="Password"
                      type="password"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full items-start justify-center group z-50">
                  <div className="group-hover:text-[#54d9e1] duration-300 w-36">
                    Lost your password?
                    <div className="flex items-center justify-center">
                      <div className="w-36 bg-black h-[2px] group-hover:bg-[#54d9e1] group-hover:w-20 duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-5 z-50 p-10">
                <div className="z-50">
                  <button className="w-full text-white bg-black p-2 rounded hover:bg-[#54d9e1] duration-300">
                    Sign In
                  </button>
                </div>
                <div className="z-50">
                  <button className="w-full text-white bg-[#0009] p-2 rounded hover:bg-[#54d9e1] duration-300">
                    Create An Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
Profile.propTypes = {
  profileOpen: PropTypes.object,
  setProfileOpen: PropTypes.object,
};
