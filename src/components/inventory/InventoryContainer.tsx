import { Error, Loading } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { InventoryCard } from "./InventoryCard";
import { Inventory } from "../../types/Inventory";
import styled from "@emotion/styled";

interface FuturamaProps {
  path: string;
}

export const InventoryContainer = ({ path }: FuturamaProps) => {
  const { data, error } = useFuturamaData(path);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <InventorySection>
      <h2> &gt; {path}</h2>
      <InventoryCardContainer>
        {data.map((inventoryData: Inventory) => {
          return (
            <InventoryCard
              key={`${path}-list-${inventoryData.id}`}
              inventoryData={inventoryData}
            />
          );
        })}
      </InventoryCardContainer>
    </InventorySection>
  );
};

const InventorySection = styled.section`
  margin: 1rem;
`;

const InventoryCardContainer = styled.section`
  display: grid;
  margin: 1rem;
  grid-template-columns: repeat(4, 1fr);
`;
