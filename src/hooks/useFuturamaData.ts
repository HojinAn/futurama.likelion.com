import useSWR from "swr";
import { FUTURAMA_API_ENDPOINT } from "../constants";
import { fetcher } from "../utils/fetcher";

export const useFuturamaData = (path: string) => {
  return useSWR(`${FUTURAMA_API_ENDPOINT}${path}`, fetcher);
};
