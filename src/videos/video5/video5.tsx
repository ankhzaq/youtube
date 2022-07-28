import React from 'react';

type Operator = "OR" | "QUESTIONS";

const Video5 = () => {
  const values = [undefined, null, 0, [], {}, ""];

  const isValidValue = (value: any, operator: Operator) => {
    const result = operator === "OR" ? value ?? "second Option" : value || "second Option";
    return { elem: (<div>{`${JSON.stringify(value)} -> ${!!(result === 'second Option')}`}</div>), result };
  }

  const valuesDifferentsOrQuestions = values.filter((value) => {
    const orValue = isValidValue(value, "OR");
    const questionsValue = isValidValue(value, "QUESTIONS");
    return orValue.result !== questionsValue.result;
  });

  return (
    <div style={{ padding: '15px' }}>
      <h1>?? vs ||</h1>
      <h3>Operator ??</h3>
      {values.map((value) => isValidValue(value, "QUESTIONS").elem)}
      <h3>Operator ||</h3>
      {values.map((value) => isValidValue(value, "OR").elem)}
      <h3>DIFFERENCES</h3>
      {valuesDifferentsOrQuestions.map((value) =>
          <div>{JSON.stringify(value)}</div>)
      }
    </div>);
}

export default Video5;
