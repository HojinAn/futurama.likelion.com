import { Cast } from "../../types/Cast";

interface CastProps {
  castData: Cast;
}

export const CastCard = ({ castData }: CastProps) => {
  const {
    name,
    born,
    died,
    bio: { text, url },
  } = castData;

  return (
    <div>
      <p>{name}</p>
      <p>{born}</p>
      <p>{died}</p>
      <p>{text}</p>
      <p>{url}</p>
    </div>
  );
};
