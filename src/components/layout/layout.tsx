import React from 'react';
import Auxi from '../../hoc/Auxi';
import Header from '../app-header/header';
import Footer from '../app-footer/footer';

const layout = (props: any) => (
<Auxi>
    <Header />
    <main>
        {props.children}
    </main>
    <Footer />
</Auxi>
)

export default layout;