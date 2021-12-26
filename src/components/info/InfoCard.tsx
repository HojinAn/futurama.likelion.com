import { Info } from "../../types/Info";
import { Creator } from "../../types/Info/Creator";

interface InfoProps {
  infoData: Info;
}

export const InfoCard = ({ infoData }: InfoProps) => {
  const { yearsAired, synopsis, creators } = infoData;

  return (
    <div>
      <p>{yearsAired}</p>
      <p>{synopsis}</p>
      {creators.map(({ name, url }: Creator) => {
        return (
          <div key={name}>
            <p>{name}</p>
            <p>{url}</p>
          </div>
        );
      })}
    </div>
  );
};
