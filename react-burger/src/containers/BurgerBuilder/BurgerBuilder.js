import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
// the component name starts with a lower-case letter because there is no JSX in it:
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


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
        // ingredients: {
        //     salad: 0,
        //     bacon: 0,
        //     cheese: 0,
        //     meat: 0,
        // },
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false,
    }

    componentDidMount () {
        axios.get('https://react-burger-3dda5.firebaseio.com/input.json')
            .then(response => {
                this.setState({ingredients: response.data.order1.ingredients});
            })
            .catch(error => {
                this.setState({error: true});
            });
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
        // this.setState({loading: true});
        // const order = {
        //     ingredients: this.state.ingredients,
        //     // in a real production, the price should be calcued on the server to avoid manipulation of prices by the user
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Joyce',
        //         address: {
        //             street: '1st Street',
        //             city: 'Covington',
        //         },
        //         email: 'joyce@burger.com',
        //         deliveryMethod: 'immediately',
        //     }
        // }
        // axios.post('/orders.json', order)
        //     .then( response => {
        //         this.setState({
        //             loading: false,
        //             purchasing: false,
        //         });
        //     })
        //     .catch( error => {
        //         this.setState({
        //             loading: false,
        //             purchasing: false,
        //         });
        //         console.log(error);
        //     });
        this.props.history.push('./checkout');
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
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
            const updatedIngredients = {...this.state.ingredients};
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
        let orderSummary = null;

        if (this.state.ingredients) {
            orderSummary = <OrderSummary 
                ingredients={this.state.ingredients}
                cancel={this.purchaseCancelHandler}
                continue={this.purchaseContinueHandler}
                total={this.state.totalPrice}/> 
        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        let burger = this.state.error? <p>Ingredients cannot be loaded.</p> : <Spinner />;
        
        if (this.state.ingredients) {
            burger = (
                <Aux>
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

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}> 
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
