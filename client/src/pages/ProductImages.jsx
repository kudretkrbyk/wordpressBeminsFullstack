import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductImages() {
  const [products, setProducts] = useState([]);
  const [imageUrls, setImageUrls] = useState({});
  console.log("full pro", products);

  useEffect(() => {
    axios
      .get("http://localhost:5000/fullProducts")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleImageChange = (productId, index, url) => {
    setImageUrls((prevState) => ({
      ...prevState,
      [productId]: {
        ...prevState[productId],
        [index]: url,
      },
    }));
  };

  const handleSubmit = (productId) => {
    const urls = Object.values(imageUrls[productId] || {});
    axios
      .post("http://localhost:5000/updateProductImages", {
        productId,
        imageUrls: urls,
      })
      .then(() => alert("Fotoğraflar başarıyla eklendi."))
      .catch((error) => console.error("Error updating product images:", error));
  };

  return (
    <div>
      <h2>Ürün Fotoğrafları</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          {[...Array(4)].map((_, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Fotoğraf ${index + 1} URL`}
              value={imageUrls[product.id]?.[index] || ""}
              onChange={(e) =>
                handleImageChange(product.id, index, e.target.value)
              }
            />
          ))}
          <button onClick={() => handleSubmit(product.id)}>
            Fotoğrafları Kaydet
          </button>
        </div>
      ))}
    </div>
  );
}
