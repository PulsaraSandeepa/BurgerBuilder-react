import React, {Fragment, Component} from 'react';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
class Layout extends Component {
        state ={
                showSideDrawer:false
             }

        closedSideDrawerHandler = ()=>{
        this.setState({
               showSideDrawer:false
       })
       }

       menuHandler = ()=>{
           this.setState((prevState) =>{
           return{showSideDrawer: !prevState.showSideDrawer};
       })
       }

render(){
        return(
            <Fragment>
                    <Toolbar clicked={this.menuHandler}/>
                    <SideDrawer opened ={this.state.showSideDrawer} closed ={this.closedSideDrawerHandler}/>
                    <main className="content">
                            {this.props.children}
                    </main>
            </Fragment>

        )

}


}
export default Layout;
