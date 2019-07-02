import React, { Component } from 'react';
import Layout from '../../components/layout/layout';
import Home from '../../components/home/home';
import About from '../../components/about/about';
import Blog from '../../components/blog/blog';
import { Switch, Route } from 'react-router';
import Auxi from '../../hoc/Auxi';
import Page from '../../core/Models/Page';
import BlogDetail from '../../components/blog/blogDetail/blogDetail';

class dashboard extends Component {
    pageData: Page;
    constructor(props: any){
        super(props);
        this.pageData = {} as Page;
    }

    componentDidMount(){
  
    }

    state = {
        pageData: {} as Page
    }
    
    render() {
        return (
            <Auxi>
                <Layout>

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route exact path='/blog' component={Blog} /> 
                        <Route exact path='/blog/:id' component={BlogDetail} />                       
                    </Switch>
                </Layout>
            </Auxi>


        );
    }
}

export default dashboard