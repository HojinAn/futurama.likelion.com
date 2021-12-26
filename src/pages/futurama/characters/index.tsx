import type { NextPage } from "next";
import { CharactersContainer } from "../../../components";

const CharactersPage: NextPage = () => {
  const path = "characters";

  return (
    <div>
      <CharactersContainer path={path} />
    </div>
  );
};

export default CharactersPage;
