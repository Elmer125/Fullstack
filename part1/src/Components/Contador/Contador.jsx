import React, { useState } from "react";
import { Button } from "./Button";
import { Display } from "./Display";

export const Contador = () => {
  const [counter, setCounter] = useState(0);

  /*  setTimeout(
      ()=>setCounter(counter+1),
      1000
  ) */
  const increaseByOne = () => {
    setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    setCounter(counter - 1);
  };
  const setZero = () => setCounter(0);
  return (
    <>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text={"+"} />
      <Button handleClick={decreaseByOne} text={"-"} />
      <Button handleClick={setZero} text={"zero"} />
    </>
  );
};
