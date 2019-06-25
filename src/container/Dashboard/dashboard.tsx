import React, { Component } from 'react';
import Layout from '../../components/layout/layout';
import Home from '../../components/home/home';
import About from '../../components/about/about';
import Blog from '../../components/blog/blog';
import { Switch, Route } from 'react-router';
import Auxi from '../../hoc/Auxi';
import axios from 'axios';
import Page from '../../core/Models/Page';
import BlogDetail from '../../components/blog/blogDetail/blogDetail';


class dashboard extends Component {

    pageData: Page;

    constructor(props: any){
        super(props);
        this.pageData = {} as Page;        
        //this.fetchPageData();
    }

    state = {
        pageData: {} as Page,
        render: (blog: any) => console.log(blog)
    }

    fetchPageData(): Promise<any>{
        return axios.get<any, any>('http://bis.southcentralus.cloudapp.azure.com:8090/xom-dsa-backend').then(
            (res) => {
                this.pageData = res.data;
                if(this.pageData){
                    this.setState({
                        pageData: this.pageData
                    });
                    console.log(this.state);
                    console.log(this.state.pageData.archive.posts);
                }
            }
        ).catch(err => {
            console.log(err);
        });
    }

    render() {

        return (
            <Auxi>
                <Layout>

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route exact path='/blog' component={Blog} /> 
                        <Route exact path='/blog:id' component={BlogDetail} />                       
                    </Switch>

                </Layout>
            </Auxi>


        );
    }
}

export default dashboard