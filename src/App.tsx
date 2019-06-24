import React, {Component} from 'react';
import './App.css';
import Dashboard from './container/Dashboard/dashboard';

class App extends Component {
  render(){
    return (
      <div className="App page-background">
          <Dashboard  ></Dashboard>
      </div>
    );
  }
}

export default App;
