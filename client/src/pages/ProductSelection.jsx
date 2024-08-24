import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductSelection = () => {
  const [products, setProducts] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Ürünleri, renkleri ve bedenleri çek
    axios
      .get("http://localhost:5000/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));

    axios
      .get("http://localhost:5000/colors")
      .then((response) => setColors(response.data))
      .catch((error) => console.error("Error fetching colors:", error));

    axios
      .get("http://localhost:5000/sizes")
      .then((response) => setSizes(response.data))
      .catch((error) => console.error("Error fetching sizes:", error));
  }, []);

  const handleSelectionChange = (productId, type, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [productId]: {
        ...prevOptions[productId],
        [type]: value,
      },
    }));
  };
  console.log(colors);

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/updateProductOptions", selectedOptions)
      .then(() => setMessage("Seçimler başarıyla güncellendi!"))
      .catch((error) => setMessage("Güncelleme sırasında hata oluştu."));
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "20px" }}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div>
            <label>Renk: </label>
            <select
              onChange={(e) =>
                handleSelectionChange(product.id, "color", e.target.value)
              }
            >
              <option value="">Renk seçin</option>
              {colors.map((color) => (
                <option key={color.id} value={color.id}>
                  {color.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Beden: </label>
            <select
              onChange={(e) =>
                handleSelectionChange(product.id, "size", e.target.value)
              }
            >
              <option value="">Beden seçin</option>
              {sizes.map((size) => (
                <option key={size.id} value={size.id}>
                  {size.size}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
      <button className="fixed left-80 z-50 top-80" onClick={handleSubmit}>
        Seçimleri Güncelle
      </button>
      {message && <p className="fixed left-80 z-50 top-[400px]">{message}</p>}
    </div>
  );
};

export default ProductSelection;
