import styled from "@emotion/styled";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <header>
      <PageTitle>
        <div>FUTURAMA</div>
      </PageTitle>
    </header>
  );
};

export default Home;

const PageTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 10rem;
  font-weight: bold;
`;
