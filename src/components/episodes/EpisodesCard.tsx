import styled from "@emotion/styled";
import Link from "next/link";
import { Episodes } from "../../types/Episodes";

interface EpisodesProps {
    episodesData: Episodes;
}

export const EpisodesCard = ({ episodesData }: EpisodesProps) => {
    const { number, title, writers, originalAirDate, desc, id } = episodesData;

    return (
        <EpisodesInfo>
            <article>
                <a>
                    <p>Ep. No.{number}</p>
                    <strong>{title}</strong>
                    <p>{writers}</p>
                    <p>{originalAirDate}</p>
                    <Description>{desc}</Description>
                </a>
            </article>
        </EpisodesInfo>
    );
};

const EpisodesInfo = styled.article`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-end;
    padding: 1em;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
    border-radius: 1em;
`;

const Description = styled.p`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-bottom: 3px;
`;
