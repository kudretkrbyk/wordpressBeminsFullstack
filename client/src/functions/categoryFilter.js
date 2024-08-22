export const handleOpenSubCategories = (categoryName, setSubCatFlag) => {
  setSubCatFlag((prevFlag) => ({
    ...prevFlag,
    [categoryName]: !prevFlag[categoryName],
  }));
};

export const handlePriceChange = (newRange, setPriceRange) => {
  setPriceRange(newRange);
};

export const handleColorClick = (color, setSelectedColors) => {
  setSelectedColors((prev) =>
    prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
  );
};

export const handleCategoryClick = (category, setSelectedCategory) => {
  setSelectedCategory(category);
};

export const handleSizeClick = (size, setSelectedSizes) => {
  setSelectedSizes((prev) =>
    prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
  );
};

export const resetFilters = (
  setPriceRange,
  maxPrice,
  setSelectedColors,
  setSelectedSizes,
  setSelectedCategory
) => {
  setPriceRange([0, maxPrice]);
  setSelectedColors([]);
  setSelectedSizes([]);
  setSelectedCategory([]);
};
