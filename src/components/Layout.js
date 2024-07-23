import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/global.css';
import '../styles/fonts.css';
import '../styles/theme.css';

const Layout = ({ children }) => (
    <>
        <Header />
        <main className="container">
            {children}
        </main>
        <Footer />
    </>
);

export default Layout;
