const isLocal = process.env.REACT_APP_ENV === 'local';

const authConfig = {
  authority: isLocal
    ? process.env.REACT_APP_AUTHORITY
    : process.env.REACT_APP_AUTHORITY,
  client_id: isLocal
    ? process.env.REACT_APP_CLIENT_ID
    : process.env.REACT_APP_CLIENT_ID,
  redirect_uri: isLocal
    ? process.env.REACT_APP_REDIRECT_URI_LOCAL
    : process.env.REACT_APP_REDIRECT_URI,
  response_type: process.env.REACT_APP_RESPONSE_TYPE,
  scope: process.env.REACT_APP_SCOPE,
  post_logout_redirect_uri: isLocal
    ? process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI_LOCAL
    : process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI,
  userinfo_endpoint: process.env.REACT_APP_USERINFO_ENDPOINT,
  response_mode: process.env.REACT_APP_RESPONSE_MODE,
  code_challenge_method: process.env.REACT_APP_CODE_CHALLENGE_METHOD,
};

export default authConfig;
