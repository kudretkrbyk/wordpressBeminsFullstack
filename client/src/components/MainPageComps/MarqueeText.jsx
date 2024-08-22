export default function MarqueeText() {
  return (
    <div className="bg-[#e8f9fb] text-white py-2">
      <div className="w-full overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee">
          <div className="marquee_text_content flex">
            <ul className="flex space-x-8">
              {Array(10)
                .fill("Free Delivery on orders over $100.")
                .map((text, index) => (
                  <li key={index}>
                    <a href="#" style={{ color: "#000000" }}>
                      {text}
                    </a>
                  </li>
                ))}
            </ul>
            <ul className="flex space-x-8">
              {Array(10)
                .fill("Free Delivery on orders over $100.")
                .map((text, index) => (
                  <li key={index}>
                    <a href="#" style={{ color: "#000000" }}>
                      {text}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
