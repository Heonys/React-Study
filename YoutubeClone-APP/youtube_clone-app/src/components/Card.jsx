import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { timeAgo } from "util/data";

const Card = ({ list }) => {
  const { channelTitle, publishedAt, thumbnails, title } = list.snippet;

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/video/detail/${list.id}`, { state: { list } })}>
      <img className="w-full" src={thumbnails.medium.url} alt="" />
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
