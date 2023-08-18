import { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
  const { error } = useSelector((state) => state.auth);

  const errorMessage = useCallback(() => {
    return Object.keys(error).map((name) => {
      const msg = error[name].join(", ");
      return `${name} - ${msg}`;
    });
  }, [error]);
  return (
    <ul style={{ listStyle: "none", padding: 0, marginBottom: "5px" }}>
      {error !== null &&
        errorMessage().map((err) => {
          return (
            <li
              className="alert text-center  alert-danger p-1 m-1"
              role="alert"
              key={err}
            >
              {err}
            </li>
          );
        })}
    </ul>
  );
};

export default ValidationError;
