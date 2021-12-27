import { Error, Loading } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { CharactersCard } from "./CharactersCard";
import { Characters } from "../../types/Characters";
import styled from "@emotion/styled";

interface FuturamaProps {
  path: string;
}

export const CharactersContainer = ({ path }: FuturamaProps) => {
  const { data, error } = useFuturamaData(path);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <CharactersSection>
      <h2> &gt; {path}</h2>
      <CharactersCardContainer>
        {data.map((charactersData: Characters) => {
          return (
            <CharactersCard
              key={`${path}-list-${charactersData.id}`}
              charactersData={charactersData}
            />
          );
        })}
      </CharactersCardContainer>
    </CharactersSection>
  );
};

const CharactersSection = styled.section`
  margin: 1rem;
`;

const CharactersCardContainer = styled.section`
  display: grid;
  margin: 1rem;
  grid-template-columns: repeat(4, 1fr);
`;
