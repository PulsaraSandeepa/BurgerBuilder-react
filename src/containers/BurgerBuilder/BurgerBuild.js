import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    cheese: 0.7,
    meat: 0.4,
    salad: 0.2,
    bacon: 0.8
}


class BurgerBuild extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            cheese: 0,
            meat: 0,
            salad: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchasable:false
    }
    updatePurchaseState (ingredients) {

     const sum = Object.keys(ingredients)
         .map(igKey =>{
             return ingredients[igKey];
         })
         .reduce((sum,el)=>{
             return sum+el;
         },0)
 this.setState({
     purchasable:sum>0
 })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        //array should update in immutable way
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const newCount = oldCount - 1;
        //array should update in immutable way
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const priceRemove = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - priceRemove;
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);

    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Fragment>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientsAdded={this.addIngredientHandler}
                               ingredientRemoved={this.removeIngredientHandler}
                               disabled={disabledInfo}
                               price={this.state.totalPrice}
                               purchasable ={this.state.purchasable}/>
            </Fragment>
        );
    }
}

export default BurgerBuild;
