import React, { useState, useEffect } from "react";
import Card from "./Card";

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
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
      {isLoading && "로딩중입니다 ... "}
      {data &&
        data.map((list, index) => {
          return <Card key={index} list={list} />;
        })}
    </ul>
  );
};

export default Contents;
