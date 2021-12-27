import { Error, Loading } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { QuestionsCard } from "./QuestionsCard";
import { Questions } from "../../types/Questions";
import styled from "@emotion/styled";

interface FuturamaProps {
  path: string;
}

export const QuestionsContainer = ({ path }: FuturamaProps) => {
  const { data, error } = useFuturamaData(path);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <QuestionsSection>
      <h2> &gt; {path}</h2>
      <QuestionsCardContainer>
        {data.map((questionsData: Questions) => {
          return (
            <QuestionsCard
              key={`${path}-list-${questionsData.id}`}
              questionsData={questionsData}
            />
          );
        })}
      </QuestionsCardContainer>
    </QuestionsSection>
  );
};

const QuestionsSection = styled.section`
  margin: 1rem;
`;

const QuestionsCardContainer = styled.section`
  display: grid;
  margin: 1rem;
  grid-template-columns: repeat(4, 1fr);
`;
