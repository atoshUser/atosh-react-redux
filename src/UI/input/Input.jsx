const Input = ({ type = "text", label, state, setState }) => {
  return (
    <div className="form-floating">
      <input
        type={type}
        className="form-control"
        id={`floating${label}`}
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={label}
      />
      <label htmlFor={`floating${label}`} className="text-black">
        {label}
      </label>
    </div>
  );
};

export default Input;
