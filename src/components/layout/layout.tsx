import React from 'react';
import Header from '../app-header/header';
import './layout.css';

const layout = (props: any) => (
<div >
    <Header></Header>
    <main className=" page-background">
        {props.children}
    </main>
</div>
)

export default layout;