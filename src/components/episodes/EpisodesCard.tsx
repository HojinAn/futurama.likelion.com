import { Episodes } from "../../types/Episodes";

interface EpisodesProps {
  episodesData: Episodes;
}

export const EpisodesCard = ({ episodesData }: EpisodesProps) => {
  const { number, title, writers, originalAirDate, desc } = episodesData;

  return (
    <div>
      <p>{number}</p>
      <p>{title}</p>
      <p>{writers}</p>
      <p>{originalAirDate}</p>
      <p>{desc}</p>
    </div>
  );
};
