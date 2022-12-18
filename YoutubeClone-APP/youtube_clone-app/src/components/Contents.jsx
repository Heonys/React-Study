import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getFirstApi } from "api/getFirstApi";

const Contents = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await getFirstApi();
      console.log(data);
      setList(data);
    })();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {list.map((list, index) => {
        return <Card key={index} list={list} />;
      })}
    </div>
  );
};

export default Contents;
