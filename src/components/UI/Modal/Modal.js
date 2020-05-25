import React, {Fragment, Component} from 'react';
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }
    componentDidUpdate() {
        console.log("[Modal] will update");
    }

    render() {

    return(

<Fragment>
<Backdrop show={this.props.show}  clicked={this.props.clicked}/>
<div className="Modal"
style ={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', visibility: this.props.show ? 'visible' : 'hidden'}}
>
{this.props.children}
</div>
</Fragment>

)
}
}
export default Modal;
