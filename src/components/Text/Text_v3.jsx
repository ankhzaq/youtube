//  npm package -> https://www.npmjs.com/package/dompurify
import DOMPurify from 'dompurify';
import React from 'react';
import './text.scss';

const Text = (props) => {
  const {
    dangerousText,
  } = props;

  return (
    <div className="dangerousContainer" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(dangerousText)}}/>
  );
}

export default Text;

