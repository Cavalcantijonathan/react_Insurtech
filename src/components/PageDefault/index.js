import React from 'react';
import Menu from '../Menu/index';
import Footer from '../Footer/index';

function PageDefault({ children }) {
    return (
        <div>
            <Menu />
                {children}
            <Footer />
        </div>
    );
}

export default PageDefault;