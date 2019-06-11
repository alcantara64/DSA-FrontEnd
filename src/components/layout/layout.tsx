import React from 'react';
import Auxi from '../../hoc/Auxi';
import Header from '../app-header/header';
import Footer from '../app-footer/footer';
import './layout.css';

const layout = (props: any) => (
<Auxi >
    <Header clicked={props.navClicked} {...props}></Header>
    <main className="em-l-container">
        {props.children}
    </main>
    <Footer />
</Auxi>
)

export default layout;