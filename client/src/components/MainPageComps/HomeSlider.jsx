import { useState } from "react";
import { GoDotFill } from "react-icons/go";

export default function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slider = [
    {
      id: 1,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2024/02/slider-1.jpg",
      description: "Unveiling This Season's",
      category: "Fashion",
    },
    {
      id: 2,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2024/02/slider-2.jpg",
      description: "This İs A Long Open",
      category: "Robe",
    },
    {
      id: 3,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2024/02/slider-3.jpg",
      description: "Epitome Of The Big",
      category: "Sweater",
    },
  ];

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div className=" flex flex-col w-full h-full transition-transform duration-500 ease-in-out ">
        {slider.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full flex items-center justify-center bg-center bg-cover transition-duration duration-1000  ${
              index === currentIndex
                ? "translate-y-0 opacity-100"
                : " opacity-0 translate-y-[-150%] "
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute top-1/2 left-40 w-full p-8 text-black">
              <div className="flex flex-col items-start justify-center gap-2">
                <div className="font-bold text-5xl">{slide.description}</div>
                <div className="text-3xl ">{slide.category}</div>
                <div className="  text-black rounded">Shop Now</div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute  left-10 top-1/2  flex flex-col  gap-2 z-40">
          {slider.map((_, dotIndex) => (
            <div className="border border-black rounded-full" key={dotIndex}>
              {" "}
              <GoDotFill
                className={`cursor-pointer size-6   ${
                  dotIndex === currentIndex ? "text-black" : "text-white"
                }`}
                onClick={() => setCurrentIndex(dotIndex)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
