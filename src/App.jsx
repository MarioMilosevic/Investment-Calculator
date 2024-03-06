import { useState } from "react"
import Header from "./components/Header"
import InputFields from "./components/InputFields"
function App() {
const [initialInvestment, setInitialInvestment] = useState(0)
const [annualInvestment, setAnnualInvestment] = useState(0)
const [expectedReturn, setExpectedReturn] = useState(0)
const [duration, setDuration] = useState(0)  
  return (
    <>
      <Header/>
      <InputFields initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration}/>
    </>
  )
}

export default App
