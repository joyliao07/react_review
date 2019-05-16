import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        purchasing: false,
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

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You continue');
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

    render(){
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}> 
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        cancel={this.purchaseCancelHandler}
                        continue={this.purchaseContinueHandler}
                        total={this.state.totalPrice}/> 
                </Modal>
                <Burger ingredients={ this.state.ingredients }/>
                <BuildControls 
                    ingredientAdded={ this.addIngredientHandler }
                    ingredientRemoved={ this.removeIngredientHandler}
                    totalPrice={ this.state.totalPrice }
                    purchaseable={ this.state.purchaseable }
                    ordered={ this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
