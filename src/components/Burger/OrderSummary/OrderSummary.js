import React ,{Fragment, Component} from 'react';
import Button from '../../UI/Button/Button';



class OrderSummary extends Component {

    componentDidUpdate() {
        console.log("[Order summary] updated");
    }

    render() {
        const orderSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
                    </li>);
            });
        return (

            <Fragment>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {orderSummary}
                </ul>
                <p>Continue to Checkout?</p>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <Button btnType="Danger" clicked={this.props.cancel}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continue}>CONTINUE</Button>
            </Fragment>


        );
    }
}
export default OrderSummary;
