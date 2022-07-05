import { useOAuth } from "src/hooks";

function App() {
  const { authState, login, logout } = useOAuth();

  return (
    <div>
      <h1>OAuth Demo</h1>
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
