import React, { ReactNode } from 'react';

interface ErrorBoundary2 {
  children: ReactNode
}

export class ErrorBoundary2 extends React.Component<ErrorBoundary2> {
  constructor(props: ErrorBoundary2) {
    super(props);
    this.state = { hasError: null };
  }

  static getDerivedStateFromError(error: string) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: string, errorInfo: any) {
    // You can also log the error to an error reporting service
    this.setState({ hasError: error });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      // You can render any custom fallback UI
      return <h1>{hasError}</h1>;
    }

    return children;
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
