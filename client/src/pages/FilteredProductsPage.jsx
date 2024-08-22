import Shop from "./Shop";
import { useLocation } from "react-router-dom";

export default function FilteredProductsPage() {
  const location = useLocation();
  const categoryNameFilter = location.pathname.split("/")[2];
  console.log("location fpp", location.pathname.split("/")[2]);
  return (
    <div>
      <Shop categoryNameFilter={categoryNameFilter}></Shop>
    </div>
  );
}
