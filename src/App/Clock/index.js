import { useState, useEffect } from 'react';
import { Div } from "./styled";

const formatDate = (date) => date.toLocaleString(undefined, {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Div>
      Dzisiaj jest
      {" "}
      {formatDate(date)}
    </Div>
  );
};