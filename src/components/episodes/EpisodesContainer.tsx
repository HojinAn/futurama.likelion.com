import { Error, Loading } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { EpisodesCard } from "./EpisodesCard";
import { Episodes } from "../../types/Episodes";
import styled from "@emotion/styled";

interface FuturamaProps {
  path: string;
}

export const EpisodesContainer = ({ path }: FuturamaProps) => {
  const { data, error } = useFuturamaData(path);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <EpisodesSection>
      <h2> &gt; {path}</h2>
      <EpisodesCardContainer>
        {data.map((episodesData: Episodes) => {
          return (
            <EpisodesCard
              key={`${path}-list-${episodesData.id}`}
              episodesData={episodesData}
            />
          );
        })}
      </EpisodesCardContainer>
    </EpisodesSection>
  );
};

const EpisodesSection = styled.section`
  margin: 1rem;
`;

const EpisodesCardContainer = styled.section`
  display: grid;
  margin: 1rem;
  grid-template-columns: repeat(4, 1fr);
`;
