import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';


class Nav extends React.Component {
  


    render(){
        const navStyle = {
            color: 'white'
        }
        return (
            <nav>
                <h3>DummyCorp Online Shopping Center</h3>
                <ul className="nav-links">
                    <Link style={navStyle} to='/'>
                        <li className="nav-items">Home</li>
                    </Link>
                    <Link style={navStyle} to='/cart'>
                        <li className="nav-items">Shop</li>
                    </Link>
                    <Link style={navStyle} to='/contact'>
                        <li className="nav-items">Contact Us</li>
                    </Link>
   
                </ul>
            </nav>
        );
    }
}

export default Nav;