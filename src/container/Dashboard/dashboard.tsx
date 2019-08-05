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
import { resolve } from 'inversify-react';
import { TYPES } from '../../core/services/ioc.types';
import { UserDataService } from '../../core/services/data/UserService/user.data.service';
import { Config } from '../../Config';
import User from '../../core/Models/User';

class dashboard extends Component<{}, IDashboardState> {
    @resolve(TYPES.UserService) private readonly userService: UserDataService = {} as UserDataService;

    state ={
        isAuthenticated: false,
            user: '',
            error: '',
            userName: 'John Doe',
            displayName:'John Doe',
    }

    constructor(props: any){
        super(props);
        
      }

    componentWillMount(){
        if(Config.isProd){
            var user = {} as User;
          this.userService.getCurrentUser().then ( res => {
              user = res.data;

              if(user){
        
                this.setState({
                  isAuthenticated: (user !== null),
                  displayName : user!.Full_Name,
                  user: '',
                  userName : user!.Login_ID,
                  error: ''
                });
              
              }else{
                this.setState({
                  isAuthenticated: true,
                  user: '',
                  error: '',
                  userName: 'John Doe',
                  displayName:'John Doe',
                });
              }
          });
        
        }
          
      }
            // componentDidUpdate(prevProps: any, PrevState:any){
            // if(prevProps.displayName !== this.props.displayName){
            // this.setState({
            //     ...this.state,

                
            // })
            // }
            // }
    render() {
        if(this.state.isAuthenticated){
            console.log(this.state,"State in App")
        return (
            <Auxi>
                <Layout {...this.state} >
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route exact path='/blog' component={Blog} /> 
                        <Route exact path='/blog/:id' component={BlogDetail} />    
                        <Route exact path='/services' component={Services} />   
                        <Route exact path='/archives' component={BlogArchive} />     
                        <Route exact path='/services/form' component={servicesForm} />  
                        <Route exact path='/userInfo'   render={(props) => <UserInfo {...props} isAuthed={true} displayName={this.state.displayName} userName={this.state.userName} />}/>             
                        <Route exact path='/recommendation/:optionCode' component={recommendation} />  

                    </Switch>
                </Layout>
            </Auxi>
        );
    }else{
        return (
          <div className="App page-background">
              <p> Login </p>
          </div>
        ) 
      }
    }
}

export default dashboard

interface IDashboardState {
    isAuthenticated: boolean,
    displayName : string,
    user: string,
    userName : string
    error: string
}