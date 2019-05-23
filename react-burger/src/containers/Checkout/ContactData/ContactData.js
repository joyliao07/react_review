import React, { Component} from 'react';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            // in a real production, the price should be calcued on the server to avoid manipulation of prices by the user
            customer: {
                name: 'Joyce',
                address: {
                    street: '1st Street',
                    city: 'Covington',
                },
                email: 'joyce@burger.com',
                deliveryMethod: 'immediately',
            }
        }
        axios.post('/orders.json', order)
            .then( response => {
                this.setState({
                    loading: false,
                    purchasing: false,
                });
            })
            .catch( error => {
                this.setState({
                    loading: false,
                    purchasing: false,
                });
                console.log(error);
            });





    }
    
    render () {
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact data: </h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name"/>
                    <input className={classes.Input} type="text" name="email" placeholder="Your Email"/>
                    <input className={classes.Input} type="text" name="street" placeholder="Street Address"/>
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code"/>
                    <Button btnType="Success" clicked={this.orderHandler}> ORDER </Button>
                </form>
            </div>
        );
    }
}

export default ContactData;
