import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "context/YoutubeApiContext";

const Info = ({ id, name }) => {
  const { youtubeApi } = useYoutubeApi();

  const { isLoading, data: url } = useQuery(
    ["chenel", id],
    () => {
      return youtubeApi.chenelImage(id);
    },
    { staleTime: 1000 * 60 * 5 },
  );

  return (
    <div className="flex my-4 mb-8 items-center">
      {isLoading && <div> 로딩중입니다 </div>}
      {url && <img className="w-10 h-10 rounded-full" src={url} alt="" />}
      <p className="text-lg font-medium ml-2">{name}</p>
    </div>
  );
};
export default Info;
