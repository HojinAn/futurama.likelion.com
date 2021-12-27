import type { NextPage } from "next";
import { EpisodesContainer } from "../../components";

const EpisodesPage: NextPage = () => {
  const path = "episodes";

  return (
    <div>
      <EpisodesContainer path={path} />
    </div>
  );
};

export default EpisodesPage;
