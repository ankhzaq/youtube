import React from 'react';
import './text.scss';

const Text = (props) => {
  const {
    bold = false,
    levelTitle,
    text,
  } = props;

  const classNameTitle = !levelTitle ? '' : `title-${levelTitle}`;
  const classNameBold = !bold ? '' : ' bold';

  const classNameText = classNameTitle + classNameBold;

  return (
    <span className={classNameText}>{text}</span>
  );
}

export default Text;

