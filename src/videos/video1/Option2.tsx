import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Alert, Checkbox } from '@mui/material';
import { Action } from '../../interfaces/redux';
import { CheckboxLayout } from './Video1';

const UPDATE = 'UPDATE';

interface State {
  checked: boolean;
  expanded: boolean;
  showWarning: boolean;
}

const initialState: State = {
  checked: false,
  expanded: false,
  showWarning: false,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INITIALIZE":
      return initialState;
    case UPDATE:
      return action.payload;
    default:
      return state;
  }
};
// Reducer
const Option2 = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { expanded, checked, showWarning } = state;

  const updateState = (nextState: State) => {
    dispatch({
      type: UPDATE,
      payload: nextState
    });
  }
  const toggleCheckbox = (_: any, nextValue: boolean) => {
    if (!expanded) {
      updateState({ ...state, expanded: !expanded});
    }
    else {
      updateState({ ...state, checked: nextValue, showWarning: !nextValue});
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
        showWarning && (<Alert severity="warning">Warning: You have unchecked the checkbox</Alert>)
      }
    </>);
}

export default Option2;
