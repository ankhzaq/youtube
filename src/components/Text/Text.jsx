//  npm package -> https://www.npmjs.com/package/dompurify
import DOMPurify from 'dompurify';
import React from 'react';
import './text.scss';

const Text = (props) => {
  const {
    bold = false,
    dangerousText,
    levelTitle,
    text,
  } = props;

  const classNameTitle = !levelTitle ? '' : `title-${levelTitle}`;
  const classNameBold = !bold ? '' : ' bold';

  const classNameText = classNameTitle + classNameBold;

  return (
    text ? (
      <span className={classNameText}>{text}</span>
    ) : (
      <div className="dangerousContainer" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(dangerousText)}}/>
    )
  );
}

export default Text;


