import React,{useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
const Quiz = () => {

    const {gameState,setGameState} = useContext(QuizContext);
    return <div><h1>Quiz</h1></div>;
}


export default Quiz;