import React ,{useState}from 'react';
import "./App.css"
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Start from '../../quizapp/src/components/start';
import Navbar from './components/navbar';
import quizData from "./data/quiz.json";
import Question from './components/question';
import End from './components/end';

/**
* @author
* @function App
**/

const App = (props) => {
  const [step , setStep]=useState(1);
  const [activeQuestion , setActiveQuestion]= useState(0);
  const [answers , setAnswers]= useState([]);


  const quizStartHandler = ()=>{
    setStep(2);
  }
  const resetClickHandler= ()=>{

  }

  return(
    <Router>
    <div className="app">
     <Switch>
       <Route exact path="/">
     <Navbar/>
     <Start onQuizStart={quizStartHandler}/>
     </Route>
     <Route exact path="/Question">
     <Navbar/>
     <Question data ={quizData.data[activeQuestion]}
  onAnswerUpdate={setAnswers}
  numberofQuestions = {quizData.data.length}
  activeQuestion = {activeQuestion}
  onsetActiveQuestion = {setActiveQuestion}
  onSetstep = {setStep}/>}/>
     </Route>
     <Route exact path="/End">
     <Navbar/>
     <End results = {answers} data={quizData.data}
  onReset={resetClickHandler} onAnswersCheck={()=>{}}
  />}
 
 
     </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App