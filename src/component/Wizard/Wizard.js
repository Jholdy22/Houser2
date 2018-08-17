import React from 'react';
import {Link} from 'react-router-dom'
import './Wizard.css'

class Wizard extends React.Component {
    constructor(){
        super();

        this.state = {
            // name: '',
            // address: '',
            // city: '',
            // state: '',
            // zipcode: ''
            userInput: ""
        }
        this.addTodo = this.addTodo.bind(this)
    }

    handleChange(e){
        this.setState({userInput: e.target.value})
    }

    addTodo(todo) {
        if(this.addTodo.length > 0) {
            this.props.addTodo(todo);
            this.setState({userInput: ''})
        }
    }

    render(){
        return(
            <div>
                <Link to="/"><button>Cancel</button></Link>
                    <div className="containers" >
                            <label>Name</label>
                        <input onChange={ e => this.handleChange(e)} value={this.state.userInput}type="text"/>
                            <label>Address</label>
                        <input type="text"/>
                            <label>City</label>
                        <input type="text"/>
                            <label>State</label>
                        <input type="text"/>
                            <label>Zipcode</label>
                        <input type="text"/>
                </div>
            </div>
        )
    }
}

export default Wizard;