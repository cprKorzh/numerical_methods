import React from 'react';
import classes from './ValueInputs.module.css';

const ValueInputs = (props) => {
    return (
        <input className={classes.wrapValue} {...props}/>
    );
};

export default ValueInputs;