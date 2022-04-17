import React from "react";

export const Box = ({ question }) => {
  return (
    <div
      className="w-60 h-36 bg-white rounded-2xl font-light text-4xl mb-10 mx-10 
    flex justify-center items-center"
    >
      {question}
    </div>
  );
};
