import { calculateInvestmentResults } from "../util/Investment";

const Results = ({ userInput }) => {
  console.log(userInput);
  const results = calculateInvestmentResults(userInput);
  console.log(results)
  return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
    </table>;
};

export default Results;
