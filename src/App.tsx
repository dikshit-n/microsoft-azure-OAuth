import { useEffect } from "react";
import { useOAuth } from "src/hooks";

function App() {
  const { authState, login, logout, initialize } = useOAuth();

  return (
    <div>
      <h1>OAuth Demo</h1>
      <button onClick={() => initialize()}>get Token</button>
      {authState.isAuthenticated ? (
        <>
          <h4>Successfully logged in</h4>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h4>Start from logging in</h4>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
}

export default App;
