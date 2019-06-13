import React from 'react';
import Auxi from '../../hoc/Auxi';
import Header from '../app-header/header';
import Footer from '../app-footer/footer';
import './layout.css';

const layout = (props: any) => (
<Auxi >
    <Header></Header>
    <main className=" page-background">
        {props.children}
    </main>
    <Footer />
</Auxi>
)

export default layout;