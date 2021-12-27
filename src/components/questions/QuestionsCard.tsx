import styled from "@emotion/styled";
import { Questions } from "../../types/Questions";

interface QuestionsProps {
  questionsData: Questions;
}

export const QuestionsCard = ({ questionsData }: QuestionsProps) => {
  const { question, possibleAnswers, correctAnswer } = questionsData;

  return (
    <QuestionInfo>
      <p>{question}</p>
      {possibleAnswers.map((answer: string, index: number) => {
        return (
          <p key={answer}>
            {index + 1}. {answer}
          </p>
        );
      })}
      <div>{correctAnswer}</div>
    </QuestionInfo>
  );
};

const QuestionInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: flex-start;
  padding: 1em;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 1em;
`;
