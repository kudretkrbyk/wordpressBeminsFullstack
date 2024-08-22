import { useEffect, useState } from "react";

import ShopTopMenu from "../components/ShopPageComps/ShopTopMenu";
import useFetchProducts from "../hooks/useFetchProducts";
import useFilterProducts from "../hooks/useFilterProducts";
import ShopPageCategories from "../components/ShopPageComps/ShopPageCategories";
import ShopPageColorList from "../components/ShopPageComps/ShopPageColorList";
import ShopPageFilterSlider from "../components/ShopPageComps/ShopPageFilterSlider";
import ShopPageProductListing from "../components/ShopPageComps/ShopPageProductListing";

import {
  handleOpenSubCategories,
  handlePriceChange,
  handleColorClick,
  handleCategoryClick,
  handleSizeClick,
  resetFilters,
} from "../functions/categoryFilter";

export default function Shop({ categoryNameFilter }) {
  const [selectedColors, setSelectedColors] = useState([]); // Seçilen renkler
  const [selectedSizes, setSelectedSizes] = useState([]); // Seçilen boyutlar
  const [selectedCategory, setSelectedCategory] = useState([]); // Seçilen boyutlar
  const [subCatFlag, setSubCatFlag] = useState({});

  useEffect(() => {
    if (categoryNameFilter) {
      setSelectedCategory(categoryNameFilter);
    }
  }, [categoryNameFilter]);

  const {
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
  } = useFetchProducts();

  useFilterProducts(
    productList,
    selectedCategory,
    priceRange,
    selectedColors,
    selectedSizes,
    setFilteredProducts
  );

  return (
    <div className="w-full flex flex-col relative">
      <ShopTopMenu
        categories={categories}
        handleCategoryClick={(category) =>
          handleCategoryClick(category, setSelectedCategory)
        }
      />
      <div className="w-full flex ">
        <div className="w-3/12 h-full flex flex-col gap-1 px-4 py-1 sticky top-10">
          {/* categori*/}
          <ShopPageCategories
            categories={categories}
            handleCategoryClick={(category) =>
              handleCategoryClick(category, setSelectedCategory)
            }
            handleOpenSubCategories={(categoryName) =>
              handleOpenSubCategories(categoryName, setSubCatFlag)
            }
            subCatFlag={subCatFlag}
          />
          {/* Filter Slider Gelecek */}
          <ShopPageFilterSlider
            handlePriceChange={(newRange) =>
              handlePriceChange(newRange, setPriceRange)
            }
            priceRange={priceRange}
            maxPrice={maxPrice}
          />

          <div className="">
            <div className="font-bold">Color:</div>

            {/*Color List gelecek */}
            <ShopPageColorList
              colorsList={colorsList}
              handleColorClick={(color) =>
                handleColorClick(color, setSelectedColors)
              }
              colorCount={colorCount}
            />
          </div>
          <div className="mt-4">
            <div className="font-bold">Size:</div>
            <div className="grid grid-cols-5 w-full gap-2 ">
              {sizeList.map((size, index) => (
                <div
                  className="flex items-center justify-center border cursor-pointer"
                  key={index}
                  onClick={() => handleSizeClick(size, setSelectedSizes)}
                >
                  {size}({sizeCount[size] || 0})
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() =>
                resetFilters(
                  setPriceRange,
                  maxPrice,
                  setSelectedColors,
                  setSelectedSizes,
                  setSelectedCategory
                )
              }
            >
              Reset Filters
            </button>
          </div>
        </div>
        {/*Ürünler Listelenecek */}
        <ShopPageProductListing filteredProducts={filteredProducts} />
      </div>
    </div>
  );
}
