import { Error, Loading } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { QuestionsCard } from "./QuestionsCard";
import { Questions } from "../../types/Questions";

interface FuturamaProps {
  path: string;
}

export const QuestionsContainer = ({ path }: FuturamaProps) => {
  const { data, error } = useFuturamaData(path);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>{path}</h1>
      <main>
        {data.map((questionsData: Questions) => {
          return (
            <QuestionsCard
              key={`${path}-list-${questionsData.id}`}
              questionsData={questionsData}
            />
          );
        })}
      </main>
    </div>
  );
};
