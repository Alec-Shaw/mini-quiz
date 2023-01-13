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
      <form>
        <div>
          <input
            type="radio"
            id="Choice1"
            name="contact"
            onChange={() => setOtionChosen("D")}
          />
          <label> {Questions[currQuestion].optionD}</label>

          <input
            type="radio"
            id="Choice2"
            name="contact"
            onChange={() => setOtionChosen("B")}
          />
          <label>{Questions[currQuestion].optionB}</label>

          <input
            type="radio"
            id="Choice3"
            name="contact"
            onChange={() => setOtionChosen("A")}
          />
          <label>{Questions[currQuestion].optionA}</label>
          <input
            type="radio"
            id="Choice4"
            name="contact"
            onChange={() => setOtionChosen("C")}
          />
          <label>{Questions[currQuestion].optionC}</label>
        </div>
      </form>
      <div>
        {currQuestion == Questions.length - 1 ? (
          <button onClick={finishQuiz}>Finish Quiz</button>
        ) : (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
