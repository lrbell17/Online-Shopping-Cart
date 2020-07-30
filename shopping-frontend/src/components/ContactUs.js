import React from 'react';
import '../App.css';


class ContactUs extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
            fname: "",
            lname: "", 
            email: "",
            errors: [],
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {

        e.preventDefault();

        this.setState(() => ({
            errors: [],
            message: ""
        }))

        let errors = [];
        
        if (this.state.fname.length === 0 ) {
            errors.push("First name is missing!");
        }
        if (this.state.lname.length === 0) {
            errors.push("Last name is missing!");
        }
        if (this.state.email.length === 0) {
            errors.push("Email is missing!");
        }

        if (errors.length > 0){
            this.setState(() => ({
                errors: errors
            }))
        }
        else{
            this.setState(() => ({
                message: "Thank you for your submission, we will get back to you as soon as possible!"
            }))
        }   
    }
  
    render(){

        const errorStyle = {
            color: 'red'
        }
        const sucessStyle = {
            color: 'blue'
        }
        return (
            <div id="notebooks">
                <h1>Contact Us</h1><hr/>

                    {/* print success message */}
                    <p style={sucessStyle}>{this.state.message}</p>
                    
                    {/* print error message */}
                    {this.state.errors.map(error => (
                    <p style={errorStyle} key={error}>Error: {error}</p>
                    ))}


                <form onSubmit={this.handleSubmit}>
    

                    <label>First Name</label><br/>
                    <input id="query" type="text" value={this.state.fname} 
                        onChange={evt => this.setState({fname : evt.target.value })} placeholder="First Name" 
                    /> <br/><br/>

                    <label>Last Name</label><br/>
                    <input id="query" type="text" value={this.state.lname} 
                        onChange={evt => this.setState({lname : evt.target.value })} placeholder="Last Name"  
                    /><br/><br/>

                    <label>Email</label><br/>
                    <input id="query" type="email" value={this.state.email} 
                        onChange={evt => this.setState({email : evt.target.value })} placeholder="Email" 
                    /><br/><br/>

                    <label>Message</label><br/>
                    <textarea id="query" rows="5" cols="30" placeholder="What can we help you with?" /><br/><br/>
 

                    <input type="submit" />


                </form>
        
            </div>
        );
    }
}

export default ContactUs;