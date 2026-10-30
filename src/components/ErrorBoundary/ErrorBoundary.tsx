// Error Boundary para capturar erros não tratados nos componentes
// e exibir uma tela de erro amigável em vez de tela branca.
import React, { type ErrorInfo, type ReactNode } from 'react'

interface ErrorBoundaryState {
  hasError: boolean
}

interface ErrorBoundaryProps {
  fallback: ReactNode
  children: ReactNode
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = { hasError: false }

  constructor(props: ErrorBoundaryProps) {
    super(props)
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  static getDerivedStateFromError(_error: Error, _errorInfo: ErrorInfo): ErrorBoundaryState {
    return { hasError: true }
  }
  /* eslint-enable @typescript-eslint/no-unused-vars */

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export default ErrorBoundary