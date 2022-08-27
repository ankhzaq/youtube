import React, { useEffect, useRef, useState } from 'react';

const Video6 = () => {
  const [counter, setCounter] = useState(0);
  const refCounter = useRef(counter);

  useEffect(() => {
    setTimeout(() => {
      alert(`current counter: ${counter} - counter ref: ${refCounter.current}`);
    }, 3000);
  }, []);

  const addCounter = () => {
    const nextCounter = counter + 1;
    setCounter(nextCounter);
  }

  useEffect(() => {
    refCounter.current = counter;
    setTimeout(() => {
      addCounter();
    }, 1000);
  }, [counter]);

  return (
    <div>Counter: {counter}</div>
  )
}

export default Video6;
