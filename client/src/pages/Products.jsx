import useProducts from "../hooks/apiHooks/getProducts";
import useCategories from "../hooks/apiHooks/getCategories";

export default function Products() {
  const { products, loading, error } = useProducts();
  const { categories, loadingc, errorc } = useCategories();

  console.log("cat", categories);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      burası product
      <div>{/* ürünleri burada göster */}</div>
    </div>
  );
}
