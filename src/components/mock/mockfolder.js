import React from 'react';
import "./mockfolder.css";

/**
* @author
* @function Mock
**/

const Mock = (props) => {
  return(
  
      <div className="mock__container">
      <h2>Trending Assessment Test</h2>
      <div className="itemcontainer">
    
    <div className="mock__item1">
    <img  className="img1"src="https://www.simplilearn.com/ice9/free_resources_article_thumb/full_stack_banner.jpg"alt="mern"/> 
    
    </div>

    <div className="mock__item2">
  <img className="img2" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/full_stack_banner.jpg"alt="mern"/>
   
   </div>

    <div className="mock__item3">
   <img className="img3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRafD8TI5rqcWPxJ1W9ZHfkyByz2zTvwKUhkWiVKOl-RNic3wILPWybq-P7gQhdfRDxmRc&usqp=CAU"alt="mern"/>
    
    </div>

    <div className="mock__item4">
  <img className="img4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIQ-gEwpCSsxP6IW1EC1MuNp30b9u5sE6CCf7g9hI8CQOVzOY3JFfuSSYR06crHqtP8c&usqp=CAU"alt="mern"/>

  </div>

    </div>
    <div className="mock__btn">
    <button className="btn1">Pick Color</button>
    <button className="btn2">Pick Color</button>
    <button className="btn3">Pick Color</button>
    <button className="btn4">Pick Color</button>
    </div>
    </div>
  
  
   )

 }

export default Mock