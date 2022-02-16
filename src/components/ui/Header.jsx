import React from 'react'
import Imagen from './Imagen';
import MenuItems from './MenuItems'
import img from '../../assets/images/logo-fares.svg';
import './Header.css';

const Header = () => {
  const menu = [
    {
      id:1,
      name:'Home'
    },
    {
      id:2,
      name:'About Us'
    },
    {
      id:3,
      name:'Contact Us'
    }
  ];
 


  return (
    <div className='bg-header'>
      <div className='header-container'>
        <Imagen img={img} type='logo' alt='FARES'/>
        <nav className='menu'>
        <MenuItems menuItems={menu} direction='horizontal'/>
        </nav>
      </div>
    </div>
  );
};

export default Header;

