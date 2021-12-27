import type { NextPage } from "next";
import { QuestionsContainer } from "../../components";

const QuestionsPage: NextPage = () => {
  const path = "questions";

  return (
    <div>
      <QuestionsContainer path={path} />
    </div>
  );
};

export default QuestionsPage;
