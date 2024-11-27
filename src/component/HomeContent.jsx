import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';

const HomeContent = () => {
    return (
        <div>
            <div className='flex flex-col items-center gap-4 my-8'>
                <div className='flex flex-col md:flex-row items-center gap-4 
                bg-indigo-300 p-6 rounded-2xl border-solid border-2 
                border-sky-500 w-[80%] md:w-[650px] lg:w-[950px]  '>
                    <div className='flex flex-col items-center text-center md:items-start md:text-start '>
                        <h2 className='text-3xl font-bold'>Our Product</h2>
                        <p className='text-xl font-semibold'>We made bast qualaty of product for you</p>
                        <p className='text-xl font-semibold'>we genaraly make shopice ,we have butifull and quality product </p>
                    </div>
                    <img src="https://scontent.fdac135-1.fna.fbcdn.net/v/t1.15752-9/462648929_1232276381217704_8792264887728984284_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=FpeHuEq9Zq0Q7kNvgE3vsAP&_nc_zt=23&_nc_ht=scontent.fdac135-1.fna&oh=03_Q7cD1QGnAyTp5ePdmEoSDZaoiCULMEesizBwMGyJA20ipTi6hg&oe=676C21F9"
                            alt="img"
                            className=' w-[250px] md:w-[260px] lg:w-[350px] rounded-xl ' />
                </div>
                <div className='flex flex-col md:flex-row items-center gap-1 
                bg-indigo-300 p-3 
                rounded-2xl border-solid border-2 border-sky-500 
                w-[80%] md:w-[650px] lg:w-[950px]'>
                    <DotLottieReact
                    src="https://lottie.host/ef1c31fe-4deb-4e46-9b08-117624427667/YYp5Z3d09N.lottie"
                    loop
                    autoplay
                    className=' w-[250px] md:w-[260px] lg:w-[550px]   '
                    />
                    <div className='flex flex-col items-center text-center md:items-start md:text-start'>
                        <h3 className='text-3xl font-bold'>Online Order</h3>
                        <p className='text-xl font-semibold'>You con order from any of product then you ned</p>
                        <p className='text-xl font-semibold'>Oder now in 01814871378</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-4 
                bg-indigo-300 p-6 
                rounded-2xl border-solid border-2 border-sky-500 
                w-[80%] md:w-[650px] lg:w-[950px] '>
                    <DotLottieReact
                    src="https://lottie.host/d6287ead-1ba6-4aa0-9c43-90da86cbab5b/4s9AdkOvtS.lottie"
                    loop
                    autoplay
                    className='w-[250px] md:w-[260px] lg:w-[550px]  '
                    />
                    <div className='flex flex-col text-center items-center'>
                        <h2 className='text-3xl font-bold'>Cash on delibary</h2>
                        <p className='text-xl font-semibold'>We can deliber your order in your home</p>
                        <p className='text-xl font-semibold'>Order now </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;