import { Creator } from "./Creator";

export interface Info {
  synopsis: string;
  yearsAired: string;
  creators: Array<Creator>;
  id: number;
}
