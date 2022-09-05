import React from 'react';
import Text from '../../components/Text/Text';

const Video7 = () => {
  const label2 = '' +
    '<strong>This</strong> is NOT a simple sentence <br/> ' +
    '<h1>Title1</h1> <br/>' +
    '<h2>Title2</h2> <br/>' +
    '<h3>Title3</h3> <br/>' +
    '';

  return (
    <>
      <h1>Simple sentence using the property text</h1>
      <Text text="This" bold />
      <Text text=" is NOT a simple sentence" />
      <br />
      <br />
      <Text text="Title 1" levelTitle={1} />
      <br />
      <br />
      <Text text="Title 2" levelTitle={2} />
      <br />
      <br />
      <Text text="Title 3" levelTitle={3} />
      <h1>Sentence using dangerousText prop</h1>
      <Text dangerousText={label2} />
    </>
  );
}

export default Video7;


