import { useState } from "react";
import Calculator from "./components/Calculator"
import Header from "./components/Header"
import Result from "./components/Result"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1500,
    expectedReturn: 5,
    duration: 10,
  });

  const durationIsValid = userInput.duration >= 1

  function handleUserInput(inputKey, newValue) {
    setUserInput((existtingUserInput) => {
      return {
        ...existtingUserInput,
        [inputKey]: +newValue,
      };
    });
  }

  return (   
    <div>
      <Header/>
      <Calculator onChangeProps={handleUserInput} userInput={userInput}/>
      {durationIsValid ? 
        <Result resultUserInput={userInput} />
        : <p>Durasi harus lebih dari 0</p>
      }
    </div>
  )
}

export default App
