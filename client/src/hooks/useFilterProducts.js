import { useEffect } from "react";
import {
  filterProductsByPrice,
  filterProductsByColor,
  filterProductsBySize,
  filterProductsByCategory,
} from "../api/api"; // api.js dosyasından import et

const useFilterProducts = (
  productList,
  selectedCategory,
  priceRange,
  selectedColors,
  selectedSizes,
  setFilteredProducts
) => {
  useEffect(() => {
    let filtered = productList;

    // Hiçbir filtre seçilmemişse tüm ürünleri döndür
    if (
      (priceRange === null || (priceRange[0] === 0 && priceRange[1] === 0)) &&
      (selectedColors === null || selectedColors.length === 0) &&
      (selectedSizes === null || selectedSizes.length === 0) &&
      (selectedCategory === null || selectedCategory.length === 0)
    ) {
      setFilteredProducts(productList);
      return;
    }

    // Filtreler uygulanacak
    if (priceRange !== null) {
      filtered = filterProductsByPrice(filtered, priceRange);
    }
    if (selectedColors !== null && selectedColors.length > 0) {
      filtered = filterProductsByColor(filtered, selectedColors);
    }
    if (selectedSizes !== null && selectedSizes.length > 0) {
      filtered = filterProductsBySize(filtered, selectedSizes);
    }
    if (selectedCategory !== null && selectedCategory.length > 0) {
      filtered = filterProductsByCategory(filtered, selectedCategory);
    }

    setFilteredProducts(filtered);
  }, [
    priceRange,
    productList,
    selectedColors,
    selectedSizes,
    selectedCategory,
    setFilteredProducts,
  ]);
};

export default useFilterProducts;
