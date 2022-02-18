import React from 'react';
import './MenuItems.css'

const MenuItems = ({ menuItems }) => {
  return(
      <>
        {menuItems.map((item) => (
          <p key={ item }>{item}</p>
        ))}
      </>
  );
}

export default MenuItems