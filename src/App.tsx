import React, {Component} from 'react';
import './App.css';
import Dashboard from './container/Dashboard/dashboard';
import { UserAgentApplication, Configuration } from 'msal';
import {Config} from './Config';

class App extends Component<{}, IAppState>{
  configuration: Configuration = {} as Configuration;
  userAgentApplication: UserAgentApplication
constructor(props: any){
  super(props);

  this.userAgentApplication = new UserAgentApplication({
    auth: {
      clientId: Config.appId
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: true
  }
  });

  var user = this.userAgentApplication.getAccount();

  this.state = {
    isAuthenticated: (user !== null),
    user: {},
    error: {}
  };

  if (user) {
    // Enhance user object with data from Graph
    this.getUserProfile();
  }else{
    this.login();
  }
  
}

async login() {
  try {
    await this.userAgentApplication.loginPopup(
        {
          scopes: Config.scopes,
          prompt: "select_account"
      });
    await this.getUserProfile();
  }
  catch(err) {
    var errParts = err.split('|');
    this.setState({
      isAuthenticated: false,
      user: {},
      error: { message: errParts[1], debug: errParts[0] }
    });
  }
}

logout() {
  this.userAgentApplication.logout();
}


async getUserProfile() {
  try {
    // Get the access token silently
    // If the cache contains a non-expired token, this function
    // will just return the cached token. Otherwise, it will
    // make a request to the Azure OAuth endpoint to get a token

    var accessToken = await this.userAgentApplication.acquireTokenSilent({
        scopes: Config.scopes
      });

    if (accessToken) {
      // TEMPORARY: Display the token in the error flash
      this.setState({
        isAuthenticated: true,
        error: { message: "Access token:", debug: accessToken.accessToken }
      });
      console.log(this.state);
    }
  }
  catch(err) {
    console.log(err);
    this.setState({
      isAuthenticated: false,
      user: {},
      error: err
    });
  }
}

  render(){
    if(this.state.isAuthenticated){
    return (
      <div className="App page-background">
          <Dashboard  ></Dashboard>
      </div>
    )
    }else{
      return (
        <div className="App page-background">
            <p> Login </p>
        </div>
      ) 
    }
  }
}

interface IAppState {
  isAuthenticated: boolean,
  user: {},
  error: {}
}

export default App;
