import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <Auth0Provider
    domain="dev-jy3uogcvoum6x8j4.us.auth0.com"
    clientId="DYlJLN3bdpbqRtz8ppk8RRjyyttgDcFP"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <App />
      </Auth0Provider>
    </BrowserRouter>
  ,
)
