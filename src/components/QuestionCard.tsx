import React from 'react'

//Declare the Types of the properties
// 4 question at a time will show so we will define an arrya
// we will use call back

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any; //useranser will be any type, it was first string
    questionNum: number;
    totalQuestions:number;
//React.FC<Props> is a React Functional Components taking parameters of above data defined
//And we destructure our props in =()
}
//Now we can use destructred props in our Question Card Components
//We will map all questions with ApI
//dangerouslySetInnerHTML will allow us to set the value of this Paragraph Element
//<p __html
//then within the div we will map the answers.map ( and for each answer we call a function -> {})
//and withing the div of answers we have a button which will callback
//this button will be disabled after userAnswered.




export const QuestionCard : React.FC<Props>  = ({question, answers, callback, userAnswer, questionNum, totalQuestions}) => {
    return (
        <div>
            <p>
                Question : {questionNum} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML ={{ __html: question} } />
            <div>
                {answers.map(answer =>(
                    <div>
                        <button disabled = {userAnswer} onClick = {callback}>
                            <span dangerouslySetInnerHTML = {{ __html: answer }} />



                        </button>

                    </div>


                ))}

            </div>



        </div>
    )
}
export default QuestionCard;
