import React ,{Fragment} from 'react';
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop';

const modal =(props)=>(
<Fragment>
    <Backdrop show={props.show}  clicked={props.clicked}/>
    <div className="Modal"
         style ={{transform: props.show ? 'translateY(0)':'translateY(-100vh)',visibility:props.show ? 'visible':'hidden'}}
        >
        {props.children}
    </div>
</Fragment>

);

export default modal;