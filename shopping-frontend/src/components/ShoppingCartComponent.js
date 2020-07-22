import React, { useReducer } from 'react';
import ShoppingCartService from '../services/ShoppingCartService';

class ShoppingCartComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            total: 0
        };
    }

    componentDidMount(){
        /* Getting list of items from backend */
        ShoppingCartService.getItems().then((response) => {
            this.setState({items: response.data })
        });
        this.getTotal();
    }

    getTotal(){
        ShoppingCartService.getTotal().then((response) => {
            this.setState({total: response.data})
        });
    }

    handleClickIncrement(id) {
        ShoppingCartService.handleIncrement(id).then((response)=> {
            this.setState({items: response.data})
        });
        this.getTotal();
    }

    handleClickDecrement(id) {
        ShoppingCartService.handleDecrement(id).then((response)=> {
            this.setState({items: response.data})
        });
        this.getTotal();
    }

    handleClickDelete(id){
        ShoppingCartService.handleDelete(id).then((response)=> {
            this.setState({items: response.data})
        });
        this.getTotal();
    }

    render(){
        return(
            <div>
                <h1 className="text-center">Shopping Cart</h1>

                <table className = "table table-striped"> 
                    <thead>
                        <tr>
                            <td> <strong>Product Id</strong> </td>
                            <td><strong>Product Name</strong></td>
                            <td><strong>Price</strong></td>
                            <td><strong>Quantity</strong></td>
                            <td><strong>Total (per item)</strong></td>
                            <td>up</td>
                            <td>down</td>
                            <td>delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.items.map(
                                item => 
                                <tr key={item.productId}> 
                                    <td>{item.productId}</td>
                                    <td>{item.productName}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => this.handleClickIncrement(item.productId)}
                                        > 
                                        <i className="fa fa-plus-circle" aria-hidden="true" />
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => this.handleClickDecrement(item.productId)}
                                            disabled={item.quantity === 0 ? "disabled" : ""}
                                        > 
                                        <i className="fa fa-minus-circle" aria-hidden="true" />
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => this.handleClickDelete(item.productId)}
                                        > 
                                        <i className="fa fa-trash-o" aria-hidden="true" />
                                        </button>
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <hr/>
                <p><strong>Total:</strong> ${this.state.total.toFixed(2)}</p>          
            </div>
           
        )
    }
}

export default ShoppingCartComponent;