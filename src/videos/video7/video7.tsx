import React from 'react';
import Text from '../../components/Text/Text';
import PrintText from '../../components/PrintText/PrintText';

const video7Code = "import React from 'react';<br />import Text from '../../components/Text/Text';<br />import PrintText from '../../components/PrintText/PrintText';<br />const Video7 = () => {<br />const label1 = 'This is a simple sentence';<br />const label2 = '<strong >This</ strong> is a <br/> simple sentence'<br />return (<br />    <><br />      <Text text={label1} />"

const Video7 = () => {
  const label1 = 'This is a simple sentence';
  const label2 = '<strong>This</strong> is a <br/> simple sentence'
  return (
    <>
      <Text text={label1} />
      <br />
      <Text dangerousText={label2} />
      <PrintText text={video7Code} />
    </>
  );
}

export default Video7;


