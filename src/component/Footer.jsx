import React from 'react';
import { toast } from 'react-toastify';


const Footer = () => {
    return (
    <>
        <div className='bg-slate-800 text-slate-300 flex flex-col items-center gap-4 p-6 '>
            <h3 className='text-4xl'>Pathan Sopice</h3>
            <p>Send email in ashrafulpathan3927@gmail.com</p>
            <div className='flex flex-col md:flex-row items-center gap-2'>
                <input type="text" placeholder='Email' className='w-[320px] md:w-[350px]   h-[40px] bg-slate-400 rounded-xl p-6 text-black ' />
                <button className='btn' onClick={()=> toast('Email is send')}>
                    <i className="fa-solid fa-paper-plane"></i> send
                </button>
            </div>
            <h4 className='text-2xl text-center'>Meet our socalmedia acounte and follo us</h4>
            <div className='text-5xl flex flex-col md:flex-row items-center gap-2 '>
                <div>
                    <i className="fa-brands fa-facebook" style={{ color: '#4267B2', marginRight: '10px' }}></i>
                    <i className="fa-brands fa-twitter" style={{ color: '#1DA1F2', marginRight: '10px' }}></i>
                </div>
                <div>
                    <i className="fa-brands fa-instagram" style={{ color: '#E1306C', marginRight: '10px' }}></i>
                    <i className="fa-brands fa-linkedin" style={{ color: '#4267B2', marginRight: '10px' }}></i>
                </div>
                <div>
                    <i className="fa-brands fa-x-twitter"></i>
                    <i className="fa-brands fa-youtube" style={{ color: '#E1306C', marginRight: '10px' }}></i>
                </div>
            </div>
            <p className='text-center'>@all right regarbe on Discount PRO for 2024</p>
        </div>
    </>
    );
};

export default Footer;


