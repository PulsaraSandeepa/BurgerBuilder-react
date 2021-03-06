import React from 'react'
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
    {label: 'Salad', type : 'salad'},
    {label: 'Meat', type : 'meat'},
    {label: 'Cheese', type : 'cheese'},
    {label: 'Bacon', type : 'bacon'}
]

const buildControls = (props) =>(

    <div className="BuildControls">
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=>(
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added ={()=>props.ingredientsAdded(ctrl.type)}
                removed = {() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
            )
        )}
        <button className="OrderButton"
                disabled={!props.purchasable}
                onClick={props.purchased}
                >ORDER NOW</button>
    </div>

)
export default buildControls;
