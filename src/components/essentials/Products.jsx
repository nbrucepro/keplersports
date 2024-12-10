import React from "react";
// import Img1 from ;
// import Img2 from "/nba/captain.jpg";
// import Img3 from "/nba/captain.jpg";
// import Img4 from "/nba/captain.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: "/nba/captain.jpg",
    title: "Women Ethnic",
    rating: 5.0,
    color: "kepler",
    aosDelay: "0",
  },
  {
    id: 2,
    img: "/nba/captain.jpg",
    title: "Women western",
    rating: 4.5,
    color: "kepler",
    aosDelay: "200",
  },
  {
    id: 3,
    img: "/nba/captain.jpg",
    title: "Goggles",
    rating: 4.7,
    color: "kepler",
    aosDelay: "400",
  },
  {
    id: 4,
    img: "/nba/captain.jpg",
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "kepler",
    aosDelay: "600",
  },
  {
    id: 5,
    img: "/nba/captain.jpg",
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "kepler",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-green-500">
            Top Kepler' stories
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Stories
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">
          Kepler has announced the appointment of Mandy Juruni as the new Head Coach for Kepler Basketball Club, D1 Men's team.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid h-[50vh] relative grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
              >
      <div className="absolute ">
          <img
            src="/thumbnail.png"
            alt="Background Image"
            className="h-[320px] w-[200px] object-cover rounded-md"
          />
          {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        </div>
        <div className="relative z-10 flex flex-col justify-end  mx-3 pb-24 h-full ">
                  <h3 className="font-semibold text-xl text-gray-200">{data.title}</h3>
                  <p className="text-md text-gray-100">{data.color}</p>
        </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-5 cursor-pointer bg-green-600 text-white py-2 px-5 rounded-md">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
