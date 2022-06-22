import React from 'react';
import styled from 'styled-components';

// Components
import Option1 from './Option1';
import Option3 from './Option3';
import Option2 from './Option2';

export const CheckboxLayout = styled.div`
  display: flex;
`;


const Video1 = () => (
  <>
    <h1>Checkbox exercise</h1>
    <h3>Option 1: using setState</h3>
    <Option1 />
    <h3>Option 2: using setState and useRef in one case</h3>
    <Option3 />
    <h3>Option 3: using reducers</h3>
    <Option2 />
  </>)

export default Video1;
