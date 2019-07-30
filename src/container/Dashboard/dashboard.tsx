import React, { Component } from 'react';
import Layout from '../../components/layout/layout';
import Home from '../../components/home/home';
import About from '../../components/about/about';
import recommendation from '../../components/recommendation/recommendation';
import BlogDetail from '../../components/blog/blogDetail/blogDetail';
import BlogArchive from '../../components/blog/blogArchive/blogArchive';
import Services from '../../components/services/services';
import Blog from '../../components/blog/blog';
import { Switch, Route } from 'react-router';
import Auxi from '../../hoc/Auxi';
import servicesForm from '../../components/servicesForm/servicesForm';
import UserInfo from '../../components/userInfo/userInfo';

class dashboard extends Component<IdashboardProps> {

componentDidUpdate(prevProps: any, PrevState:any){
if(prevProps.displayName !== this.props.displayName){
this.setState({
    ...this.state,

    
})
}
}
    render() {
        return (
            <Auxi>
                <Layout {...this.props} >
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route exact path='/blog' component={Blog} /> 
                        <Route exact path='/blog/:id' component={BlogDetail} />    
                        <Route exact path='/services' component={Services} />   
                        <Route exact path='/archives' component={BlogArchive} />     
                        <Route exact path='/services/form' component={servicesForm} />  
                        <Route exact path='/userInfo'   render={(props) => <UserInfo {...props} isAuthed={true} displayName={this.props.displayName} />}/>             
                        <Route exact path='/recommendation' component={recommendation} />  

                    </Switch>
                </Layout>
            </Auxi>
        );
    }
}

export default dashboard

interface IdashboardProps{
    isAuthenticated : boolean;
    user? : Object;
    displayName: string;
    email: string;
}