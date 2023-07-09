import React, { useState, useContext } from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Context';
import '../App.css'

const Quiz = () => {
    const { score, setScore, setGameState } = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState('');
    function nextQuestion() {
        if (optionChosen == Questions[currQuestion].correct) {
            setScore(score + 1);
        }
        // alert(score);
        setCurrQuestion(currQuestion + 1);
    }
    function finishQuiz() {
        if (optionChosen == Questions[currQuestion].correct) {
            setScore(score + 1);
        }
        setGameState("end");
    }
    return (
        <div className='Quiz'>
            <h3>Topic : {Questions[currQuestion].category}</h3>
            <div className="details">
                <h4>Type : {Questions[currQuestion].type}</h4>
                <h4>Difficulty : {Questions[currQuestion].difficulty}</h4>
            </div>
            <h1>{Questions[currQuestion].question}</h1>
            <div className="button-container">
                <button className="button" onClick={() => { setOptionChosen(Questions[currQuestion].incorrect[0]) }}>{Questions[currQuestion].incorrect[0]}</button>
                <button className="button" onClick={() => { setOptionChosen(Questions[currQuestion].incorrect[1]) }}>{Questions[currQuestion].incorrect[1]}</button>
            </div>
            {Questions[currQuestion].type == "multiple" &&
                <div className="button-container">
                    <button className="button" onClick={() => { setOptionChosen(Questions[currQuestion].incorrect[2]) }}>{Questions[currQuestion].incorrect[2]}</button>
                    <button className="button" onClick={() => { setOptionChosen(Questions[currQuestion].incorrect[3]) }}>{Questions[currQuestion].incorrect[3]}</button>
                </div>
            }


            {
                currQuestion == Questions.length - 1 ?
                    <button className='finish-button' onClick={finishQuiz}>Finish Quiz</button> :
                    <button className="button" onClick={nextQuestion}>Next Question</button>
            }

        </div>
    );
};

export default Quiz;
