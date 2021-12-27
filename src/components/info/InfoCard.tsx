import styled from "@emotion/styled";
import Link from "next/link";
import { Info } from "../../types/Info";
import { Creator } from "../../types/Info/Creator";

interface InfoProps {
  infoData: Info;
}

export const InfoCard = ({ infoData }: InfoProps) => {
  const { yearsAired, synopsis, creators } = infoData;

  return (
    <InfoCards>
      <SynopsisHeading>Synopsis</SynopsisHeading>
      <Synopsis>{synopsis}</Synopsis>
      <Aired>{yearsAired}</Aired>
      <Creators>Creators</Creators>
      <CreatorList>
        {creators.map(({ name, url }: Creator) => {
          return (
            <li key={name}>
              <Link href={url}>
                <a>{name}</a>
              </Link>
            </li>
          );
        })}
      </CreatorList>
    </InfoCards>
  );
};

const InfoCards = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1em;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 1em;
  line-height: 1.5rem;
  margin: 1rem auto;
`;

const SynopsisHeading = styled.h3`
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
`;

const Synopsis = styled.p`
  font-size: 1.2rem;
`;

const Aired = styled.div`
  margin-top: 1rem;
`;

const Creators = styled.strong`
  margin-top: 2rem;
  font-size: 1.5rem;
`;

const CreatorList = styled.ul`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
