import React, { useContext } from 'react';
import Icon from '../assets/Black White Simple Initials Logo .png'
import { Link } from 'react-router-dom';
import { AuthContext } from './Autnprobider/Authprobider';
import auth from '../Firebase/firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';



const Navbar = () => {
    const { user } = useContext(AuthContext);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log('User logged out successfully');
                alert('Logged out successfully!');
            })
            .catch((error) => {
                console.error('Error during logout:', error.message);
                toast('Failed to log out!');
            });
        };

    return (
    <>
        <div>
            <div className="navbar bg-base-100 mt-6 ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to="/">
                                Home
                        </Link></li>
                        <li>
                        <Link>Morinfo</Link>
                        <ul className="p-2">
                            <li><Link to="/">AboutUs</Link></li>
                            <li><Link to="/MyProfile">My-Profile</Link></li>
                        </ul>
                        </li>
                        <li><Link to='/Brands'>Brands</Link></li>
                    </ul>
                    </div>
                    <img src={Icon} className='w-[80px]  h-[80px] md:w-[150px] md:h-[150px]  ' alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className='text-2xl font-bold'>Home</Link></li>
                    <li><Link to="/Brands" className='text-2xl font-bold'>Brands</Link></li>
                    <li>
                        <details>
                        <summary className='text-2xl font-semibold'>Morinfo</summary>
                        <ul className="p-2">
                            <li><Link className='text-xl font-semibold'>AboutUs</Link></li>
                        </ul>
                        </details>
                    </li>
                    <li><Link to="/MyProfile" className='text-2xl font-bold'>My-Profile</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-5 ">
                            {user ? (
                            <div className="flex items-center gap-3 mr-11">
                                <h2 className="text-sm md:text-xl font-semibold">{user.displayName || "User"}</h2>
                                <img
                                    src={user.photoURL || "default-avatar.png"}
                                    alt="User Avatar"
                                    className="w-8 md:w-10 h-8 md:h-10 rounded-full"
                                />
                                <button onClick={handleLogout} className="btn">Log out</button>
                            </div>
                        ) : (
                            <>
                                <Link to="/Login" className="btn text-sm md:text-xl font-semibold">Login</Link>
                                <Link to="/Registration" className="btn text-sm md:text-xl font-semibold">Registration</Link>
                            </>
                        )}
                </div>
            </div>
        </div>
    </>
    );
};

export default Navbar;


