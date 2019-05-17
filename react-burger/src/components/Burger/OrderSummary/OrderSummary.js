import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

// const orderSummary = (props) => {
class OrderSummary extends Component {
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(key => {
            return (
                <li key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}
                </li>
            );
        });

        return (
            <Aux>
                <h3>Your Order:</h3>
                    <ul>
                        {ingredientSummary}
                    </ul>

                <p><strong>Total Price: $ {this.props.total.toFixed(2)} </strong></p>
                <p>Continue to check out?</p>
                <Button btnType="Danger" clicked={this.props.cancel}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.continue}>Continue</Button>
            </Aux>
        );
    }
} 

// => {
//     const ingredientSummary = Object.keys(props.ingredients)
//         .map(key => {
//             return (
//                 <li key={key}>
//                     <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
//                 </li>
//             );
//         });

//     return (
//         <Aux>
//             <h3>Your Order:</h3>
//                 <ul>
//                     {ingredientSummary}
//                 </ul>

//             <p><strong>Total Price: $ {props.total.toFixed(2)} </strong></p>
//             <p>Continue to check out?</p>
//             <Button btnType="Danger" clicked={props.cancel}>Cancel</Button>
//             <Button btnType="Success" clicked={props.continue}>Continue</Button>

//         </Aux>
//     );
// }

export default OrderSummary;
