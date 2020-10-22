import React , {useState} from 'react';
import QuestionCard from './components/QuestionCard';

import { fetchQuestions, Difficulty, QuestionState } from './API'; //API Data imported from API.tsx which is fetchin from https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

const TOTAL_QUESTIONS = 10;     // the Constatn 10 Total Numbers in Quiz.
type AnswerObject = {       //We need an object for type of the Answers
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;

}

function App() {
//We will use state Hooks, for each of values within it
//This Quiz will  show :Loading " before staring the quiz."
//It will show responsive behaviour, the data is being loaded from APIs

  const [loading, setLoading ] = useState(false);       //Initaly useState is false, because when we Press the STart Button it will Show Loading.
  const [questions, setQuestions] = useState<QuestionState[]>([]);       //This is the state for the questions array[] <QuestionState> is the type of each quetion
  const [number, setNumber] = useState(0);              //another statehook for number in start it will be 0
  const [userAnswers, setUserAnswers ]= useState<AnswerObject[]>([]);   //this state for the user Answers and in start will be empty array []
  const [score, setScore] = useState(0);                //the score state which maintain the score, in start its 0
  const [gameOver, setGameOver] = useState(true);       //How the Quiz will know the Game is Done or in Progress.//it will be true initially once user start, it will false when all questions finished.
  console.log(questions);
//We will create a conditional Display , The button Start Quiz only show whtn Game over is set to true because Quiz is Completed or user completed all the questions
 //console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

 //userAnswer = {userAnswers ? userAnswers[number] : undefined}
 //If user has selected the answer from array: if user has not selected so its undefined
 //callback will call a checkAnswer function that user selected a correct value or Wrong
 
 
 //Asynchronous function
  const startQuiz = async()=> { 
    setLoading(true);
    setGameOver(false);     // The Quiz in Progress
    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY)   // We create a new constant to get the new question every time.
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);   
    setNumber(0);   
    setLoading(false);                 
  };
  const nextQuestion = async()=> {};
  //checkAnswer function will check if user clicks mouse based on event e: React.MouseEvent on html button element
  //Calculate the score if game is not over or in progress if gameover is false {!gameOVer}
  //If data is loading the show, otherwise not show
  //If game is not loading AND game is not over then show the Question Card.   //other wise is null
  //The next question has multiple logics, if game is not over, Show Next buts, and If not loading, and If userasnswer length +1  (available) {! condition ? true steps : false steps}Terniray operator 
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement> ) => {};      //And this will be an Arrow Function

  return (
    <div className ="App">
     <h1> PIAIC Class 14-15 Quiz App using TypeScript</h1>
      <h1>Quiz </h1>
      <h2>Developed by : Muhammad Javaid Nawab</h2>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
      <button className='start' onClick={startQuiz}>       Begin Quiz
      </button>) :null }
      {!gameOver ? (
      <p className = 'score'> Score: </p> ) :null  }
      {!loading ? (     <p>Loading</p> ) : null }

      
      {!loading && !gameOver ? (
          <QuestionCard
          questionNum = {number + 1 }
          totalQuestions= {TOTAL_QUESTIONS}
          question = {questions[number].question}
          answers = {questions[number].answers}
          userAnswer = {userAnswers ? userAnswers[number] : undefined}
          callback = {checkAnswer}
          
          
          /> ) : null }
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS-1 ?  (
      <button className='next' onClick={nextQuestion}>
        Next</button>  ) : null }
    </div>
  );
}

export default App;
