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
        /* Getting total cost from backend */
        ShoppingCartService.getTotal().then((response) => {
            this.setState({total: response.data})
        });
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.items.map(
                                item => 
                                <tr key={item.id}> 
                                    <td>{item.id}</td>
                                    <td>{item.productName}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
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