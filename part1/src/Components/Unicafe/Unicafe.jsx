import React, { useState } from "react";
import { Button } from "../Contador/Button";
import { Statistic } from "./Statistic";

export const Unicafe = () => {
  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);
  const [total, settotal] = useState(0);
  const [average, setaverage] = useState(0);

  const handleBad = () => {
    setbad(bad + 1);
    settotal(total + 1);
    setaverage(average - 1);
  };
  const handleNeutral = () => {
    setneutral(neutral + 1);
    settotal(total + 1);
  };

  const handleGood = () => {
    setgood(good + 1);
    settotal(total + 1);
    setaverage(average + 1);
  };

  return (
    <>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h1>Statistics</h1>
      {total ? (
        <div>
          <Statistic text={"Good"} value={good} />
          <Statistic text={"Neutral"} value={neutral} />
          <Statistic text={"Bad"} value={bad} />
          <Statistic text={"All"} value={total} />
          <Statistic text={"Average"} value={average / total + "%"} />
          <Statistic text={"Positive"} value={(good / total) * 100 + "%"} />
        </div>
      ) : (
        <h2>No feedback given</h2>
      )}
    </>
  );
};
