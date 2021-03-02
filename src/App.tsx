import React from 'react'
import { AuthContextProvider } from './infra/providers/Auth/AuthContextProvider';
import AllRoutes from './infra/routes'

function App() {
  return (
    <AuthContextProvider>
      <AllRoutes />
    </AuthContextProvider>
  );
}

export default App