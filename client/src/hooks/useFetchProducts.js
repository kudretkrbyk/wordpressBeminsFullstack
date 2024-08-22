import { useEffect, useState } from "react";
import { fetchProducts } from "../api/api";

const useFetchProducts = () => {
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [colorsList, setColorsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colorCount, setColorCount] = useState({});
  const [sizeCount, setSizeCount] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000); // Maksimum fiyatı takip et
  const [priceRange, setPriceRange] = useState([0, 1000]); // Fiyat aralığı için state

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProductList(data.product);
        setFilteredProducts(data.product); // Filtrelenmiş ürünleri de başlangıçta tüm ürünler olarak ayarla
        setCategories(data.categories);

        updateColorsAndSizes(data.product);
        updateMaxPrice(data.product);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  useEffect(() => {
    // filteredProducts her değiştiğinde renk ve boyut listelerini güncelle
    updateColorsAndSizes(filteredProducts);
  }, [filteredProducts]);

  const updateColorsAndSizes = (products) => {
    const colors = products.flatMap((product) => product.colors);
    const sizes = products.flatMap((product) => product.size);

    setColorsList([...new Set(colors)]);
    setSizeList([...new Set(sizes)]);

    // Color count ve size count objelerini oluşturma
    const colorCount = products.reduce((count, product) => {
      product.colors.forEach((color) => {
        count[color] = (count[color] || 0) + 1;
      });
      return count;
    }, {});

    const sizeCount = products.reduce((count, product) => {
      product.size.forEach((size) => {
        count[size] = (count[size] || 0) + 1;
      });
      return count;
    }, {});

    setColorCount(colorCount);
    setSizeCount(sizeCount);
  };

  const updateMaxPrice = (products) => {
    // Maksimum fiyatı bulma
    const maxPrice = Math.max(...products.map((product) => product.fiyat));
    setMaxPrice(maxPrice);
    setPriceRange([0, maxPrice]);
  };

  return {
    productList,
    filteredProducts,
    colorsList,
    categories,
    colorCount,
    sizeCount,
    sizeList,
    maxPrice,
    priceRange,
    setFilteredProducts,
    setPriceRange,
  };
};

export default useFetchProducts;
