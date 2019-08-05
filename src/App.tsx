import React, {Component} from 'react';
import './App.css';
import Dashboard from './container/Dashboard/dashboard';
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

export default App;
