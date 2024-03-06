const InputFields = ({initialInvestment, annualInvestment, expectedReturn, duration}) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
        <label htmlFor="">Initial Investment</label>
        <input type="number" value={initialInvestment} required/>
        </p>
        <p>
        <label htmlFor="">Annual Investment</label>
        <input type="number" value={annualInvestment} required/>
        </p>
        <p>
        <label htmlFor="">Expected Return</label>
        <input type="number" value={expectedReturn} required/>
        </p>
        <p>
        <label htmlFor="">Duration</label>
        <input type="number" value={duration} required/>
        </p>
      </div>
    </section>
  );
};

export default InputFields;
