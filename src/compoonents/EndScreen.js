import React,{useContext} from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Context';
import '../App.css';


const EndScreen = () => {
    const {score,setScore,setGameState} = useContext(QuizContext);
    
    const restart = ()=>{
    setScore(0);
    setGameState("menu");
}
    return <div className='EndScreen'>
        <h1>Quiz Finished</h1>

        <h3>Score : {score}/{Questions.length}</h3>

        <button className = "button" onClick={restart}>Restart Quiz</button>
    </div>;
}

export default EndScreen;