import React, { useMemo, useState } from 'react';

const Video2 = () => {
  const [number, setNumber] = useState(1);
  const [renderCounter, setRenderCounter] = useState(1);

  const duplicateNumber = useMemo(() => {
    console.log("duplicateNumber");
    return number * 2;
  }, [number]);

  const duplicateNumberWithoutMemo = () => {
    console.log("duplicateNumber without memo");
    return number * 2;
  };

  const onChange = (event: any) => {
    setNumber(Number(event.target.value));
  }

  const reRender = () => {
    setRenderCounter(Number(renderCounter + 1));
  }

  return (
    <div>
      <input type="number" value={number} onChange={onChange} />
      <div>Double: {duplicateNumber}</div>
      <div>Double: {duplicateNumberWithoutMemo()}</div>

      <button onClick={reRender}>Re-render</button>
    </div>
  );
}
export default Video2;
