import React from 'react'
import Banner from './banner/banner';
import Mock from './mock/mockfolder';
import Footer from './footer/footer';
import "./start.css";
import{Link} from "react-router-dom"

/**
* @author
* @function Start
**/

const Start = ({onQuizStart}) => {
  return(
      <>
        <div className="container">
    <div className="container__right">
    <h2 style={{fontSize:"40px"}}>Differentiate yourself & </h2>
     <h4 style={{color:"grey",fontSize:"35px"}}> stand out  from the crowd.</h4>
     <br/>
        <p>Evaluate yourself & Improve,Take test now</p>
        <br/>
        <Link to ="/Question"><button  className="right__button">Take Test</button></Link>
    </div>
    <div className="container__left">
    </div>
    </div>
    <div className="banner">
    <Banner/>
    </div>
    <div className="mockadd">
    
    <Mock/>
    </div>
    <Footer/>
    
   </>
   )

 }


    
   

 

export default Start