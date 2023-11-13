import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const increment = ( value: number = 1 ) => {
    setCounter(( current ) => current + value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return {
    counter,
    increment,
    reset,
    decrement,
  };
};
