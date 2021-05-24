import React from 'react'
import {Link} from 'react-router-dom'
import logo from './../assets/images/logo.png'

class Navbar extends React.Component{
render(){
  return(
    <div className="navbar">
      <div className="bars  mobile" id="done">
            <div class="bar bb1"></div>
            <div class="bar bb"></div>
            <div class="bar bb1"></div>
        </div>
       <div className="container">
        
      <div className="logo">
      <img src={logo}width="70"/>

      </div>
       <ul className="menu">
       <li><Link to="#">Categories</Link></li>
       <li><Link to="#">Platform</Link></li>
       <li><Link to="#">About</Link></li>
       <li><Link to="#">Team</Link></li>

       </ul>
       
       </div>
      
    </div>
   );
 }
}

export default Navbar;
