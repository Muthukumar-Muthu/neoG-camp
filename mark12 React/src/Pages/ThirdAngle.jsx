import { useState } from "react";

export const ThirdAngle = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  function generateAngles() {
    const max = 178;
    const min = 1;
    const one = parseInt(getNumber(max, min));
    const two = parseInt(getNumber(max - one, min));
    setFirst(one);
    setSecond(two);
    console.log(180 - one - two);
  }
  function getNumber(max, min) {
    return Math.random() * (max - min) + min;
  }
  function submitHandler(e) {
    e.preventDefault();

    if (isNaN(third)) alert("check input");
    else {
      const a = parseInt(first);
      const b = parseInt(second);
      const c = parseInt(third);
      const sum = a + b + c;
      console.log(sum);
      if (180 === sum) alert("correct");
      else alert("incorrect");
      console.log();
    }
  }
  function clearInput() {
    setThird(0);
  }
  return (
    <div>
      <input type="number" value={first} name="" id="" />
      <input type="number" value={second} name="" id="" />
      <button
        onClick={() => {
          generateAngles();
          clearInput();
        }}
      >
        Generate Angles
      </button>
      <form onSubmit={submitHandler}>
        <input
          type="number"
          name=""
          value={third}
          onChange={(e) => setThird(e.target.value)}
          id=""
        />
        <button type="submit">Submit</button>
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
