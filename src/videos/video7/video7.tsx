/*
* It will help you render markups in ways that the React JSX element will prohibit by default.
* It will help you pass HTML directly into a component within JSX
* */

import React from 'react';

const Video7 = () => {
  const label1 = "This is a simple sentence";
  const label2 = "<strong>This</strong> is a <br/> simple sentence"
  return (
    <>
      <div>{label1}</div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: label2 }}></div>
    </>
  );
}

export default Video7;


