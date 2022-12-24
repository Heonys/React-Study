import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getFirstApi } from "api/getFirstApi";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Contents = () => {
  const { keyword } = useParams();

  useEffect(() => {
    console.log("keyword ::", keyword);
  }, [keyword]);

  const { isLoading, data } = useQuery(["videos", keyword], async () => {
    return getFirstApi(keyword ? "search" : "popular");
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
