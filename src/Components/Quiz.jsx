import { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/Questions";

const Quiz = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOtionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div>
        <button onClick={() => setOtionChosen("A")}>
          {Questions[currQuestion].optionA}
        </button>
        <button onClick={() => setOtionChosen("B")}>
          {Questions[currQuestion].optionB}
        </button>
        <button onClick={() => setOtionChosen("C")}>
          {Questions[currQuestion].optionC}
        </button>
        <button onClick={() => setOtionChosen("D")}>
          {Questions[currQuestion].optionD}
        </button>
      </div>
      {currQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
};

export default Quiz;
