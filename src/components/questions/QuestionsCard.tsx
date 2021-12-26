import { Questions } from "../../types/Questions";

interface QuestionsProps {
  questionsData: Questions;
}

export const QuestionsCard = ({ questionsData }: QuestionsProps) => {
  const { question, possibleAnswers, corretAnswer } = questionsData;

  return (
    <div>
      <p>{question}</p>
      <p>{corretAnswer}</p>
    </div>
  );
};
