import React from 'react';

const Text = (props) => {
  const {
    text,
  } = props;

  return (
    <span className="className">{text}</span>
  );
}

export default Text;
