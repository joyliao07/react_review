import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorHandler = (WrappedComponenet, axios) => {
    return class extends Component {
        state = {
            error: null,
        }

        componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            
            this.resInterceptor = axios.interceptors.response.use(resp => resp, error => {
                this.setState({error: error});
            });
        }
        
        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
            this.setState({error: null});
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render () {
            return (
            <Aux>
                <Modal 
                    show={this.state.error}
                    modalClosed={this.errorConfirmedHandler}>
                    {this.state.error? this.state.error.message : null}
                </Modal>
                <WrappedComponenet {...this.props} />
            </Aux>
        );
        }
    }
}

export default withErrorHandler;
