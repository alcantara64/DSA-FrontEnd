import React, {Component} from 'react';
import Auxi from '../../hoc/Auxi';
import Home from '../../components/home/home';

class dashboard extends Component {

    render(){
        return(
          <Auxi>
              <Home></Home>
          </Auxi>
        );
    }
}

export default dashboard