import React, {Component} from 'react';
import './App.css';
import Layout from './components/layout/layout';
import Dashboard from './container/Dashboard/dashboard';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Layout >
          {/* Send App state to layout for navidation purposes only*/}
          <Dashboard ></Dashboard>
        </Layout>
      </div>
    );
  }
}

export default App;
