import React from 'react';
import './text.scss';

const Text = (props) => {
  const {
    bold = false,
    text,
  } = props;

  const classNameBold = !bold ? '' : ' bold';

  return (
    <span className={`className ${classNameBold}`}>{text}</span>
  );
}

export default Text;

