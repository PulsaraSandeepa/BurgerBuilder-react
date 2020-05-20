import React, {Fragment} from 'react';
import './Layout.css';
const layout =(props)=>(
    <Fragment>
        <div>toolbar,sidebar,backdrop</div>
        <main className="content">
            {props.children}
        </main>
    </Fragment>
)
export default layout;
