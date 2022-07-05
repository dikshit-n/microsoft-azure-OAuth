import { config } from "src/data";
import { PublicClientApplication } from "@azure/msal-browser";
import { useState } from "react";

const initialAuthState: any = {
  error: null,
  isAuthenticated: false,
  user: {},
};

export const useOAuth = () => {
  const [authState, setAuthState] = useState(initialAuthState);

  const publicClientApplication = new PublicClientApplication({
    auth: {
      clientId: config.appId,
      redirectUri: config.redirectUri,
      authority: config.authority,
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: true,
    },
  });

  const login = async () => {
    try {
      await publicClientApplication.loginPopup({
        scopes: config.scopes,
        prompt: "select_account",
      });
      setAuthState({ isAuthenticated: true });
    } catch (err) {
      console.log(err);
      setAuthState({ ...initialAuthState, error: err });
      window.alert("Failed to login");
    }
  };

  const logout = async () => {
    try {
      await publicClientApplication.logoutPopup({
        authority: config.authority,
      });
      setAuthState(initialAuthState);
      window.alert("Logged out successfully");
    } catch (err) {
      console.log(err);
      // ignore error
      window.alert("Failed to logout");
    }
  };
  // const logout = async() => publicClientApplication.logoutRedirect()

  const exportables = { publicClientApplication, authState, login, logout };

  return exportables;
};
