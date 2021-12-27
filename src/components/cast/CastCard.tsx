import styled from "@emotion/styled";
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
    <CastInfo>
      <Link href={url}>
        <a>
          <p>{name}</p>
          <p>{born}</p>
        </a>
      </Link>
    </CastInfo>
  );
};

const CastInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1em;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 1em;
`;
