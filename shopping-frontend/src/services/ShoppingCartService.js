import axios from 'axios';

const CART_URL = 'http://localhost:8080/shopping/cart';

const TOTAL_URL = 'http://localhost:8080/shopping/total';

const DELETE_URL = 'http://localhost:8080/shopping/delete/';

const INC_URL = 'http://localhost:8080/shopping/increment/';

const DEC_URL = 'http://localhost:8080/shopping/decrement/';

const FIND_URL = 'http://localhost:8080/shopping/find/';

class ShoppingCartService {

    getItems(){
        return axios.get(CART_URL);
    }

    getTotal(){
        return axios.get(TOTAL_URL);
    }

    handleIncrement(id) {
        return axios.get(INC_URL.concat(id))
      };
    
    handleDecrement(id){
        return axios.get(DEC_URL.concat(id))
    };

    
    handleDelete(id){
        return axios.get(DELETE_URL.concat(id));
    };

    findItem(id){
        return axios.get(FIND_URL.concat(id));
    }

}

export default new ShoppingCartService();