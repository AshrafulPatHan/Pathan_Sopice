import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Bnarslid = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1724, 
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="flex flex-col items-center justify-center my-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Winter Donation Camp</h2>
            <p className="text-lg font-medium text-center mb-6 text-gray-600">
                Please help those who dont have the means to stay warm this winter.
            </p>
            <div className='w-[80%]  ' >
                <Slider {...settings}>
                    <div className="p-3">
                        <img
                            src="https://i.ibb.co/cDbFnLJ/Basmah-Winter-Project-3.webp"
                            alt="Donation 1"
                            className="w-full h-[250px] md:h-[300px] rounded-xl object-cover bg-slate-600"
                        />
                    </div>
                    <div className="p-3">
                        <img
                            src="https://i.ibb.co/KNXhKnJ/Sweater-03.jpg"
                            alt="Donation 2"
                            className="w-full h-[250px] md:h-[300px] rounded-xl object-cover bg-slate-600"
                        />
                    </div>
                    <div className="p-3">
                        <img
                            src="https://i.ibb.co/L1SJxcd/Jacket.jpg"
                            alt="Donation 3"
                            className="w-full h-[250px] md:h-[300px] rounded-xl object-cover bg-slate-600"
                        />
                    </div>
                </Slider>
            </div>
            <Link
                to="/donate"
                className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium shadow-md"
            >
                Donate Now
            </Link>
        </div>
    );
};

export default Bnarslid;
