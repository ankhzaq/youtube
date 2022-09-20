
export const ErrorBoundary1 = () => {
  try {
    return (
      <div>
        ErrorBoundary1
        <Child1 />
      </div>
    );
  } catch (e) {
    debugger;
    return (<div>Error</div>)
  }

}

const Child1 = () => {
  throw new Error('Child1 Error');
  return (
    <div>
      Child1
    </div>
  );
}
