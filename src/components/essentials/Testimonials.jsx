import React from "react";
import Slider from "react-slick";

import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialData = [
  {
    id: 1,
    name: "Mahoro Yvan",
    text: "Setter",
    img: "/nba/captain.jpg",
  },
  {
    id: 2,
    name: "Mahoro Yvan",
    text: "Setter",
    img: "/nba/captain.jpg",
  },
  {
    id: 3,
    name: "Mahoro Yvan",
    text: "Setter",
    img: "/nba/captain.jpg",
  },
  {
    id: 5,
    name: "Mahoro Yvan",
    text: "Setter",
    img: "/nba/captain.jpg",
  },
  {
    id: 6,
    name: "Mahoro Yvan",
    text: "Setter",
    img: "/nba/captain.jpg",
  },
  {
    id: 7,
    name: "Mahoro Yvan",
    text: "Setter",
    img: "/nba/captain.jpg",
  },
  {
    id: 8,
    name: "Mahoro Yvan",
    text: "Setter",
    img: "/nba/captain.jpg",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          {/* <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p> */}
          <h1 data-aos="fade-up" className="text-5xl py-2 font-bold">
            Players
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">
            Kepler Basketball and Volleyball team players
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data,index) => (
              <div className="my-6" key={index}>
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-gradient-to-l from-black  to-green-900  relative"
                >
                  <div className="mb-4 w-30 h-30">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-sm w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4 text-white">
                    <div className="space-y-1">
                      <h1 className="text-xl font-bold">
                        {data.name}
                      </h1>
                      <p className="text-sm ">{data.text}</p>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
