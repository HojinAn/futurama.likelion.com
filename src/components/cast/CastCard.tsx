import Link from "next/link";
import { Cast } from "../../types/Cast";

interface CastProps {
  castData: Cast;
}

export const CastCard = ({ castData }: CastProps) => {
  const {
    name,
    born,
    bio: { url },
  } = castData;

  return (
    <div>
      <Link href={url}>
        <a>
          <p>{name}</p>
          <p>{born}</p>
        </a>
      </Link>
    </div>
  );
};
