import * as React from 'react';

interface ErrorProps {
  message?: string;
  children: React.ReactNode;
}

interface ErrorState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error: , errorInfo): void {
  //   // You can also log the error to an error reporting service
  //   logErrorToMyService(error, errorInfo);
  // }

  render(): React.ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h3>{this.props.message || 'Something went wrong.'}</h3>;
    }

    return this.props.children;
  }
}
