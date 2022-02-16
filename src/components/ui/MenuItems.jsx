import React from 'react';
import './MenuItems.css'

const MenuItems = ({ menuItems }) => {
  return(
      <>
        {menuItems.map((item) => (
         <p>
           {item.name}
         </p>
        ))}
      </>
  );
}

export default MenuItems