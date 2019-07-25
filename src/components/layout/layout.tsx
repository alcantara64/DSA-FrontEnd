import React, { Component } from 'react';
import Header from '../app-header/header';
import './layout.css';

class layout extends Component<Ilayout>{



render() {

return (
<div >
    <Header displayName ={this.props.displayName}  {...this.props}></Header>
    <main className=" page-background">
        {this.props.children}
    </main>
</div>
)
}
}
export default layout;

interface Ilayout {
    displayName : string;

}