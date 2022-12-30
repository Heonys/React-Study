import Reference from "components/Reference";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Info from "./Info";

const Detail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { title, channelId, channelTitle, description } = state.list.snippet;

  return (
    <div className=" ">
      <div className="">
        <div>
          <iframe
            width="100%"
            height="640"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="w-[560px]">
          <div>{title}</div>
          <Info id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
      </div>
      <Reference id={id} />
    </div>
  );
};

export default Detail;
