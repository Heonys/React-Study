import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const reg = new RegExp(/[&]..../, "g");
const Card = ({ list }) => {
  const navigate = useNavigate();
  const { keyword } = useParams();

  const onClick = () => {
    navigate(`/video/detail/${list.id}`);
  };

  return (
    <section className=" card flex flex-col" onClick={onClick}>
      <img className="w-full h-[60%]  p-1" src={list.snippet.thumbnails.default.url} alt="" />
      <div className="flex flex-col justify-center flex-1">
        <div className=" px-1 text-[12px] text-white">
          {list.snippet.title.replace(reg, "").length > 37
            ? list.snippet.title.replace(reg, "").substr(0, 37) + "..."
            : list.snippet.title.replace(reg, "")}
        </div>
        <div className="px-1">
          <div className="text-[10px] text-[#ddd]">{list.snippet.channelTitle}</div>
          <div className="text-[10px] text-[#ddd]">{list.snippet.publishTime}</div>
        </div>
      </div>
    </section>
  );
};

export default Card;
