import React, {Component} from 'react';
import Layout from '../../components/layout/layout';
import Home from '../../components/home/home';
import About from '../../components/about/about';


class dashboard extends Component {

    //class should container method reference for header routing and footer visiblity
    //state sould only change in component

    state = {
        headerProperty: {
            home: true, 
            service: false,
            blogs: false,
            about: false,
            resources: false,
            comminuty: false
        }
    };

    onHeaderClicked = (page: string) => {
        const currentNavProp: any = {...this.state.headerProperty};
        
        for (var pages in currentNavProp) {
            if(pages.toString() === page){
                currentNavProp[pages] = true;
            }else{
                currentNavProp[pages] = false;
            }
        }

        this.setState({
            headerProperty: currentNavProp
        })
    }

    render(){

        let page = null;

        if(this.state.headerProperty.home){
            page = <Home></Home>
        }else if(this.state.headerProperty.about){
            page = <About></About>
        }

        return(
            <Layout navClicked={this.onHeaderClicked} navProperty={this.state.headerProperty}>
                {/* hide show components*/}
                {page}
            </Layout>
        );
    }
}

export default dashboard