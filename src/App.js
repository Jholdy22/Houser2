import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import routes from './routes.js'
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      inventory: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:4000/api/inventory').then((res) => {
      this.setState({inventory: res.data})
      })
    }


  render() {
    return (
      <div className="App">
      
      
      <Header />
      { routes }
      </div>
    );
  }
}

export default App;
