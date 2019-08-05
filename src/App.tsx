import React, {Component} from 'react';
import './App.css';
import Dashboard from './container/Dashboard/dashboard';
<<<<<<< HEAD
import { UserAgentApplication, Configuration } from 'msal';
import {Config} from './Config';
import {connect} from 'react-redux';
=======
>>>>>>> afa0ac53648e138168fc627b22a9dff51bbd5871
import 'reflect-metadata';
import { Provider, resolve } from "inversify-react";
import { container } from "./core/services/ioc";
import { TYPES } from './core/services/ioc.types';
import { UserDataService } from './core/services/data/UserService/user.data.service';
import User from './core/Models/User';




class App extends Component<{}, IAppState>{
  
constructor(props: any){
  super(props);
}

  render(){

    return (
      <div className="App page-background">
            <Provider container={container}>
          <Dashboard></Dashboard>
          </Provider>
      </div>
    )
    
  }
}

interface IAppState {
  isAuthenticated: boolean;
  user: {};
  error: {};
  displayName : string;
  userName : string;
}

const mapStateToProps= (state:any) =>({
  authentication: state.authentication
})

export default connect(mapStateToProps)(App);
