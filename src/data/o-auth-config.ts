export const config = {
  appId: process.env.REACT_APP_OAUTH_APP_ID,
  redirectUri: process.env.REACT_APP_OAUTH_REDIRECT_URI,
  scopes: ["user.read"],
  authority: process.env.REACT_APP_OAUTH_AUTHORITY,
};
