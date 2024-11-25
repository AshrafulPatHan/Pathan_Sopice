import React, { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from './Autnprobider/Authprobider';
import { Link } from 'react-router-dom';

const MyProfile = () => {

    const { user } = useContext(AuthContext);


    return (
        <div>
            <Navbar/>
            <div>
                <div className='flex flex-col items-center justify-center my-8'>
                    <h3></h3>
                    <img src="" alt="" />
                    {user ? (
                            <div className="flex flex-col items-center bg-green-500 w-[80%]  h-[450px] gap-3 ">
                                <h2 className='font-semibold text-3xl text-center mt-5 '>Wilcome Your Profile</h2>
                                <h2 className=" font-semibold text-3xl ">{user.displayName || "User"}</h2>
                                <img
                                    src={user.photoURL || "default-avatar.png"}
                                    alt="User Avatar"
                                    className="w-28 h-w-28 rounded-full"
                                />
                                <p>{user.email}</p>
                            </div>
                        ) : (
                            <>
                                <div className='h-[450px]'>
                                    <h3 className='font-semibold text-3xl text-center mt-5 '>Log in First</h3>
                                    <Link to="/Login" className='btn  font-semibold text-3xl text-center mt-5 '>Go to loging</Link>
                                </div>
                            </>
                        )}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MyProfile;