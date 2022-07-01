import React, { useState } from 'react';

const Video3 = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <input data-testid="inputValue" value={value} />
      <button data-testid="plusBtn" onClick={() => setValue(value + 1)}>plus</button>
    </>
  );
}
export default Video3;
