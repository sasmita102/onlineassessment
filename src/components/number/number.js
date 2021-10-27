import React from 'react'
import "./number.css";
import {Link} from "react-router-dom"
/**
* @author
* @function Number
**/

const Number = (props) => {
  return(<>
    <div className="number">
    <p className="one">1</p>
    <p className="two">2</p>
    <p className="two">3</p>
    <p className="two">4</p>
    <p className="two">5</p>
    <br/>
    </div>
    <div className="number1">
    <p className="three">6</p>
    <p className="two">7</p>
    <p className="two">8</p>
    <p className="two">9</p>
    <p className="two">10</p>
    <br/>
    </div>
    <div className="number1">
    <p className="three">11</p>
    <p className="two">12</p>
    <p className="two">13</p>
    <p className="four">14</p>
    <p className="four">15</p>
    <br/>
    </div>
    <div className="number1">
    <p className="three">16</p>
    <p className="two">17</p>
    <p className="one">18</p>
    <p className="one">19</p>
    <p className="two">20</p>
    <br/>
    </div>
    
    <Link to="/End"><button className="btnsub">SUBMIT</button></Link>
    
       </>
   )

 }

export default Number