
import { RouterProvider } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import SignInContext from './components/support/SupportContext';
import { AuthProvider } from './Context/AuthContext';

import { ErrorBoundary } from "react-error-boundary";

function App() {


  function FallbackComponent({ error, resetErrorBoundary }) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.
    console.log("boundary", error);

    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    );
  }

  return (
    // <AuthProvider>
    <div className='App'>
      <ErrorBoundary
        FallbackComponent={FallbackComponent}
      >
        <RouterProvider router={AppRouter} />
      </ErrorBoundary>
    </div>
    // </AuthProvider>

  );
}

export default App;