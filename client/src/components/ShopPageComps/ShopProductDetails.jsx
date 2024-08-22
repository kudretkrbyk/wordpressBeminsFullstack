import { IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";

export default function ShopProductDetails() {
  return (
    <div className="flex flex-col absolute top-10 right-10 w-full   ">
      <div className="absolute top-0 group-hover:right-0 -right-full duration-700 delay-0  ">
        <IoBagOutline className="size-6" />
      </div>
      <div className="absolute top-[40px] group-hover:right-0 -right-full duration-700 delay-75  ">
        <IoIosSearch className="size-6" />
      </div>
      <div className="absolute top-[80px] group-hover:right-0 -right-full duration-700 delay-100 ">
        <CiHeart className="size-6" />
      </div>
      <div className="absolute top-[120px] group-hover:right-0 -right-full duration-700 delay-150 ">
        <MdCompareArrows className="size-6" />
      </div>
    </div>
  );
}
