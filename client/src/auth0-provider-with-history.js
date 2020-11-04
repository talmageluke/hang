import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = 'dev-x8xt02g4.us.auth0.com';
  const clientId = '5wYhjyUVKRdlO5RLBuyMOpFmiQcO3xU1';

  const history = useHistory();

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;