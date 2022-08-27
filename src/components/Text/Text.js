import React from 'react';

const Text = (props) => {
  const {
    dangerousText,
    text,
  } = props;

  return (
    text ? (
      <div>{text}</div>
    ) : (
      <div dangerouslySetInnerHTML={{ __html: dangerousText }}></div>
    )
  );
}

export default Text;


