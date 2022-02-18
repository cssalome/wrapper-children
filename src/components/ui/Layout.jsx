import Footer from './Footer'
import Header from './Header'
import React from 'react';
import './Layout.css'

const Layout = ({ children }) => {
  return(
    <div className='layout'>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout;