import React, { useCallback, useMemo, useState } from 'react';

const Video2 = () => {
  const [number, setNumber] = useState(1);
  const [renderCounter, setRenderCounter] = useState(1);

  console.log("- - - - - - - - - - - - - - - - - - -");

  const duplicateNumberWithoutMemoCallback = () => {
    console.log("duplicateNumber without memo & callback. Render counter: ", renderCounter);
    return number * 2;
  };

  const duplicateNumberMemo = useMemo(() => {
    console.log("duplicateNumber useMemo. RenderCounter: ", renderCounter);
    return number * 2;
  }, [number]);

  const duplicateNumberCallback = useCallback(() => {
    // "renderCounter" only will be uptated when number changes
    console.log("duplicateNumber useCallback. RenderCounter: ", renderCounter);
    return number * 2;
  }, [number]);

  const onChange = (event: any) => {
    setNumber(Number(event.target.value));
  }

  const reRender = () => {
    setRenderCounter(Number(renderCounter + 1));
  }

  return (
    <div>
      <input type="number" value={number} onChange={onChange} />
      <div>Double: {duplicateNumberWithoutMemoCallback()}</div>
      <div>Double (Memo): {duplicateNumberMemo}</div>
      <div>Double (callback): {duplicateNumberCallback()}</div>

      <button onClick={reRender}>Re-render</button>
    </div>
  );
}
export default Video2;
