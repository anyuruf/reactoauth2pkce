import { type TAuthConfig } from 'react-oauth2-code-pkce';

// Get info from http://localhost:8080/realms/test/.well-known/openid-configuration

export const authConfig: TAuthConfig = {
  clientId: 'suuku-frontend',
  authorizationEndpoint: 'http://localhost:9080/realms/suuku-domain/protocol/openid-connect/auth',
  logoutEndpoint: 'http://localhost:9080/realms/suuku-domain/protocol/openid-connect/logout',
  tokenEndpoint: 'http://localhost:9080/realms/suuku-domain/protocol/openid-connect/token',
  redirectUri: 'http://localhost:5173/',
  scope: 'profile openid email offline',
  // Example to redirect back to original path after login has completed
  // preLogin: () => localStorage.setItem('preLoginPath', window.location.pathname),
  // postLogin: () => window.location.replace(localStorage.getItem('preLoginPath') || ''),
  decodeToken: true,
  autoLogin: false,
};

