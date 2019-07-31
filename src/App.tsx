import React, {Component} from 'react';
import './App.css';
import Dashboard from './container/Dashboard/dashboard';
import { UserAgentApplication, Configuration } from 'msal';
import {Config} from './Config';
import 'reflect-metadata';
import { Provider } from "inversify-react";
import { container } from "./core/services/ioc";
import { getUserDetails } from './GraphService';

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
    if(Config.isProd){
    var user = this.userAgentApplication.getAccount();
  
    if(user){
  
    this.state = {
      isAuthenticated: (user !== null),
      displayName : user.name,
      user: {},
      userName : user.userName,
      error: {}
    };
  
   
    }else{
      this.state = {
      isAuthenticated: false,
      displayName : '',
      user: {},
      userName : '',
      error: {}
    };
      this.login();
    }
  }else{
    this.state = {
      isAuthenticated: true,
      user: {},
      error: {},
      userName: '',
      displayName:'',
    };
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
    var errParts = err;
    this.setState({
      isAuthenticated: false,
      user: {},
      error: { message: errParts, debug: errParts }
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

    let accessToken = await this.userAgentApplication.acquireTokenSilent({
      scopes: Config.scopes
    });

    if (accessToken) {
      // Get the user's profile from Graph
      
      var user =  this.userAgentApplication.getAccount(); //await getUserDetails(accessToken);
    
      this.setState({
        isAuthenticated: true,
        user: {},
        displayName:user.name,
        // userName: user.mail || user.userPrincipalName,
        // displayName: user.displayName,
        error: {}
      });
    }
  }
  catch(err) {
    var error = {};
    if (typeof(err) === 'string') {
      var errParts = err.split('|');
      error = errParts.length > 1 ?
        { message: errParts[1], debug: errParts[0] } :
        { message: err };
    } else {
      error = {
        message: err.message,
        debug: JSON.stringify(err)
      };
    }

    this.setState({
      isAuthenticated: false,
      user: {},
      error: error
    });
  }
}

  render(){
    if(this.state.isAuthenticated){
      console.log(this.state,"State in App")
    return (
      <div className="App page-background">
            <Provider container={container}>
          <Dashboard {...this.state} ></Dashboard>
          </Provider>
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
  isAuthenticated: boolean;
  user: {};
  error: {};
  displayName : string;
  userName : string;
}

export default App;
