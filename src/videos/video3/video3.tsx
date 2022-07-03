import React, { useEffect, useState } from 'react';

const Video3 = () => {
  const [value, setValue] = useState(0);
  const [showChangedMessage, setShowChangedMessage] = useState(false);

  useEffect(() => {
    setShowChangedMessage(true);
  }, [value]);

  useEffect(() => {
    setTimeout(() => {
      setShowChangedMessage(false);
    }, 1000)
  }, [showChangedMessage])

  return (
    <div>
      <input data-testid="inputValue" value={value} />
      <button data-testid="plusBtn" onClick={() => setValue(value + 1)}>plus</button>
      {showChangedMessage && (
        <div data-testid="changedMessage">Value has changed</div>
      )}
    </div>
  );
}
export default Video3;
