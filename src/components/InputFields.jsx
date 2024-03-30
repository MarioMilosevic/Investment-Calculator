import PropTypes from "prop-types";

const InputFields = ({
  initialInvestment,
  initialInvestmentHandler,
  annualInvestment,
  annualInvestmentHandler,
  expectedReturn,
  expectedReturnHandler,
  duration,
  durationHandler,
}) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={initialInvestmentHandler}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={annualInvestment}
            onChange={annualInvestmentHandler}
            required
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={expectedReturn}
            onChange={expectedReturnHandler}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={duration}
            onChange={durationHandler}
            required
          />
        </p>
      </div>
    </section>
  );
};

InputFields.propTypes = {
  initialInvestment: PropTypes.number.isRequired,
  initialInvestmentHandler: PropTypes.func.isRequired,
  annualInvestment: PropTypes.number.isRequired,
  annualInvestmentHandler: PropTypes.func.isRequired,
  expectedReturn: PropTypes.number.isRequired,
  expectedReturnHandler: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  durationHandler: PropTypes.func.isRequired,
};

export default InputFields;
