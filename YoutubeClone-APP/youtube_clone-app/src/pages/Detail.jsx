import ChenelInfo from "components/ChenelInfo";
import Reference from "components/Reference";
import Video from "components/Video";
import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  // const { id } = useParams();

  return (
    <div className="flex justify-between">
      <div className=" flex flex-col justify-between">
        <Video />
        <ChenelInfo />
      </div>
      <Reference />
    </div>
  );
};

export default Detail;
