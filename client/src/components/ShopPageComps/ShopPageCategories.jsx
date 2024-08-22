import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";
export default function ShopPageCategories({
  categories,
  handleCategoryClick,
  handleOpenSubCategories,
  subCatFlag,
}) {
  return (
    <div className="">
      <div className="font-bold flex flex-col  ">Categories</div>
      {categories.map((category, index) => (
        <div className="flex flex-col  mt-2" key={index}>
          <div className="flex  items-center justify-between gap-2 hover:text-[#54d9e1] duration-300 hover:cursor-pointer">
            <div onClick={() => handleCategoryClick(category.name)}>
              {category.name}
            </div>
            {category.subcategories.length > 0 && (
              <div className="">
                <IoIosArrowDown
                  onClick={() => handleOpenSubCategories(category.name)}
                />
              </div>
            )}
          </div>
          {subCatFlag[category.name] && (
            <div className="flex flex-col gap-2 ml-4 hover:cursor-pointer">
              {category.subcategories.map((sub, subIndex) => (
                <div
                  className="hover:text-[#54d9e1] duration-300"
                  key={subIndex}
                >
                  {sub}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
ShopPageCategories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      subcategories: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  handleCategoryClick: PropTypes.func.isRequired,
  handleOpenSubCategories: PropTypes.func.isRequired,
  subCatFlag: PropTypes.object.isRequired,
};
