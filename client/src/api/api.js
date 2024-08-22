// src/api.js

export async function fetchProducts() {
  try {
    const response = await fetch("/src/data/products.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

// Fiyat aralığına göre ürünleri filtrele
export function filterProductsByPrice(products, priceRange) {
  return products.filter(
    (product) =>
      product.fiyat >= priceRange[0] && product.fiyat <= priceRange[1]
  );
}

// Kategoriye göre ürünleri filtrele
export function filterProductsByCategory(products, category) {
  console.log("api cat", category);
  return products.filter((product) => product.kategori === category);
}

// Renklere göre ürünleri filtrele
export function filterProductsByColor(products, selectedColors) {
  console.log("api sc", selectedColors);
  return products.filter((product) =>
    selectedColors.every((color) => product.colors.includes(color))
  );
}

// Bedenlere göre ürünleri filtrele
export function filterProductsBySize(products, selectedSizes) {
  return products.filter((product) =>
    selectedSizes.every((size) => product.size.includes(size))
  );
}
