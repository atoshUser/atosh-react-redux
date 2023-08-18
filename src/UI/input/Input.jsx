const Input = ({ type = "text", label, state, setState }) => {
  return (
    <div className="form-floating">
      <input
        type={type}
        className="form-control"
        id="floatingInput"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={label}
      />
      <label htmlFor="floatingInput" className="text-black">
        {label}
      </label>
    </div>
  );
};

export default Input;
