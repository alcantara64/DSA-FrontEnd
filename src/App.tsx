import React, {Component} from 'react';
import './App.css';
import Dashboard from './container/Dashboard/dashboard';
// import { UserAgentApplication, Configuration } from 'msal';


class App extends Component {
//   configuration: Configuration = {} as Configuration;
//   userAgentApplication: UserAgentApplication = new UserAgentApplication()
// constructor(props: any){
//   super(props);
  
//   this.configuration.auth = {clientId: 'ae8cd266-f653-48ca-92c3-d55b7e9d6a0d'}

//   var userAgentApplication = new UserAgentApplication(this.configuration);

//   var user = userAgentApplication.getAccount();

//   this.state = {
//     isAuthenticated: (user !== null),
//     user: {},
//     error: null
//   };

//   if (user) {
//     // Enhance user object with data from Graph
//     this.getUserProfile();
//   }}

  render(){
    return (
      <div className="App page-background">
          <Dashboard  ></Dashboard>
      </div>
    );
  }
}

export default App;
