import { Name } from "./Name";
import { Images } from "./Images";

export interface Characters {
  name: Name;
  images: Images;
  gender: string;
  species: string;
  homePlanet: string;
  occupation: string;
  sayings: Array<string>;
  id: number;
  age: string;
}
