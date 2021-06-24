import React, { Fragment } from 'react';
import Animation from '../src/assests/logo-animated-red.gif';

const Loader = () => {
    return (
        <Fragment>
            <img src= {Animation} style= {{ display: 'block', margin: 'auto' }} />
        </Fragment>
    )
}

export default Loader
