import { Questions } from "../../types/Questions";

interface QuestionsProps {
  questionsData: Questions;
}

export const QuestionsCard = ({ questionsData }: QuestionsProps) => {
  const { question, possibleAnswers, corretAnswer } = questionsData;

  return (
    <div>
      <p>{question}</p>
      <p>{possibleAnswers[0]}</p>
      <p>{possibleAnswers[1]}</p>
      <p>{possibleAnswers[2]}</p>
      <p>{possibleAnswers[3]}</p>
      <p>{corretAnswer}</p>
    </div>
  );
};
