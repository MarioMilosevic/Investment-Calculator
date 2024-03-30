import PropTypes from "prop-types";
import { calculateInvestmentResults } from "../util/Investment";
import { formatter } from "../util/Investment";

const Results = ({ userInput }) => {
  const results = calculateInvestmentResults(userInput);
  console.log(results);

  const calculateTotalInterest = (
    valueEndOfYear,
    annualInvestment,
    year,
    initialInvestment
  ) => {
    return valueEndOfYear - annualInvestment * year - initialInvestment;
  };

  return (
    <table id="result">
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
        {results.map((result) => {
          const { valueEndOfYear, annualInvestment, year, initialInvestment } =
            result;
          const totalInterest = calculateTotalInterest(
            valueEndOfYear,
            annualInvestment,
            year,
            initialInvestment
          );
          console.log(
            valueEndOfYear,
            annualInvestment,
            year,
            initialInvestment
          );
          console.log(totalInterest);
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>

              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(valueEndOfYear - totalInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Results.propTypes = {
  userInput: PropTypes.shape({
    initialInvestment: PropTypes.number.isRequired,
    annualInvestment: PropTypes.number.isRequired,
    expectedReturn: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
};

export default Results;
