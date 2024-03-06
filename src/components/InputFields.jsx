const InputFields = () => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
        <label htmlFor="">Initial Investment</label>
        <input type="number" required/>
        </p>
        <p>
        <label htmlFor="">Annual Investment</label>
        <input type="number" required/>
        </p>
        <p>
        <label htmlFor="">Expected Return</label>
        <input type="number" required/>
        </p>
        <p>
        <label htmlFor="">Duration</label>
        <input type="number" required/>
        </p>
      </div>
    </section>
  );
};

export default InputFields;