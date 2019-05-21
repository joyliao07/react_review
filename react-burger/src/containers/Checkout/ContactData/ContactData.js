import React, { Component} from 'react';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
    }

    
    render () {
        console.log('contactData.');
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact data: </h4>
                <form>
                    <input type="text" name="name" placeholder="Your Name"/>
                    <input type="text" name="email" placeholder="Your Email"/>
                    <input type="text" name="street" placeholder="Street Address"/>
                    <input type="text" name="postal" placeholder="Postal Code"/>
                    <Button btnType="Success"> ORDER </Button>
                </form>
            </div>
        );
    }
}

export default ContactData;
