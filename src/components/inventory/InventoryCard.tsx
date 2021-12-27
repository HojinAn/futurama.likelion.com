import styled from "@emotion/styled";
import { Inventory } from "../../types/Inventory";

interface InventoryProps {
  inventoryData: Inventory;
}

export const InventoryCard = ({ inventoryData }: InventoryProps) => {
  const { title, category, description, slogan, price, stock } = inventoryData;

  return (
    <InventoryInfo>
      <p>{title}</p>
      <p>{category}</p>
      <p>{description}</p>
      <p>{slogan}</p>
      <p>{price}</p>
      <p>{stock}</p>
    </InventoryInfo>
  );
};

const InventoryInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: flex-start;
  padding: 1em;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 1em;
`;
