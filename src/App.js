import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuild from './containers/BurgerBuilder/BurgerBuild';
import Checkout from "./containers/Checkout/Checkout";
class App extends Component{
render(){
        return (
            <Layout>
               <BurgerBuild/>
               <Checkout/>
            </Layout>
        );

    }
}

export default App;
