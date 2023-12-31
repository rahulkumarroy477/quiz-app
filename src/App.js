import React,{useState,useContext} from 'react';
import { QuizContext } from './Helpers/Context';
import Mainmenu from './compoonents/Mainmenu';
import Quiz from './compoonents/Quiz';
import EndScreen from './compoonents/EndScreen';
function App() {
  const [gameState,setGameState] = useState("menu");
  const [score,setScore]= useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
        {gameState==="menu" && <Mainmenu/>}
        {gameState==="quiz" && <Quiz/>}
        {gameState==="end" && <EndScreen/>}
      </QuizContext.Provider>

    </div>
  );
}

export default App;
