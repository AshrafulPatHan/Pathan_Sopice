import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { FaRegCommentDots } from 'react-icons/fa';



const Sponcer = () => {
    const [Like,setLike] = useState(false)
    const [comantxt,setcomantxt] = useState("")


    const handelcoment = (event) => {
        event.preventDefault();
        const comantxtn = event.target.comant.value;
        setcomantxt(comantxtn)
        console.log(comantxt);
        event.target.comant.value = '';
    };
    

    return (
    <>
    <h3 className='text-4xl font-bold text-center'>Sponcer sip</h3>
    <p className='text-xl font-bold text-center'>Sponcer By Pathan TV</p>
        <div className="flex flex-col justify-center items-center my-3">
            <div className="w-[90%] md:w-[660px] lg:w-[800px] aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/pqC793Qf8o0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
            <form className='flex flex-col md:flex-row items-center mt-4 gap-1 md:gap-4' onSubmit={handelcoment}>
            <button 
                onClick={() => setLike(!Like)}
                type="button"
                className='btn text-2xl  '>
                {
                    Like ?  <BiSolidLike /> : <BiLike />
                }
                </button>
                <input type="text" placeholder='comant' name="comant" id="coma" 
                className='bg-slate-200 p-3 rounded-2xl border-solid border-2 border-sky-500 ' />
                <button className='btn text-lg' type="submit">
                    <FaRegCommentDots />
                </button>
            </form>
            <p className='bg-emerald-200 text-xl p-3 rounded-xl mt-2'>{comantxt}</p>
        </div>
        <div className='flex flex-col items-center mt-12 mb-4'>
            <h3 className='text-4xl font-bold text-center'>See our all brands</h3>
            <p className='text-xl font-medium text-center'>We have the bast qualaty deele for you </p>
            <div className='text-center mt-3 mb-1 '>
                <Link to='/Brands' className='btn  text-xl font-bold text-center bg-pink-300'>
                See all brands
                </Link>
            </div>
            <DotLottieReact
            src="https://lottie.host/942bc108-4037-4d3c-9415-a08b68235414/sO3Ev0OQwC.lottie"
            loop
            autoplay
            className='w-[80%] md:w-[50%]'
            />
        </div>

    </>
    );
};

export default Sponcer;
