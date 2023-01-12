import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/Questions";

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div>
      <h1>Quiz Finished</h1>
      <h3>
        {score}/{Questions.length}
      </h3>
      <button onClick={restartQuiz}>Restart</button>
    </div>
  );
};

export default EndScreen;
