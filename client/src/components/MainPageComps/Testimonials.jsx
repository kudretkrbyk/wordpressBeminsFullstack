import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2019/02/tes-3.jpg",
      quote:
        "A great company to buy from. Excellent quality products at good value. Delivery is efficient and quick.",
      name: "Ann Smith",
      title: "CEO & Founder",
    },
    {
      id: 2,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2019/12/Rectangle-1006.jpg",
      quote:
        "Their customer service is outstanding. I had an issue and it was resolved promptly.",
      name: "John Doe",
      title: "Marketing Manager",
    },
    {
      id: 3,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2020/06/tes-2.jpg",
      quote:
        "I am very satisfied with my purchase. The product quality is top-notch.",
      name: "Jane Roe",
      title: "Product Designer",
    },
    {
      id: 4,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2022/08/tes-3-720x484-1.jpg",
      quote:
        "Quick and easy shopping experience. Will definitely buy from them again.",
      name: "Emily Brown",
      title: "Operations Manager",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-screen flex flex-col gap-0 items-center justify-center bg-[#f8fbfc] p-20">
      <div className="font-bold text-3xl">Testimonials</div>
      <div className=" w-full  h-full flex items-center justify-center gap-20 p-32 ">
        <div className="w-full h-full overflow-hidden ">
          <div
            className="flex transition-transform duration-500 ease-in-out w-full h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-none w-full h-full flex items-center justify-center gap-40 "
              >
                <div className="w-[660px] h-[300px] rounded-[50%_/_50%] overflow-hidden -rotate-45 flex items-center justify-center">
                  <div
                    className="w-[470px] h-[385px] rotate-45 bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  ></div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex gap-2">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                  <div className="text-3xl font-bold w-2/3">
                    {`“${testimonial.quote}”`}
                  </div>
                  <div className="flex flex-col gap-3">
                    <span>{testimonial.name}</span>
                    <span>{testimonial.title}</span>
                  </div>
                  <div className=" flex justify-start gap-4 w-full   z-10">
                    <button
                      onClick={handlePrevClick}
                      className="border border-black rounded-full p-2 flex items-center justify-center group hover:bg-[#54d9e1] duration-300"
                    >
                      <IoIosArrowBack className="size-5 group-hover:text-white text-black duration-300" />
                    </button>
                    <button
                      onClick={handleNextClick}
                      className="border border-black rounded-full p-2 flex items-center justify-center group hover:bg-[#54d9e1] duration-300"
                    >
                      <IoIosArrowForward className="size-5 group-hover:text-white duration-300" />
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
