import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "context/YoutubeApiContext";
import Card from "./Card";

const Reference = ({ id }) => {
  const { youtubeApi } = useYoutubeApi();

  const { isLoading, data: videos } = useQuery(
    ["ref", id],
    () => {
      return youtubeApi.relatedVideo(id);
    },
    { staleTime: 1000 * 60 * 5 },
  );

  return (
    <ul className="">
      {isLoading && "로딩중입니다 ... "}
      {videos &&
        videos.map((list, index) => {
          return <Card key={index} list={list} type="list" />;
        })}
    </ul>
  );
};

export default Reference;
