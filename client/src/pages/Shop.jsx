import { useEffect, useState } from "react";
import axios from "axios";

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

  useEffect(() => {
    if (colorsList.length > 0) {
      console.log(colorsList);
      // PUT isteğini gönder
      axios
        .put("http://localhost:5000/api/colors", colorsList)
        .then((response) => {
          console.log("Renkler başarıyla güncellendi:", response.data);
        })
        .catch((error) => {
          console.error(
            "Veri gönderimi sırasında bir hata oluştu:",
            error.response.data
          );
        });
    } else {
      console.error("colorsList dizisi boş, istek gönderilmiyor.");
    }
  }, [colorsList]);
  console.log("ürünler", productList);
  // useEffect(() => {
  //   if (productList.length > 0) {
  //     const filteredProducts = productList.map((item) => ({
  //       name: item.ad,
  //       definition: item.aciklama, // Burayı definition olarak değiştirin
  //       price: item.fiyat,
  //       discount: item.indirim,
  //       discount_date: item.indirimBitis, // Eğer bu alan veritabanında yoksa, kontrol edin
  //       date: item.tarih,
  //       sku: item.SKU,
  //     }));

  //     axios
  //       .post("http://localhost:5000/api/products", filteredProducts)
  //       .then((response) => {
  //         console.log("Veriler başarıyla gönderildi:", response.data);
  //       })
  //       .catch((error) => {
  //         console.error(
  //           "Veri gönderimi sırasında bir hata oluştu:",
  //           error.response.data
  //         ); // Hata mesajını daha ayrıntılı görmek için
  //       });
  //   } else {
  //     console.error("ProductList dizisi boş, istek gönderilmiyor.");
  //   }
  // }, [productList]);
  // useEffect(() => {
  //   if (categories.length > 0) {
  //     console.log(categories);
  //     // Sadece name ve image alanlarını al
  //     // const filteredCategories = categories.map((category) => ({
  //     //   name: category.name,
  //     //   image: category.image,
  //     // }));

  //     axios
  //       .post(
  //         "http://localhost:5000/api/categories-with-subcategories",
  //         categories
  //       )
  //       .then((response) => {
  //         console.log("Veriler başarıyla gönderildi:", response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Veri gönderimi sırasında bir hata oluştu:", error);
  //       });
  //   } else {
  //     console.error("Categories dizisi boş, istek gönderilmiyor.");
  //   }
  // }, [categories]);

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
