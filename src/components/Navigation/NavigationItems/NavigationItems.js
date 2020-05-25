import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import './NavigationItems.css'

const navigationItems =()=>(

   <ul className="NavigationItems">
       <NavigationItem link ="/" active >Burger Builder</NavigationItem>
       <NavigationItem link ="/">Checkout</NavigationItem>
   </ul>

)
export default navigationItems;
