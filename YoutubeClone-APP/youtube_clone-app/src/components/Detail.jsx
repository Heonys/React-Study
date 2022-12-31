import Reference from "components/Reference";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Info from "./Info";

const Detail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { title, channelId, channelTitle, description } = state.list.snippet;

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="basis-4/6">
        <div>
          <iframe
            width="100%"
            height="640"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameborder="0"
          ></iframe>
        </div>
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <Info id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </div>
      <div className="basis-2/6">
        <Reference id={id} />
      </div>
    </div>
  );
};

export default Detail;
