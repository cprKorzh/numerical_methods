import React from 'react';
import classes from './CardMethod.module.css';
import MethodsButton from '../buttons/MethodsButton';

import { handleCalculate } from '../../functions/handleCalculate';

const CardMethod = (props) => {
    return (
        <div className={classes.cardWrapper}>
            <strong>{props.card.id}. {props.card.name}</strong>
            <div>
                <p>Итоговое значение: {props.value}</p>
                <p>Количество шагов итерации: {props.count}</p>
            </div>
            <MethodsButton onClick={() => handleCalculate(
                props.card.calling, 
                props.numA, 
                props.numB, 
                props.Epsilon, 
                props.count, 
                props.setValue, 
                props.setCount
            )}>
                Вызов метода {props.card.title}
            </MethodsButton>
        </div>
    );
};

export default CardMethod;