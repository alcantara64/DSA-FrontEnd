import React, { Component } from 'react';
import Layout from '../../components/layout/layout';
import Home from '../../components/home/home';
import About from '../../components/about/about';
import Blog from '../../components/blog/blog';
import { Switch, Route } from 'react-router';
import Auxi from '../../hoc/Auxi'
import axios from 'axios';


class dashboard extends Component {

    componentDidMount() {
        return axios.get('http://localhost:52770/archive?id=d078727c-6943-4c62-8943-3fdd3f3acdf0').then(
            (rsp) => console.log(rsp)
        );
    }

    //class should container method reference for header routing and footer visiblity
    //state sould only change in component

    render() {

        return (
            <Auxi>
                <Layout>

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/blog' component={Blog} />                        
                    </Switch>

                </Layout>
            </Auxi>


        );
    }
}

export default dashboard