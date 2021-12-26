import type { NextPage } from "next";
import { useFuturamaData } from "../../../hooks/useFuturamaData";
import { Info } from "../../../types/Info";

const InfoPage: NextPage = () => {
  const path = "info";
  const { data, error } = useFuturamaData(path);

  if (error) return <div>Failed to Loading...</div>;
  if (!data) return <div>...Loading</div>;

  return (
    <div>
      <h1>Info</h1>
      <main>
        {data.map((infoData: Info) => {
          const { id, synopsis, yearsAired } = infoData;

          return (
            <div key={`${path}-list-${id}`}>
              <p>{synopsis}</p>
              <p>{yearsAired}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default InfoPage;
