import React from 'react';
import './Toolbar.css';
import Logo from '../../../components/Layout/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../SideDrawer/Menu/Menu'
const toolbar =(props)=>(

<header className="Toolbar">
        <Menu clicked ={props.clicked}/>
        <Logo height="80%"/>
    <nav className="DesktopOnly">
       <NavigationItems/>
    </nav>
</header>

)
export default toolbar;
