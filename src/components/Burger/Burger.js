import React from 'react';
import './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';


const burger=(props) =>{

    let transformedingredients = Object.keys(props.ingredients)
        .map(igkey=>{
            return [...Array(props.ingredients[igkey])].map((_,i) =>{
               return  <BurgerIngredients key={igkey +i} type={igkey}/>;
            });
        })
        .reduce((arr,el)=>{
            return arr.concat(el);
    },[]);
    if(transformedingredients.length ===0){
        transformedingredients = <p>Please add ingredients</p>;
    }
  //  console.log(transformedingredients);
    return(
        <div className="burger">
            <BurgerIngredients type="bread-top"/>
            {transformedingredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
}
export default burger;
