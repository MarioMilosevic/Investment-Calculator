import { useState } from "react";
import Header from "./components/Header";
import InputFields from "./components/InputFields";
import Results from "./components/Results";
function App() {
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [annualInvestment, setAnnualInvestment] = useState(100);
  const [expectedReturn, setExpectedReturn] = useState(10);
  const [duration, setDuration] = useState(5);

  const userInput = {
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  };

  const isValid = userInput.duration >= 1 ? true : false;

  return (
    <>
      <Header />
      <InputFields
        initialInvestment={initialInvestment}
        initialInvestmentHandler={(e) => setInitialInvestment(+e.target.value)}
        annualInvestment={annualInvestment}
        annualInvestmentHandler={(e) => setAnnualInvestment(+e.target.value)}
        expectedReturn={expectedReturn}
        expectedReturnHandler={(e) => setExpectedReturn(+e.target.value)}
        duration={duration}
        durationHandler={(e) => setDuration(+e.target.value)}
      />
      {isValid && <Results userInput={userInput} />}
      {!isValid && <p className="center">Duration must be greater than 0</p> }
    </>
  );
}

export default App;
