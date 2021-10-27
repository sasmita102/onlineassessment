import React,{useState,useEffect} from 'react';
import "./end.css";
//import Chart from './doughnutchart';
import {Doughnut} from "react-chartjs-2";

/**
* @author
* @function End
**/

const End = ({results,data,onReset,onAnswersCheck,time}) => {
    const [correctAnswers,setCorrectAnswers] = useState(0);
  const [incorrectAnswers,setInCorrectAnswers]=useState(0);


  useEffect(()=>{
    let correct = 0;
    results.forEach((result,index)=>{
      if(result.a ===data[index].answer){
       correct++;
      }
    });
    setCorrectAnswers(correct);
  },[]);
  
  useEffect(()=>{
    let incorrect = 0;
    results.forEach((result,index)=>{
      if(result.a !==data[index].answer){
       incorrect++;
      }
    });
    setInCorrectAnswers(incorrect);
  },[data,results]);

  const data1 = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        label: '# of results',
        data: [correctAnswers,incorrectAnswers],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
            borderWidth: 1,
      },
    ],
  };
  
  

  

  

  return(
      <>
    <div className="result">
    
    <div className="result1">
    <div className="heading1">
    TEST SUMMARY
    </div>
    <div className="nosqus">
   <p>No of Questions</p>
   <p>10</p>
    </div><br/>
    <div className="cor">
   <p>Correct</p>
   <p>{correctAnswers}</p>
    </div><br/>
    <div className="inc">
   <p>Incorrect</p>
   <p>{incorrectAnswers}</p>
    </div><br/>
    <hr/>
    <h4>Total Score</h4>
    <div className="scor">
    <p>{correctAnswers}of {data.length}</p>
    <p>{Math.floor((correctAnswers/data.length)*100)}%</p>
    </div>
    </div>
    <div className="result2">summary
    
<div>
  <Doughnut data={data1} />
    </div>
    <button className="exambtn">EXAMINE TEST IN DETAILS</button>
</div>
    </div>
    </>
   )

 };
 
export default End