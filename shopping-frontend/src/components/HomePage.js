import React from 'react';
import '../App.css';



class HomePage extends React.Component {
  
    render(){
        return (
            <div id="notebooks">
                <h2>Welcome!</h2> <hr/>
                <p> The DummyCorp Online Shopping Center offers a variety of high-quality products delivered to 
                    right your doorstep at the click of a button. 
                    Our stock includes but is not limited to: </p>

                    <dl>
                        {/* <dt>Electronics</dt> */}
                        <dt>Electronics</dt>
                        <dt>Sporting Goods</dt>
                        <dt>Home Furnishing</dt>
                        <dt>Apparel</dt>
                        <dt>Kitchenware</dt>
                        <dt>And much more!</dt>
                    </dl>

                <p>Click one of the options above to get started! </p>
            </div>
        );
    }
}

export default HomePage;