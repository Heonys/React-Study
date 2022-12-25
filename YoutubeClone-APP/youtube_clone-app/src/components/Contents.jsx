import React, { useState, useEffect } from "react";
import Card from "./Card";
import getFakeYouTubeApi from "api/getFakeYouTubeApi";
// import getYouTubeApi from "api/getYouTubeApi";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { useYoutubeApi } from "context/YoutubeApiContext";

const Contents = () => {
  const { keyword } = useParams();
  const { youtubeApi } = useYoutubeApi();

  const { isLoading, data } = useQuery(["videos", keyword], () => {
    return youtubeApi.search(keyword);
  });

  return (
    <div className="flex flex-wrap justify-center">
      {isLoading && "로딩중입니다 ... "}
      {data &&
        data.map((list, index) => {
          return <Card key={index} list={list} />;
        })}
    </div>
  );
};

export default Contents;
