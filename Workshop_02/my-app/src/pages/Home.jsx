import React from "react";
import { useState, useEffect } from "react";
import { Box } from "../components/Box";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://161.246.5.40:8880/question");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-zinc-500 flex flex-wrap justify-evenly my-10">
      {data.map((items, index) => (
        <Box key={index} question={items.title}/>
      ))}
    </div>
  );
};

export default Home;
