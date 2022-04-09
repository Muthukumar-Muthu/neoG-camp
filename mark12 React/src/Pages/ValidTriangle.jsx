import { useState } from "react";
export const ValidTriangle = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const submitHandler = (e) => {
    e.preventDefault();
    if (checkInput(first, second, third)) {
      alert("redo inputs");
    } else {
      const sum = parseFloat(first) + parseFloat(second) + parseFloat(third);
      if (sum === 180) alert("valid Triangle");
      else alert("invalid triangle");
    }
  };
  const checkInput = (...number) => {
    number.forEach((num) => {
      if (isNaN(num)) {
        return false;
      }
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="number"
          value={first}
          onChange={(e) => {
            setFirst(e.target.value);
          }}
        />
        <input
          type="number"
          value={second}
          onChange={(e) => {
            setSecond(e.target.value);
          }}
        />
        <input
          type="number"
          value={third}
          onChange={(e) => {
            setThird(e.target.value);
          }}
        />
        <button type="submit">Check</button>
        <button
          type="reset"
          onClick={() => {
            setFirst(0);
            setSecond(0);
            setThird(0);
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
};
