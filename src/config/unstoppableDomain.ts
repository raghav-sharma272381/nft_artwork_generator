import UAuth from '@uauth/js';

const testingCredentials = {
  clientID: 'qxRaA/ILJHo5WGXbo6NiWOI+FBModAIKVToTBGONEtI=',
  clientSecret: 'MSk1Lx/iddaggFHSNoBNCfRn4vwblWkvmVivxFYpyww=',
  scope: 'openid email wallet',
  redirectUri: 'http://localhost:3000/callback',
  postLogoutRedirectUri: 'http://localhost:3000/',
};

export const uauth = new UAuth(testingCredentials);
