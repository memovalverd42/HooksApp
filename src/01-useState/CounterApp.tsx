import { useState } from 'react';

interface Counters {
  Counter1: number;
  Counter2: number;
  Counter3: number;
}

export const CounterApp = () => {
  const [state, setCounter] = useState<Counters>({
    Counter1: 10,
    Counter2: 20,
    Counter3: 30,
  });

  const { Counter1, Counter2, Counter3 } = state;

  const updateCount1 = () => {
    setCounter((state) => {
      return { ...state, Counter1: Counter1 + 1 };
    });
  };

  return (
    <>
      <h1>Counter1: {Counter1}</h1>
      <h1>Counter2: {Counter2}</h1>
      <h1>Counter3: {Counter3}</h1>
      <hr />
      <button className="btn" onClick={updateCount1}>
        +1
      </button>
    </>
  );
};
