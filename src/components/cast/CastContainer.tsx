import { Error, Loading } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { CastCard } from "./CastCard";
import { Cast } from "../../types/Cast";
import styled from "@emotion/styled";

interface FuturamaProps {
  path: string;
}

export const CastContainer = ({ path }: FuturamaProps) => {
  const { data, error } = useFuturamaData(path);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <CastSection>
      <h2> &gt; {path}</h2>
      <CastCardContainer>
        {data.map((castData: Cast) => {
          return (
            <CastCard key={`${path}-list-${castData.id}`} castData={castData} />
          );
        })}
      </CastCardContainer>
    </CastSection>
  );
};

const CastSection = styled.section`
  margin: 1rem;
`;

const CastCardContainer = styled.section`
  display: grid;
  margin: 1rem;
  grid-template-columns: repeat(4, 1fr);
`;
