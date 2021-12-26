import { Error, Loading } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { EpisodesCard } from "./EpisodesCard";
import { Episodes } from "../../types/Episodes";

interface FuturamaProps {
  path: string;
}

export const EpisodesContainer = ({ path }: FuturamaProps) => {
  const { data, error } = useFuturamaData(path);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>{path}</h1>
      <main>
        {data.map((episodesData: Episodes) => {
          return (
            <EpisodesCard
              key={`${path}-list-${episodesData.id}`}
              episodesData={episodesData}
            />
          );
        })}
      </main>
    </div>
  );
};
