import { useState } from "react";
export const Hypotenuse = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  function submitHandler(e) {
    e.preventDefault();
    const hypo = getHypo(first, second);
    alert(`${hypo} - hypotenuse`);
  }
  function getHypo(a, b) {
    if (!checkInput(a, b)) {
      alert("check input");
    } else {
      //a = sqrt(b2 + c2)
      const a2 = Math.pow(a, 2);
      const b2 = Math.pow(b, 2);
      const hypo = Math.sqrt(a2 + b2);
      return parseFloat(hypo.toFixed(2));
    }
  }
  function checkInput(...n) {
    return n.every((num) => !isNaN(num));
  }
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
        <button type="submit">Get</button>
        <button
          type="reset"
          onClick={() => {
            setFirst(0);
            setSecond(0);
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
};
