import React, { useRef, useState } from 'react';
import { Alert, Checkbox } from '@mui/material';
import { CheckboxLayout } from './Video1';

// 2 useStates and one useRef
const Option3 = () => {

  let checkboxTouched = useRef(false);

  // Option 1
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = (_: any, nextValue: boolean) => {
    if (!expanded) setExpanded(!expanded);
    else {

      if (!checkboxTouched.current) checkboxTouched.current = true;
      setChecked(nextValue);
    }
  }

  const hideContentCheckbox = expanded ? '' : 'collapsed';

  return (
    <>
      <CheckboxLayout>
        <Checkbox
          checked={checked}
          onChange={toggleCheckbox}
        />
        <div className={hideContentCheckbox}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </CheckboxLayout>
      {
        checkboxTouched.current && !checked && (<Alert severity="warning">Warning: You have unchecked the checkbox</Alert>)
      }
    </>);
}

export default Option3;
