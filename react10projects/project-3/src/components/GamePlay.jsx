import styled from "styled-components";
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice";
import { useState } from "react"
import { Button, OutlineButton } from "../styled/button";
import Rules from "./Rules";


const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [CurrentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);



  // creat randon number function
  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  }

  //  number showcase in dice rotation
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number")
      return
    };

    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice((prev) => randomNumber)

    // check

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber)
    } else {
      setScore((prev) => prev - 2)
    }

    setSelectedNumber(undefined)
  };

  // resetscore on clicking reset button
  const resetScore = () => {
    setScore(0);

  };

 


  return (
    <MainContainer>
      <div className="top_Section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError} />
      </div>
      <RoleDice CurrentDice={CurrentDice}
        roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={()=>setShowRules((prev)=>!prev)}>
        {showRules ? "Hide" : "Show"} 
        Rules</Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
  
  padding-top: 70px;

  .top_Section{
    display: flex;
    justify-content: space-around;
    align-items:end;
  }

  .btns{
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`
