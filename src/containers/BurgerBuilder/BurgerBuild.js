import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorhandler from '../withErrorHandler/withErrorhandler';


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
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading:false,
        error:null
    }


    componentDidMount() {
        axios.get('https://burger-builder-react-45004.firebaseio.com/ingredients%20%20.json')
            .then(response =>{
                this.setState({
                    ingredients: response.data
                })
            }).catch(error =>{
                this.setState({
                        error: true
                })
        })
    }

    updatePurchaseState(ingredients) {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0)
        this.setState({
            purchasable: sum > 0
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
    purchasingHandler = () => {
        this.setState({
            purchasing: true
        })

    }
    backdropHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    continueHandler = () => {
        // alert('You continue!!!');
        this.setState({
            loading:true
        })
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Pulsara Sandeepa',
                address: {
                    street: 'ddff',
                    zipCode: 'vf',
                    country: 'dfff'
                },
                deliveryMethod: 'fasttest'
            }
        }
        axios.post('/orders.json', order)
            .then(response =>{
                    console.log(response);
                        this.setState({
                            loading:false,
                            purchasing:false
                        })
            }).catch(error => {
                console.log(error);
                    this.setState({
                            loading:false,
                            purchasing:false
                    })
              })

}
    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;

        let burger =this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner/>
        if(this.state.ingredients){
         burger =(
                <Fragment>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls ingredientsAdded={this.addIngredientHandler}
                                   ingredientRemoved={this.removeIngredientHandler}
                                   disabled={disabledInfo}
                                   price={this.state.totalPrice}
                                   purchasable={this.state.purchasable}
                                   purchased={this.purchasingHandler}/>
                </Fragment>
            )
            orderSummary =  <OrderSummary ingredients={this.state.ingredients}
                                          cancel={this.backdropHandler}
                                          continue={this.continueHandler}
                                          price={this.state.totalPrice}/>
        }
        if(this.state.loading){
            orderSummary =<Spinner/>
        }
        return (
            <Fragment>
                <Modal show={this.state.purchasing} clicked={this.backdropHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Fragment>
        );
    }
}

export default withErrorhandler(BurgerBuild,axios);
