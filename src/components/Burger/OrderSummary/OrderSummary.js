import React ,{Fragment} from 'react';
import Button from '../../UI/Button/Button';
const orderSummary =(props)=>{


    const orderSummary = Object.keys(props.ingredients)
        .map(igKey =>{
            return(
                <li key={igKey}>
                <span style ={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
                </li>);
        });

    return(
        <Fragment>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {orderSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
            <Button btnType ="Success" clicked ={props.continue}>CONTINUE</Button>
        </Fragment>
    )

}

export default orderSummary;
