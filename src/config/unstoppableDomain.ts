import UAuth from '@uauth/js';

const ProductionCredentials = {
  clientID: '3uxE3Ap3b26HJnPmz0H0hhV7I2pnlk8aQmh5vWjbnOE=',
  clientSecret: 'QfTAU9rmrGxyAtOyuWWVyulqNLKoS4sFzi1EuU9/7Co=',
  scope: 'openid email wallet',
  redirectUri: 'https://nifty-sammet-0d2669.netlify.app/callback',
  postLogoutRedirectUri: 'https://nifty-sammet-0d2669.netlify.app/',
};

export const uauth = new UAuth(ProductionCredentials);
