import React, { useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  return (
    <div className="w-96 h-96 p-4 m-4 bg-gray-50 border border-black ">
      <div className="flex">
        <button
          className="bg-gray-100 rounded-xl p-3 m-2"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}>
          INC X
        </button>
        <h1 className="p-2 font-bold text-xl m-2">let = {x}</h1>
      </div>
      <div className="flex">
        <button
          className="bg-gray-100 rounded-xl p-3 m-2"
          onClick={() => setY(y + 1)}>
          INC Y
        </button>
        <h1 className="p-2 font-bold text-xl m-2">State = {y}</h1>
      </div>
    </div>
  );
};

export default Demo2;
