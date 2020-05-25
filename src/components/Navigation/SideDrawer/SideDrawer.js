import React,{Fragment} from 'react';
import Logo from '../../Layout/Logo/Logo';
import './SideDrawer.css';
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from '../../UI/Backdrop/Backdrop';
const sideDrawer =(props)=>{

    let attachedClasses =["SideDrawer", "Close"];
    if(props.opened){
        attachedClasses=["SideDrawer" , "Open"];
    }
    return(
        <Fragment>
            <Backdrop show ={props.opened} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo height="11%" margin="32px"/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>

        </Fragment>

    )
}
export default sideDrawer;
