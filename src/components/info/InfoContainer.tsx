import { Error, Loading } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { InfoCard } from "./InfoCard";
import { Info } from "../../types/Info";
import styled from "@emotion/styled";

interface FuturamaProps {
  path: string;
}

export const InfoContainer = ({ path }: FuturamaProps) => {
  const { data, error } = useFuturamaData(path);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <InfoSection>
      <h2> &gt; {path}</h2>
      <section>
        {data.map((infoData: Info) => {
          return (
            <InfoCard key={`${path}-list-${infoData.id}`} infoData={infoData} />
          );
        })}
      </section>
    </InfoSection>
  );
};

const InfoSection = styled.section`
  padding: 1rem;
`;
