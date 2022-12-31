import React from "react";
import { useNavigate } from "react-router-dom";
import { timeAgo } from "util/data";

const Card = ({ list, type }) => {
  const { channelTitle, publishedAt, thumbnails, title } = list.snippet;

  const navigate = useNavigate();
  const isList = type === "list";

  return (
    <div
      className={isList ? "flex gap-1 m-2" : ""}
      onClick={() => navigate(`/video/detail/${list.id}`, { state: { list } })}
    >
      <img className={isList ? "w-60 mr-2" : "w-full"} src={thumbnails.medium.url} alt="" />
      <div>
        <div className="font-semibold text-base line-clamp-2 ">{title}</div>
        <div>
          <div className="text-sm opacity-80 ">{channelTitle}</div>
          <div className="text-sm opacity-80">{timeAgo(publishedAt, "ko")}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
