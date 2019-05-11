import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 1.2,
    cheese: 0.4,
    meat: 1.2,
}

class BurgerBuilder extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchaseable: false,
    }

    updatePurchaseState (ingredients) {
        // const ingredients = {... ingredients};
        const sum = Object.keys(ingredients)
            .map( key => {
                return ingredients[key];
            })
            .reduce((sum, element) => {
                return sum + element;
            }, 0);
        this.setState({purchaseable: sum > 0});
    }


    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = {... this.state.ingredients};
        updatedIngredients[type] = newCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

        this.updatePurchaseState(updatedIngredients);
    }
    
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount >= 1) {
            const newCount = oldCount - 1;
            const updatedIngredients = {... this.state.ingredients};
            updatedIngredients[type] = newCount;
            const priceDeduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
            this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
            this.updatePurchaseState(updatedIngredients);
        } else {
            return
        }
    }
    
    orderValidationHandler = () => {    
        if (this.state.totalPrice > 4) {
            console.log('to set purchaseable state to true.');
            this.setState({purchaseable: true});
            console.log('purchaesable state: ', this.state.purchaseable);
        } else {
            console.log('to set purchaseable state to false.');
            this.setState({purchaseable: false});
        }

        if (this.state.purchaseable === false) {
            // ask the customer to buy something
            console.log('purchaesable state: ', this.state.purchaseable)
            return
        } else {
            console.log('purchaesable state: ', this.state.purchaseable)
        }
    }

    render(){
        return (
            <Aux>
                <Burger ingredients={ this.state.ingredients }/>
                <BuildControls 
                    ingredientAdded={ this.addIngredientHandler }
                    ingredientRemoved={ this.removeIngredientHandler}
                    totalPrice={ this.state.totalPrice }
                    orderButton={ this.orderValidationHandler }
                    purchaseable={ this.state.purchaseable }
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
