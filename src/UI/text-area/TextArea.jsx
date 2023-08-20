import React from "react";

const TextArea = (prop) => {
  const { label, state, setState, row = "3" } = prop;
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        {label}
      </label>
      <textarea
        className="form-control"
        value={state}
        onChange={(e) => setState(e.target.value)}
        id="exampleFormControlTextarea1"
        rows={row}
      ></textarea>
    </div>
  );
};

export default TextArea;
