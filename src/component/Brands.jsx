import React, { useContext, useEffect, useState } from 'react';
import CardApis from '../Coupons.json'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { AuthContext } from './Autnprobider/Authprobider';



const Brands = () => {
    const { user } = useContext(AuthContext);

    const [Brands,setBrands] = useState([])
useEffect(()=>{
    setBrands(CardApis);
    fetch (CardApis)
    .then (res => res.json() )
    .then (data => setBrands(data))
} ,[])



    return (
        <div>
            <Navbar/>
            <div className='flex flex-col items-center justify-center mb-5 mt-7'>
                <h3 className='text-4xl font-bold mt-3 ' >See all brands</h3>
                <p className=' text-xl font-medium mt-1 mb-11'>Explore all copons and bay one</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7'>
                        {
                            Brands.map( Brands =>(
                                <div key={Brands._id}  >
                                    <div>
                                        <div className='flex flex-col items-center gap-2 w-[300px] md:w-[350px] h-[550px] bg-green-300 ml-2 rounded-2xl p-3'>
                                            <img src={Brands.img} alt="Crt" className='w-[350px] h-[300px]  ' />
                                            <h2 className='text-3xl font-semibold'>{Brands.product_name}</h2>
                                            <p className='text-xl font-semibold'>{Brands.rating}<i className="fa-solid fa-star"
                                            style={{ color: '#c24242' }}></i></p>
                                            <p className='text-xl font-semibold text-center'>
                                                {Brands.description}
                                            </p>
                                            {user ? (
                                                <div className="flex items-center gap-3">
                                                       {/* Open the modal using document.getElementById('ID').showModal() method */}
                                            <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>View Coupons</button>
                                            <dialog id="my_modal_1" className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">{Brands.product_name}</h3>
                                                <img src={Brands.img} alt="brand" />
                                                <p className="py-4">{Brands.price}</p>
                                                <p className="py-4">{Brands.net_available}</p>
                                                <div className="modal-action">
                                                <form method="dialog">
                                                    <button className="btn">Close</button>
                                                </form>
                                                </div>
                                            </div>
                                            </dialog>
                                            {/* =================== */}
                                                </div>
                                                ) : (
                                                <>
                                                       {/* Open the modal using document.getElementById('ID').showModal() method */}
                                            <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>View Details</button>
                                            <dialog id="my_modal_1" className="modal">
                                            <div className="modal-box">
                                                <div>
                                                    <h2>Login first</h2>
                                                </div>
                                                <div className="modal-action">
                                                <form method="dialog">
                                                    <button className="btn">Close</button>
                                                </form>
                                                </div>
                                            </div>
                                            </dialog>
                                            {/* =================== */}
                                                </>
                                            )}
                                            <p className='text-xl font-semibold'>
                                                {Brands.available
                                                ? 'On Sale!'
                                                : 'Sale is not available'}
                                            </p>
                                        </div>
                                    </div>
                                    
                                </div>
                            ),)
                        }
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Brands;




