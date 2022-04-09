import { useState } from "react";

export const Area = () => {
  const [height, setHeight] = useState(0);
  const [base, setBase] = useState(0);
  function submitHandler(e) {
    e.preventDefault();
    if (!checkInput(height, base)) {
      alert("check inputs");
    } else {
      const area = ((height * base) / 2).toFixed(2);
      alert(area);
    }
  }
  function checkInput(...inputs) {
    return inputs.every((input) => !isNaN(input));
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="number"
          placeholder="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          name=""
          id=""
        />
        <input
          type="number"
          placeholder="base"
          value={base}
          onChange={(e) => {
            setBase(e.target.value);
          }}
          name=""
          id=""
        />
        <button type="submit">get area</button>
        <button
          type="reset"
          onClick={() => {
            setHeight(0);
            setBase(0);
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
};
