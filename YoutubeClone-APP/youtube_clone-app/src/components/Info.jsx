import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "context/YoutubeApiContext";

const Info = ({ id, name }) => {
  const { youtubeApi } = useYoutubeApi();

  const { isLoading, data: url } = useQuery(["chenel", id], () => {
    return youtubeApi.chenelImage(id);
  });

  return (
    <div>
      {isLoading && <div> 로딩중입니다 </div>}
      {url && <img src={url} alt="" />}
      <p>{name}</p>
    </div>
  );
};
export default Info;
