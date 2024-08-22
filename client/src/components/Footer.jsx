import { FaTiktok } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full  flex flex-col gap-10 p-10">
      <div className="grid grid-cols-4 w-full">
        <div className="w-full flex flex-col gap-5">
          <div>
            {" "}
            <img
              className="w-48"
              src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2020/06/logo.png"
            ></img>
          </div>

          <div className="w-60">
            Contact our customer happiness team Monday-Friday 9am-5pm (02) 6188
            8062
          </div>
          <div className="flex flex-col gap-3">
            <div>Our Social</div>
            <div className="flex items-center justify-start gap-5 ">
              <div className="size-10 rounded-full border border-black flex items-center justify-center">
                <FaTiktok></FaTiktok>
              </div>
              <div className="size-10 rounded-full border border-black flex items-center justify-center">
                <FaXTwitter></FaXTwitter>
              </div>
              <div className="size-10 rounded-full border border-black flex items-center justify-center">
                <BsInstagram></BsInstagram>
              </div>
              <div className="size-10 rounded-full border border-black flex items-center justify-center">
                <FaFacebookF></FaFacebookF>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div>Shop</div>
          <div className="flex flex-col">
            <div>Shop dog</div>
            <div>Shop cat</div>
            <div>Shop brands</div>
            <div>On sale</div>
            <div>Auto-Delivery</div>
            <div>Aussie Hazard Cover</div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div>Customer Services</div>
          <div>
            {" "}
            <div>Track Order</div>
            <div>Returns</div>
            <div>Shipping Info</div>
            <div>Recalls & Advisories</div>
            <div>Pet Store Locator</div>
            <div>Help</div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>Stay in touch...</div>
          <div>
            Subscribe and be the first to know about exclusive offers, products,
            promotions & more
          </div>
          <div className="flex items-center justify-center gap-5">
            <div>
              <input
                className="border-none focus:outline-none"
                placeholder="Enter Your email"
              ></input>
            </div>
            <div>
              <button className="p-3 px-6 bg-[#54d9e1] rounded-xl">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <div>© 2024 – bemins. All Rights Reserved.</div>
        <div>
          <img src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2020/06/payment.png"></img>
        </div>
      </div>
    </div>
  );
}
