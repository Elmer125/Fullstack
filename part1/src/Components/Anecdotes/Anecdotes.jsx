import React, { useState } from "react";
import { Button } from "../Contador/Button";

export const Anecdotes = ({ anecdotes, likes }) => {
  const [random, setrandom] = useState(0);
  const [like, setlike] = useState(likes);
  const [higher, sethigher] = useState(0);

  let max = anecdotes.length;
  let min = 0;

  const handleClick = () => {
    let number = Math.random() * (max - min);
    setrandom(parseInt(number));
  };

  const numberLikes = () => {
    let likesNumber = [...like];
    likesNumber[random] += 1;
    setlike(likesNumber);
  };

  const higherNumber = () => {
    for (var i = 0; i < like.length; i++) {
      if (like[i] > like[higher]) {
        sethigher(i);
      }
    }
  };
  higherNumber()
  
  return (
    <>
      <p>{anecdotes[random]}</p>
      <p>Has {[like[random]]} votes</p>
      <Button text={"Next anecdote"} handleClick={handleClick} />
      <Button text={"Vote"} handleClick={numberLikes} />
      <p>Anecdote with most votes</p>
      <p>{anecdotes[higher]}</p>
    </>
  );
};
