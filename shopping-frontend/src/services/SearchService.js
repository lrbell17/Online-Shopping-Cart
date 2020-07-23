import axios from 'axios';

const PRODUCT_URL = 'http://localhost:8080/search/products';

const SELECT_URL = 'http://localhost:8080/search/select/';

const FIND_PRODUCT_URL = 'http://localhost:8080/search/find/';

class SearchService {

    
    getProductList(){
        return axios.get(PRODUCT_URL);
    }

    handleSelect(id) {
        return axios.get(SELECT_URL.concat(id));
    }

    findProduct(id){
        return axios.get(FIND_PRODUCT_URL.concat(id));
    }
}

export default new SearchService();