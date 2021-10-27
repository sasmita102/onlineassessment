import React,{useState,useEffect,useRef} from 'react';
import "./question.css";
import Number from './number/number';

import{Link} from "react-router-dom"
import axios from "axios";


/**
* @author
* @function Question
**/

const Question = ({data,onAnswerUpdate,numberofQuestions,activeQuestion,onsetActiveQuestion,onSetstep}) => {
  const [num,setNum] = useState('');
  
    const [selected,setSelected]= useState('');
  const [error ,setError]=useState('');
  const radiosWrapper =useRef();
  useEffect(()=>{
    axios.get("http://localhost:5000/Question")
    .then(res=>{
      console.log(res.data)
      setNum(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  useEffect(()=>{
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if(findCheckedInput){
      findCheckedInput.checked = false;
    }
  }, [data]);





  const changeHandler =(e)=>{
  setSelected(e.target.value);
  if(error){
    setError('');
  }
}


const nextClickHandler =(e)=>{
    if(selected===''){
      return setError('please select one option!');
    }
    onAnswerUpdate(prevState=>[...prevState,{q:data.question,a:selected}]);
    setSelected('');
    if(activeQuestion<numberofQuestions - 1){
      onsetActiveQuestion(activeQuestion +1);
    }else{
      onSetstep(3);
    }

}
 


  return(
    <>
    <div className="test__container">
    <div className="test1">
    <p style={{fontSize:"1.8rem"}}>MOCK TEST<span> for Service <br/>Based Companies</span></p>
    </div>
    <div className="test2">
    <img className="test2__img" src="https://image.shutterstock.com/shutterstock/photos/187601810/display_1500/stock-vector-software-engineering-is-the-study-and-application-of-engineering-to-the-design-development-and-187601810.jpg" alt="gra"/>
    </div>
    </div>
   
    <div className="question">
  <div className="question1">
    
    <h4 className="qus">{data.question}</h4>
    <div className="control" ref={radiosWrapper}>
    {data.choices.map((choice,i)=>(
    <label className="radio" key={i}>
    <input type="radio" name="answer" value={choice} onChange={changeHandler}/>
   {choice}
    </label>
    ))}
    </div>
    {error &&<div className="error"> {error}</div>}
    <div className="btnclass">
        <button className="btnclass1">Previous</button>
    <button className="btnclass2" onClick={nextClickHandler}> SAVE & NEXT</button>
    
    </div>

 
    </div>
    
    <div className="answer">
    <h3>Question Status</h3>
    <div className="report">
        <input type="checkbox" id="report1"/><label for="report1">Answered</label>
        <input type="checkbox" id="report2"/><label for ="report2">Unanswered</label>
        <input type="checkbox" id="report3"/><label for ="report3">mark for later</label>
        </div>
    <hr/>
    <Number/>

    </div>
    </div>

  

  
    </>
   )

 }

export default Question