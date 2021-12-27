import styled from "@emotion/styled";
import Image from "next/image";
import { Characters } from "../../types/Characters";

interface CharactersProps {
  charactersData: Characters;
}

export const CharactersCard = ({ charactersData }: CharactersProps) => {
  const {
    name: { first, middle, last },
    images: { main },
    gender,
    species,
    homePlanet,
    occupation,
    sayings,
    age,
  } = charactersData;

  const fullName = `${first} ${middle} ${last}`;

  return (
    <CharacterInfo>
      <p>{fullName}</p>
      <img src={main} alt={fullName}></img>
      <p>{gender}</p>
      <p>{species}</p>
      <p>{homePlanet}</p>
      <p>{occupation}</p>
      <p>{age}</p>
      <p>{sayings[Math.floor(Math.random() * sayings.length)]}</p>
    </CharacterInfo>
  );
};

const CharacterInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1em;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 1em;
`;
