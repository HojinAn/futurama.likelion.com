import { Error, Loading } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { CharactersCard } from "./CharactersCard";
import { Characters } from "../../types/Characters";

interface FuturamaProps {
  path: string;
}

export const CharactersContainer = ({ path }: FuturamaProps) => {
  const { data, error } = useFuturamaData(path);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>{path}</h1>
      <main>
        {data.map((charactersData: Characters) => {
          return (
            <CharactersCard
              key={`${path}-list-${charactersData.id}`}
              charactersData={charactersData}
            />
          );
        })}
      </main>
    </div>
  );
};
