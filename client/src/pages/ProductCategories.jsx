import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductCategories() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [selectedSubcategory, setSelectedSubcategory] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/fullProducts")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));

    axios
      .get("http://localhost:5000/categories")
      .then((response) => setCategories(response.data))

      .catch((error) => console.error("Error fetching categories:", error));
    console.log("cat", categories);
    axios
      .get("http://localhost:5000/subcategories")
      .then((response) => setSubcategories(response.data))
      .catch((error) => console.error("Error fetching subcategories:", error));
  }, []);

  const handleCategoryChange = (productId, categoryId) => {
    setSelectedCategory((prevState) => ({
      ...prevState,
      [productId]: categoryId,
    }));
  };

  const handleSubcategoryChange = (productId, subcategoryId) => {
    setSelectedSubcategory((prevState) => ({
      ...prevState,
      [productId]: subcategoryId,
    }));
  };

  const handleSubmit = (productId) => {
    axios
      .post("http://localhost:5000/updateProductCategories", {
        productId,
        categoryId: selectedCategory[productId],
        subcategoryId: selectedSubcategory[productId],
      })
      .then(() =>
        alert("Kategori ve Alt Kategori Eşleştirmesi Başarıyla Güncellendi.")
      )
      .catch((error) =>
        console.error("Error updating product categories:", error)
      );
  };
  console.log("products", products);
  return (
    <div>
      <h2>Ürün Kategorileri</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <select
            value={selectedCategory[product.id] || ""}
            onChange={(e) => handleCategoryChange(product.id, e.target.value)}
          >
            <option value="">Kategori Seçin</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <select
            value={selectedSubcategory[product.id] || ""}
            onChange={(e) =>
              handleSubcategoryChange(product.id, e.target.value)
            }
          >
            <option value="">Alt Kategori Seçin</option>
            {subcategories
              .filter((sub) => sub.parent_id === selectedCategory[product.id])
              .map((subcategory) => (
                <option key={subcategory.id} value={subcategory.id}>
                  {subcategory.name}
                </option>
              ))}
          </select>

          <button onClick={() => handleSubmit(product.id)}>
            Eşleştirmeyi Kaydet
          </button>
        </div>
      ))}
    </div>
  );
}
