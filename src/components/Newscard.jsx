import React from 'react'
import {Link} from 'react-router-dom'
import logo from './../assets/images/logo.png'

class Newscard extends React.Component{
render(){
  return(
    <div className="news-board">
        <div className="new-logo">
          <div className="news-icon"></div>
       </div>
 <div className="new-content">
    <span className="time">{this.props.time}</span>
     <h3 className="headline"> {this.props.headline}</h3>
    <p>{this.props.content}</p>
     <a href={this.props.url}>Read More</a>

 </div>
</div>


   );
 }
}

export default Newscard;
 