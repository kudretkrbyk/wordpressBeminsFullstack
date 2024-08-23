import useProducts from "../hooks/apiHooks/getProducts";

export default function Products() {
  const { products, loading, error } = useProducts();

  console.log(products);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      burası product
      <div>{/* ürünleri burada göster */}</div>
    </div>
  );
}
