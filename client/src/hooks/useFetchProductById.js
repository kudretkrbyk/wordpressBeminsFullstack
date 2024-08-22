import { useState, useEffect } from "react";
import { fetchProducts } from "../api/api";

const useFetchProductById = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const data = await fetchProducts();

        // Ürün listesinden verilen ID'ye sahip ürünü bul
        const foundProduct = data.product.find(
          (product) => product.id.toString() === productId.toString()
        );
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError(new Error("Product not found"));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProductById();
    }
  }, [productId]);

  return { product, loading, error };
};

export default useFetchProductById;
