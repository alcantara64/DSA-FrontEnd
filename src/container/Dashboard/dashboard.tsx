import React, { Component } from 'react';
import Layout from '../../components/layout/layout';
import Home from '../../components/home/home';
import About from '../../components/about/about';
import { Switch, Route } from 'react-router';
import Auxi from '../../hoc/Auxi'


class dashboard extends Component {

    //class should container method reference for header routing and footer visiblity
    //state sould only change in component

    render() {

        return (
            <Auxi>
                <Layout>

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                    </Switch>

                </Layout>
            </Auxi>


        );
    }
}

export default dashboard