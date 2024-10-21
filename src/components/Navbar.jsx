import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLogin, infoLogin } = useContext(PlayerContext);
  return (
    <div className="mx-5">
      <div className="w-full flex justify-between items-center font-semibold ">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1, { replace: true })}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1, { replace: true })}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          {/* <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block">
            Explore Premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px">
            Install App
          </p> */}
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 ">
        {/* <!-- Thanh tìm kiếm --> */}
        <div className="flex items-center bg-slate-600 rounded-2xl h-10 w-1/2">
          <img
            src={assets.search_icon}
            alt="search"
            className="h-6 pl-3 cursor-pointer"
          />
          <input
            className="bg-slate-600 text-white placeholder-gray-400 rounded-r-2xl w-full h-full pl-2 focus:outline-none"
            type="text"
            placeholder="Search For Musics, Artists, Albums..."
          />
        </div>

        {/* <!-- Các mục điều hướng --> */}
        <div className="flex gap-4">
          <p className=" text-white text-xl px-4 py-2 rounded-2xl cursor-pointer hover:bg-gray-700 transition-all duration-300">
            About
          </p>
          <p className=" text-white text-xl px-4 py-2 rounded-2xl cursor-pointer hover:bg-gray-700 transition-all duration-300">
            Contact
          </p>
          <p className=" text-white text-xl px-4 py-2 rounded-2xl cursor-pointer hover:bg-gray-700 transition-all duration-300">
            Premium
          </p>
        </div>

        {/* <!-- Nút đăng nhập và đăng ký --> */}
        {isLogin ? (
          // <div>
          <div className="bg-purple-500 text-white w-12 h-12 uppercase rounded-full flex items-center justify-center border-white">
            {infoLogin.name.charAt(0)}
          </div>
        ) : (
          // </div>
          <div className="flex gap-4">
            <button
              className="bg-black text-pink-500 font-bold py-1 px-8 rounded-xl hover:bg-slate-900 hover:text-pink-400"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="bg-pink-500 text-black font-bold py-1 px-4 border-2 border-pink-300 rounded-xl hover:bg-pink-600 hover:text-black"
              onClick={() => navigate("/sign-up")}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
