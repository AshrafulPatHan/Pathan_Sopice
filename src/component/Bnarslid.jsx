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
        <div className="flex flex-col items-center justify-center my-5 px-4">
            <p className="text-lg font-medium text-center mb-6 text-gray-600">
                Please help those who dont have the means to stay warm this winter.
            </p>
            <div className='w-[80%]  ' >
                <Slider {...settings}>
                    <div className="p-3">
                        <img
                            src="https://scontent.fdac135-1.fna.fbcdn.net/v/t1.15752-9/462648929_1232276381217704_8792264887728984284_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=FpeHuEq9Zq0Q7kNvgE3vsAP&_nc_zt=23&_nc_ht=scontent.fdac135-1.fna&oh=03_Q7cD1QGnAyTp5ePdmEoSDZaoiCULMEesizBwMGyJA20ipTi6hg&oe=676C21F9"
                            alt="Donation 1"
                            className="w-full h-[250px] md:h-[300px] rounded-xl object-cover bg-slate-600"
                        />
                    </div>
                    <div className="p-3">
                        <img
                            src="https://scontent.fdac135-1.fna.fbcdn.net/v/t1.15752-9/466748589_1124586842382781_1544157469436914701_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=9Qx1_sRNCG4Q7kNvgFjDw1l&_nc_zt=23&_nc_ht=scontent.fdac135-1.fna&oh=03_Q7cD1QG4JJWeGQhk2KelSmGXYYv4_oqESgSaznHXF-FUJTnwZQ&oe=676C1ECB"
                            alt="Donation 2"
                            className="w-full h-[250px] md:h-[300px] rounded-xl object-cover bg-slate-600"
                        />
                    </div>
                    <div className="p-3">
                        <img
                            src="https://scontent.fdac135-1.fna.fbcdn.net/v/t1.15752-9/462578195_1544805756146071_1071305563721104032_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=kJVrcUfPKTkQ7kNvgFH4cn_&_nc_zt=23&_nc_ht=scontent.fdac135-1.fna&oh=03_Q7cD1QF7qG1Vp-sRR9PjiGGourVm0iUeNTQ9UxaJQxdxM8u-Xw&oe=676BFBC2"
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
