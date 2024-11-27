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
                            src="https://scontent.fdac135-1.fna.fbcdn.net/v/t1.15752-9/467463454_894503962832106_3868106062009511033_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_ohc=3-mBDO6zJi8Q7kNvgGqKyH9&_nc_zt=23&_nc_ht=scontent.fdac135-1.fna&oh=03_Q7cD1QE7Q-3hA4lticGS9e0OHJI36oppMofW1es7h5kYs5SLAQ&oe=676CD011"
                            className="w-full h-[250px] md:h-[300px] rounded-xl object-cover bg-slate-600"
                        />
                    </div>
                    <div className="p-3">
                        <img
                            src="https://scontent.fdac135-1.fna.fbcdn.net/v/t1.15752-9/467468879_1078007556987245_3781701311361734593_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=EeV79owToqMQ7kNvgHfyDBU&_nc_zt=23&_nc_ht=scontent.fdac135-1.fna&oh=03_Q7cD1QHmcgeivYxEyh0Pjd468p3FwejmrkmODQZzMIGMS2v5cg&oe=676CB8CF"
                            className="w-full h-[250px] md:h-[300px] rounded-xl object-cover bg-slate-600"
                        />
                    </div>
                    <div className="p-3">
                        <img
                            src="https://scontent.fdac135-1.fna.fbcdn.net/v/t1.15752-9/462581924_535869366092852_4518490724784162411_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=6gQjHUDiPLwQ7kNvgFQzu0d&_nc_zt=23&_nc_ht=scontent.fdac135-1.fna&oh=03_Q7cD1QFdLWiLrKaDN72qGL-Ck0zy70xAgHaZi4pQThLWVCbIkA&oe=676CEECA"
                            className="w-full h-[250px] md:h-[300px] rounded-xl object-cover bg-slate-600"
                        />
                    </div>
                </Slider>
            </div>
            <Link
                to="/Brands"
                className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium shadow-md"
            >
                All Brands
            </Link>
        </div>
    );
};

export default Bnarslid;
