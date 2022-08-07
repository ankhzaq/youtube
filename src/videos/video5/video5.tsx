import React from 'react';

type Operator = "OR" | "QUESTIONS";

const Video5 = () => {
  const values = [undefined, null, 0, [], {}, "", false];

  const isValidValue = (value: any, operator: Operator) => {
    const SECOND_OPTION = "second Option";
    const result = operator === "OR" ? (value ?? SECOND_OPTION) : (value || SECOND_OPTION);
    return { elem: (<div>{`${JSON.stringify(value)} -> ${!!(result === SECOND_OPTION)}`}</div>), result };
  }

  const valuesDifferentsOrQuestions = values.filter((value) => {
    const orValue = isValidValue(value, "OR");
    const questionsValue = isValidValue(value, "QUESTIONS");
    return orValue.result !== questionsValue.result;
  });

  return (
    <div style={{ padding: '15px' }}>
      <h1>?? vs ||</h1>
      <h3>Operator ||</h3>
      {values.map((value) => isValidValue(value, "OR").elem)}
      <h3>Operator ??</h3>
      {values.map((value) => isValidValue(value, "QUESTIONS").elem)}
      <h3>DIFFERENCES</h3>
      {valuesDifferentsOrQuestions.map((value) =>
          <div>{JSON.stringify(value)}</div>)
      }

      {/*<h3>OR</h3>
      <div>{0 || "second_option"}</div>
      <div>{"" || "second_option"}</div>
      <div>{false || "second_option"}</div>
      <div>- - - - - - </div>
      <h3>QUOTATION MARKS</h3>
      <div>{0 ?? "second_option"}</div>
      <div>{"" ?? "second_option"}</div>
      <div>{false ?? "second_option"}</div>*/}
    </div>);
}

export default Video5;
