import React from "react";

export const Box = () => {
  return (
    <div className="w-72 h-96 bg-gray-400 rounded-2xl font-light text-4xl mb-10 mx-3">
      <div className="h-2/3 w-full flex justify-center items-center">
          <div className="w-4/5 h-4/5 bg-white rounded-2xl flex justify-center items-center 
          text-black">
              IMG
          </div>
      </div>
      <div className="h-1/3 w-full flex justify-center items-start py-6"> 
          Text
      </div>
    </div>
  );
};
