import React, { useState } from "react";
import { getNthPrime } from "../utils/helper";

const Demo = () => {
  const [num, setNum] = useState(0);

  const prime = getNthPrime(num);

  return (
    <div className=" w-96 h-96 p-4 m-4  border border-black ">
      <div>
        <input
          className="border border-black w-11/12 px-2"
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
      <div>prime : {prime}</div>
    </div>
  );
};

export default Demo;
