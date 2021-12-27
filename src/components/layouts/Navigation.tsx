import styled from "@emotion/styled";
import Link from "next/link";
import { ROUTES } from "../../constants";
import { ROUTE } from "../../types/ROUTE";

export const Navigation = () => {
  return (
    <Header>
      <PageTitle>
        <Link href="/">
          <a>Futurama</a>
        </Link>
      </PageTitle>
      <nav>
        <NavList>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <ListItem key={routeObject.ID}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
              </ListItem>
            );
          })}
        </NavList>
      </nav>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2ac1bc;
  color: #fff;
  font-weight: bold;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  padding: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  font-size: 1rem;
`;

const ListItem = styled.li`
  margin: 1rem;
`;
