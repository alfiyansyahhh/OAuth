const authConfig = {
  authority: process.env.REACT_APP_AUTHORITY,
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  redirect_uri_local: process.env.REACT_APP_REDIRECT_URI_LOCAL,
  response_type: process.env.REACT_APP_RESPONSE_TYPE,
  scope: process.env.REACT_APP_SCOPE,
  post_logout_redirect_uri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI,
  post_logout_redirect_uri_local:
    process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI_LOCAL,
  userinfo_endpoint: process.env.REACT_APP_USERINFO_ENDPOINT,
  response_mode: process.env.REACT_APP_RESPONSE_MODE,
  code_challenge_method: process.env.REACT_APP_CODE_CHALLENGE_METHOD,
};

export default authConfig;
