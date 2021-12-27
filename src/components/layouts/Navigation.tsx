import Link from "next/link";
import { ROUTES } from "../../constants";
import { ROUTE } from "../../types/ROUTE";

export const Navigation = () => {
  return (
    <header>
      <h1>
        <Link href="/">
          <a>Futurama</a>
        </Link>
      </h1>
      <nav>
        <ul>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <li key={routeObject.ID}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
