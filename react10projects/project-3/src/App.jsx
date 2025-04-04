import { useState } from "react";
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay";


function App() {
  const [isGameStarted, setIsGamestarted] = useState(false)

  const toggleGamePlay = () => {
    setIsGamestarted((prev) => !prev)

  }
  return (
    <>
      {
        // isGameStarted is true in this case show gameplay page if it is false take us to startgame page
        isGameStarted ? <GamePlay /> :
        <StartGame toggle = {toggleGamePlay} />
      }
      
    </>

  )
}

export default App;
