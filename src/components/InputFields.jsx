import { useState } from "react";

const InputFields = () => {
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [annualInvestment, setAnnualInvestment] = useState(100);
  const [expectedReturn, setExpectedReturn] = useState(10);
  const [duration, setDuration] = useState(5);

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            value={annualInvestment}
            onChange={(e) => setAnnualInvestment(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default InputFields;
