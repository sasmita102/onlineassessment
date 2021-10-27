import React,{useState,useEffect} from 'react'
import {Doughnut} from "react-chartjs-2"

/**
* @author
* @function Chart
**/


const Chart = ({results}) => {
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
  },[]);

  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        label: '# of Votes',
        data: [{correctAnswers}, {incorrectAnswers}],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  

  

  return(
      <>
    <div className='header'>
    <h1 className='title'>Summary</h1>
   
  </div>
  <Doughnut data={data} />
</>
     )

 }

export default Chart