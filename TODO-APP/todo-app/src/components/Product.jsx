import React from "react";
import { useQuery } from "@tanstack/react-query";

const Product = () => {
  const { data } = useQuery(
    ["test"],
    async () => {
      console.log("fetching ... ");
      return fetch("https://jsonplaceholder.typicode.com/posts/1").then(
        (response) => response.json()
      );
    },
    { staleTime: 5000 }
  );
  return (
    <div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default Product;
