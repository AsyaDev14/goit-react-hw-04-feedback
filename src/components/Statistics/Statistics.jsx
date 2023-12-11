import React from "react";

export const Statistic = (props) => {
  const {good, neutral, bad, total, positivePercentage} = props;
  return (
   <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

   

