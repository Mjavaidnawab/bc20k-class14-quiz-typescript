import { shuffleArray } from './utilities'
//We want to fetch data from our API using async function
//amount is total number of question, and dificulty is enum

//back tick marks `` are down to escape button
//we use ${} dynamicall values to api after & sign, the different parameters
    export const fetchQuestions = async (amount: number, difficulty: Difficulty) =>{
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    //now we have enum and fetch questions and we want to store inside of our fetch questions ./
    //we will save data into const data from fetch api
    const data = await(await fetch(endpoint)).json();
//We will return the JSON data into this format and map
//Inside data.results.map((for each question))

        //we want to retuan JSON data object
        //...get every thing from questions ...questions, and answers
        //And we will shuffle the questions we will create Another Function in utilities /because date returned will be first answer as correct, so user will select correct answers
        //These ... are spread operators and this is creating the new array
return data.results.map((question: Question) => (
    {   
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer ])
    }

    ))
};

export enum Difficulty{
    EASY = "easy",
    MEDIUM ="medium",
    HARD = "hard"
};

// We will export the type of the qustions, we inspecte the data by console.log(data) and from object returned we copied categoty, ans, corr, incor ans etc.
export type Question ={
    category: string;
    correct_answer: string;
    dificulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;

};

//We need a UI to show Questions, Answers, Correct and Wrong 
//We will combine all correct answers, incorrect answers and store into an array to one object and property inside it 
export type QuestionState = Question & { answers: string[]};


