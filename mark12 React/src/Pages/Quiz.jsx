import { useState } from "react";

export const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "This type of triangle has one 90 degree angle.",
      answer: "right",
      option: ["acute", "obtuse"],
      selected: "",
      id: 1,
    },

    {
      question:
        "A ________ triangle is one where all 3 angles measure less than 90 degrees.",
      answer: "acute",
      option: ["right", "obtuse"],
      selected: "",
      id: 2,
    },
    {
      question: "Which of the following triangles are always similar?",
      answer: "Equilateral triangle",
      option: ["Obtuse triangle", "Right triangle", "Isoceles triangle"],
      selected: "",
      id: 3,
    },
  ]);
  console.log(questions);
  function setSelected(id, ans) {
    console.log(id, ans);
    setQuestions((p) => {
      return p.map((q) => {
        if (q.id == id) {
          return {
            ...q,
            selected: ans,
          };
        } else return p;
      });
    });
  }
  return (
    <div>
      {questions.map((q) => (
        <Question
          question={q.question}
          key={q.id}
          id={q.id}
          answer={q.answer}
          option={q.option}
          selected={q.selected}
          setQuestions={setSelected}
        />
      ))}
    </div>
  );
};

function Question({ question, answer, option, id, selected, setQuestions }) {
  let c = "" + id;
  console.log(option);
  const choices = [...option, answer].sort();
  return (
    <div>
      <p>{question}</p>
      <>
        {choices.map((choice) => {
          c = c + 1;
          return (
            <>
              <label htmlFor={c}>{choice}</label>
              <input
                type="radio"
                name={id}
                selected={selected.toLowerCase() === choice.toLowerCase()}
                onClick={() => {
                  setQuestions(id, choice);
                }}
                id={c}
              />
            </>
          );
        })}
      </>
    </div>
  );
}
