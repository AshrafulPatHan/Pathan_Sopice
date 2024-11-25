import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';



const Error = () => {
    return (
        <div>
            <div >
                <h2 className='text-5xl font-bold text-center mt-6 '>Error 404</h2>
                <p className='text-xl font-bold text-center mt-6 '>@Chak your internet conaktion</p>
                <div className='flex flex-col items-center justify-center mt-3 mb-2 font-semibold text-2xl'>
                    <Link to="/" className='btn bg-slate-500' >Go Home</Link>
                </div>
                <div>
                    
                    <DotLottieReact
                    src="https://lottie.host/2c91ed7d-6cd5-4d21-8197-8433468406d9/i5JCY28k9J.lottie"
                    loop
                    autoplay
                    />
                </div>
            </div>
        </div>
    );
};

export default Error;