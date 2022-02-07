import React, { useState } from "react";
import { History } from "./History";

export const RightAndLeft = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const clicksLeft = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const clickRight = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <button onClick={clicksLeft}>Left</button>
      <button onClick={clickRight}>Right</button>
      {right}
      <History allClicks={allClicks} />
    </div>
  );
};
