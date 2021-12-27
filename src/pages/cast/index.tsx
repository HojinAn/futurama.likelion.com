import type { NextPage } from "next";
import { CastContainer } from "../../components";

const CastPage: NextPage = () => {
  const path = "cast";

  return (
    <div>
      <CastContainer path={path} />
    </div>
  );
};

export default CastPage;
