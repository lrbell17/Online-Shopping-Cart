import React from 'react';
import ShoppingCartService from '../services/ShoppingCartService';
import SearchService from '../services/SearchService';
import AutoComplete from './AutoComplete';


class ShoppingCartComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            productList: [],
            total: 0,
            suggestions: [],
            text: ''
        };
    }

    componentDidMount(){
        /* Getting list of items from backend */
        ShoppingCartService.getItems().then((response) => {
            this.setState({items: response.data })
        });

        /* Getting list of all products*/ 
        SearchService.getProductList().then((response)=> {
            this.setState({productList: response.data})
        });

           /* calucluates the total cost of cart */
        ShoppingCartService.getTotal().then((response) => {
            this.setState({total: response.data})
        });
        
    }  

    // ------------- Shopping cart ------------------------//
    handleClickIncrement(id) {
        // add 1 count & update list
        ShoppingCartService.handleIncrement(id).then((response)=> {
            this.setState({items: response.data})
        });
        // add price to total cost
        ShoppingCartService.findItem(id).then((response) => {
            this.setState({total: this.state.total + response.data.price})
        })
    }

    handleClickDecrement(id) {
        // remove 1 count & update list
        ShoppingCartService.handleDecrement(id).then((response)=> {
            this.setState({items: response.data})
        });
        // remove price from total cost
        ShoppingCartService.findItem(id).then((response) => {
            this.setState({total: this.state.total - response.data.price})
        })
    }

    handleClickDelete(id){
        // delete item & update list
        ShoppingCartService.handleDelete(id).then((response)=> {
            this.setState({items: response.data})
        });
        
        // subtract total cost from cart total
        ShoppingCartService.findItem(id).then((response) => {
            this.setState({total: this.state.total - (response.data.price * response.data.quantity)})
        })
    }

    handleAddToCart(id){
        // add item & update list
        SearchService.handleSelect(id).then((response) => {
            this.setState({items: response.data})
        });
         // add price to total cost
        SearchService.findProduct(id).then((response) => {
            this.setState({total: this.state.total + response.data.price});
        });
    
    }

    //----------- Auto Completed Search Bar ------------------------------// 
    onTextChange = (e) => {
        const value = e.target.value;
        let suggestions = [];

        
        if(value.length > 0){
            let productList = this.state.productList;

            /*checking for matching substring in productList  */
            for (let i=0; i< productList.length; i++ ){

                if (productList[i].productName.substr(0, value.length).toLowerCase() === value.toLowerCase()){
                    suggestions.push(productList[i]);
                }

            }

        }

        this.setState(() => ({
            suggestions,
            text: value
        }))
    }

    selectedText = (value) => {

        this.handleAddToCart(value.productId);
        this.setState(() => ({
            text: value.productName,
            suggestions: []
        }));

    }

    renderSuggestions = () => {
        let { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul >
                {
                    suggestions.map((item, index) => (
                        <li key={index} onClick={() => this.selectedText(item)}>
                             {item.productName} - ${item.price.toFixed(2)}
                        </li>))
                }
            </ul>
        );
    }

    // ------------------ Render ----------------------------------//
    render() {
        console.log("RENDER " + this.state.total)
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
                            <td></td>
                            <td></td>
                            <td></td>
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
               
                <p>
                    <strong>Total:</strong> ${this.state.total.toFixed(2)}
                </p>      

                <AutoComplete
                    suggestions={this.state.suggestions}
                    text={this.state.text}
                    onTextChange={this.onTextChange}
                    renderSuggestions={this.renderSuggestions}
                />
            </div>
           
        )
    }
}

export default ShoppingCartComponent;