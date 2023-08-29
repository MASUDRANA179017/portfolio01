import React from 'react'
import Header from '../Navbar';
import Footer from '../Footer';

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout;