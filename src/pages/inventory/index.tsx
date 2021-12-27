import type { NextPage } from "next";
import { InventoryContainer } from "../../components";

const InventoryPage: NextPage = () => {
  const path = "inventory";

  return (
    <div>
      <InventoryContainer path={path} />
    </div>
  );
};

export default InventoryPage;
