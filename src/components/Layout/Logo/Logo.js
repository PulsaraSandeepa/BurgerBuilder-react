import React from 'react';

import burgerLogo from  '../../../assets/Images/burger-logo.png';
import './Logo.css';
const logo =(props)=>(
    <div className="Logo"  style={{height:props.height , marginBottom:props.margin}}>
        <img src={burgerLogo}
             alt ="logo"
            />
    </div>

)

export default logo;
