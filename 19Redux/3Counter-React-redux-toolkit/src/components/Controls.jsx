import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

function Controls() {
  const Dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    Dispatch(counterActions.increment());
    // Dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    Dispatch(counterActions.decrement());
    // Dispatch({ type: "DECREMENT" });
  };
  const handlePrivacyToggle = () => {
    Dispatch(privacyActions.toggle());
  };
  const handleAdd = () => {
    Dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
    
  };
  


  const handleSubstract = () => {
    Dispatch(counterActions.substract(inputElement.current.value));
    inputElement.current.value = "";
  };

  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning px-4"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputElement}
        />
        <button
          type="button"
          className="btn btn-info btn-lg px-4 gap-3"
          onClick={handleAdd}
        >
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger px-4"
          onClick={handleSubstract}
        >
          Substract
        </button>
      </div>
    </div>
  );
}

export default Controls;
