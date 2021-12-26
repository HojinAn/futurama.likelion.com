import { Error, Loading } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { CastCard } from "./CastCard";
import { Cast } from "../../types/Cast";

interface FuturamaProps {
  path: string;
}

export const CastContainer = ({ path }: FuturamaProps) => {
  const { data, error } = useFuturamaData(path);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>{path}</h1>
      <main>
        {data.map((castData: Cast) => {
          return (
            <CastCard key={`${path}-list-${castData.id}`} castData={castData} />
          );
        })}
      </main>
    </div>
  );
};
