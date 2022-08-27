import React from 'react';
import Text from '../../components/Text/Text';

const Video7 = () => {
  const label1 = 'This is a simple sentence';
  const label2 = '<strong>This</strong> is a <br/> simple sentence'
  return (
    <>
      <Text text={label1} />
      <br />
      <Text dangerousText={label2} />
    </>
  );
}

export default Video7;


