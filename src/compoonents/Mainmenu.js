import React,{useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
import '../App.css';

const Mainmenu = () => {
    const {gameState,setGameState} = useContext(QuizContext);
    return <div className='Menu'>
        <button className='Menu-button' onClick={()=>{setGameState("quiz")}}>Start</button>
    </div>;
}

export default Mainmenu;