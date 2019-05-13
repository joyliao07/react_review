import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return (
                <li key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
                </li>
            );
        });

    return (
        <Aux>
            <h3>Your Order:</h3>
                <ul>
                    {ingredientSummary}
                </ul>
            <p>Continue to check out?</p>

        </Aux>
    );
}

export default orderSummary;












