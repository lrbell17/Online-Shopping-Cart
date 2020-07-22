import axios from 'axios';

const CART_URL = 'http://localhost:8080/shopping/cart';

const TOTAL_URL = 'http://localhost:8080/shopping/total';

class ShoppingCartService {

    getItems(){
        return axios.get(CART_URL);
    }

    getTotal(){
        return axios.get(TOTAL_URL);
    }
}

export default new ShoppingCartService();