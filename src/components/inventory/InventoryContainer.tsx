import { Error, Loading } from "..";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { InventoryCard } from "./InventoryCard";
import { Inventory } from "../../types/Inventory";

interface FuturamaProps {
  path: string;
}

export const InventoryContainer = ({ path }: FuturamaProps) => {
  const { data, error } = useFuturamaData(path);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>{path}</h1>
      <main>
        {data.map((inventoryData: Inventory) => {
          return (
            <InventoryCard
              key={`${path}-list-${inventoryData.id}`}
              inventoryData={inventoryData}
            />
          );
        })}
      </main>
    </div>
  );
};
