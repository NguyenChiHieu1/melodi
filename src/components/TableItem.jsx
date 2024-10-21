import React, { useContext, useState } from "react";
import { PlayerContext } from "../context/PlayerContext";
import AnimationMusic from "./AnimationMusic";
import { assets } from "../assets/assets";
const TableItem = ({
  index,
  image,
  title,
  artist,
  dateCreated,
  category,
  time,
  id,
}) => {
  const [hovered, setHovered] = useState(false);
  const { playWithId, track, playStatus, pause } = useContext(PlayerContext);
  return (
    <div
      className="group grid grid-cols-[0.6fr_3fr_1.5fr_3fr_0.5fr_0.5fr_1fr] rounded-lg  items-center gap-0 h-16 bg-[#1E1E1E] cursor-pointer hover:bg-[#EE10B0]"
      onClick={() => {
        if (!playStatus || track._id !== id) {
          playWithId(id);
        } else {
          pause();
        }
      }}
    >
      {/* Cột 1: Ảnh */}
      <div className="flex items-center justify-center !bg-[#412c3a] h-16 ">
        <p className="text-white text-xl"># {index + 1}</p>
      </div>

      {/* Cột 2: Tiêu đề và nghệ sĩ */}
      <div className="flex items-center gap-2 -ml-1.5">
        <img src={image} alt="" className="w-16 h-16 rounded-lg" />
        <div className="flex flex-col ml-3">
          <p className="text-[18px] font-bold overflow-hidden truncate">
            {title}
          </p>
          <p className="text-white">{artist}</p>
        </div>
      </div>

      {/* Cột 3: Ngày phát hành */}
      <div className="text-white">{dateCreated}</div>

      {/* Cột 4: Thể loại nhạc */}
      <div className="text-white truncate ">{category}</div>

      {/* Cột 5: Thời gian */}
      <div className="flex items-center gap-1 text-gray-500 pr-4">
        <i
          className={`bi ${
            hovered ? "bi-heart-fill" : "bi-heart"
          } text-pink-500 mr-4 cursor-pointer group-hover:text-white`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        ></i>
        <p className="text-white">{time}</p>
      </div>
      {/* Cột 6 action */}
      <div className="text-sm w-full">
        {playStatus && track._id === id ? (
          <AnimationMusic />
        ) : (
          <img
            src={assets.play_icon}
            alt=""
            className="hidden group-hover:block w-6 h-6"
          />
        )}
      </div>
      <div className="bg-[#412c3a] h-16"></div>
    </div>
  );
};

export default TableItem;
