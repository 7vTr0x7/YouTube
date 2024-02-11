import React, { useMemo, useState } from "react";
import { getNthPrime } from "../utils/helper";

const Demo = () => {
  const [num, setNum] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const prime = useMemo(() => getNthPrime(num), [num]);

  return (
    <div
      className={`w-96 h-96 p-4 m-4 bg-gray-50 border border-black ${
        isDarkMode && "bg-gray-950 text-white"
      }`}>
      <button
        className="bg-gray-100 rounded-xl font-semibold p-2 m-2 "
        onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle
      </button>
      <div>
        <input
          className="border border-black w-11/12 px-2"
          type="number"
          value={num}
          onChange={(e) => setNum(parseInt(e.target.value))}
        />
      </div>
      <div>Prime: {prime}</div>
    </div>
  );
};

export default Demo;
