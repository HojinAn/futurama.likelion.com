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
    <div>
      <p>{fullName}</p>
      <img src={main} alt={fullName}></img>
      <p>{gender}</p>
      <p>{species}</p>
      <p>{homePlanet}</p>
      <p>{occupation}</p>
      <p>{age}</p>
      <p>{sayings[Math.floor(Math.random() * sayings.length)]}</p>
    </div>
  );
};
