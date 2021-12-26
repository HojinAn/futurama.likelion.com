import { Inventory } from "../../types/Inventory";

interface InventoryProps {
  inventoryData: Inventory;
}

export const InventoryCard = ({ inventoryData }: InventoryProps) => {
  const { title, category, description, slogan, price, stock } = inventoryData;

  return (
    <div>
      <p>{title}</p>
      <p>{category}</p>
      <p>{description}</p>
      <p>{slogan}</p>
      <p>{price}</p>
      <p>{stock}</p>
    </div>
  );
};
