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

export default InputFields;
