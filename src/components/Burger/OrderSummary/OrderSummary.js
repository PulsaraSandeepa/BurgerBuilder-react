import React ,{Fragment} from 'react';

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
        </Fragment>
    )

}

export default orderSummary;
