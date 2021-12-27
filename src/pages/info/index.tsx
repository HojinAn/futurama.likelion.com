import type { NextPage } from "next";
import { InfoContainer } from "../../components";

const InfoPage: NextPage = () => {
  const path = "info";

  return (
    <div>
      <InfoContainer path={path} />
    </div>
  );
};

export default InfoPage;
