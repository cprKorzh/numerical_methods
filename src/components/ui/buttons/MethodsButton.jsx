import React from 'react';
import classes from './MethodsButton.module.css'

const MethodsButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.methodButton}>
            {children}
        </button>
    );
};

export default MethodsButton;