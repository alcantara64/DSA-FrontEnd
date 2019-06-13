import React from 'react';
import Auxi from '../../hoc/Auxi';
import Header from '../app-header/header';
import './layout.css';

const layout = (props: any) => (
<Auxi >
    <Header></Header>
    <main className="em-l-container page-background">
        {props.children}
    </main>
</Auxi>
)

export default layout;