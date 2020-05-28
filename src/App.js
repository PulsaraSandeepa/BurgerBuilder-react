import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuild from './containers/BurgerBuilder/BurgerBuild';
class App extends Component{
render(){
        return (
            <Layout>
               <BurgerBuild/>
            </Layout>
        );
 
    }
}

export default App;
