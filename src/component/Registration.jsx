import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import auth from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { FaEye } from 'react-icons/fa';
import { FaEyeLowVision } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [showpas,setshowpas] = useState(false)





    const handelRegistra = (event) => {
        event.preventDefault();
        
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photoURL = event.target.PhotoURL.value;
        const password = event.target.password.value;

        console.log(name, email, photoURL, password);

        // Creating a user with Firebase Authentication
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log('User Created:', result.user);
                toast('Registration is sussesful')

                // Updating user's profile with name and photoURL
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL,
                })
                    .then(() => {
                        console.log('Profile updated successfully');
                    })
                    .catch((error) => {
                        console.error('Error updating profile:', error.message);
                        toast('somthidg is worang')
                    });
            } )
            .catch((error) => {
                console.error('Error creating user:', error.message);
            });
    };

    return (
        <>
            <Navbar />
            <div>
                <h2 className="text-4xl font-bold text-center mt-11">Registration/Signup</h2>
                <div>
                    <div className="hero bg-base-200 min-h-screen">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">
                                <DotLottieReact
                                    src="https://lottie.host/f107d7b7-2e9a-463e-9698-8b965b72238f/mPsFMFWlBi.lottie"
                                    loop
                                    autoplay
                                />
                                <p className="py-6 text-center">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                            </div>
                            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                <form onSubmit={handelRegistra} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="email"
                                            name="email"
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo-URL</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Photo-URL"
                                            name="PhotoURL"
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input
                                            type={showpas ? 'text' : 'password' } 
                                            placeholder="password"
                                            name="password"
                                            className="input input-bordered"
                                            required
                                        />
                                        <button 
                                        onClick={() => setshowpas(!showpas)}
                                        type="button"
                                        className='btn btn-xs absolute right-4 top-12'>
                                        {
                                            showpas ? <FaEye ></FaEye> : <FaEyeLowVision ></FaEyeLowVision >
                                        }
                                        </button>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type="submit" className="btn btn-primary">
                                            Register
                                        </button>
                                    </div>
                                    <Link to="/Login">Or Login</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Registration;