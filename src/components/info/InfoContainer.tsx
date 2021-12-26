import { Error, Loading } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { InfoCard } from "./InfoCard";
import { Info } from "../../types/Info";

interface FuturamaProps {
  path: string;
}

export const InfoContainer = ({ path }: FuturamaProps) => {
  const { data, error } = useFuturamaData(path);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>{path}</h1>
      <main>
        {data.map((infoData: Info) => {
          return (
            <InfoCard key={`${path}-list-${infoData.id}`} infoData={infoData} />
          );
        })}
      </main>
    </div>
  );
};
