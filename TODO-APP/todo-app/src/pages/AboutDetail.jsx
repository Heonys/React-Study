import React from "react";
import { useParams } from "react-router-dom";

const AboutDetail = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default AboutDetail;
