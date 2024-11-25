import React from 'react';
import { Link } from 'react-router-dom';


const Sponcer = () => {
    return (
    <>
    <h3 className='text-4xl font-bold text-center'>ADDS</h3>
    <p className='text-xl font-bold text-center'>Sponcer By Jankar mahabob</p>
        <div className="flex justify-center items-center my-5">
            <div className="w-[350px] md:w-[660px] lg:w-[800px] aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/4O3AUH010rE?si=WYGPr9kIbV8mUjF7"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
        <div className='flex flex-col items-center mt-12 mb-10'>
            <h3 className='text-4xl font-bold text-center'>See our all brands</h3>
            <p className='text-xl font-medium text-center'>We have the bast qualaty deele for you </p>
            <div className='text-center mt-3 mb-5 '>
                <Link to='/Brands' className='btn  text-xl font-bold text-center bg-pink-300'>
                See all brands
                </Link>
            </div>
            <img src="https://cdn.pixabay.com/animation/2023/06/29/06/23/06-23-06-393_256.gif" className='w-[250px] md:w-[350px] ' alt="" />
        </div>

    </>
    );
};

export default Sponcer;
