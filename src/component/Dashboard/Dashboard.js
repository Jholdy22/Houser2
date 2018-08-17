import React from 'react';
import House from '../House/House'
import { Link } from 'react-router-dom'
import './Dashboard.css'

class Dashboard extends React.Component {
   
    render() {
        return(
           <div>
               Dashboard
               <House />
               <Link to='/Wizard'><button className="btn">Add New Prop</button></Link>
           </div>
        )
    }
}

export default Dashboard