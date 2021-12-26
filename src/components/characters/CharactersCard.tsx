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

  return (
    <div>
      <p>
        {first}
        {middle}
        {last}
      </p>
      <p>
        {"head-shot"}
        {main}
      </p>
      <p>{gender}</p>
      <p>{species}</p>
      <p>{homePlanet}</p>
      <p>{occupation}</p>
      <p>{age}</p>
    </div>
  );
};
