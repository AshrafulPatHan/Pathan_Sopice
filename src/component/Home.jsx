import React from 'react';
import Navbar from './Navbar';
import Sponcer from './Sponcer';
import Footer from './Footer';
import Typing from 'react-typing-effect';
import Bnarslid from './Bnarslid';

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
                <h1 className="text-5xl font-bold text-center my-7 text-slate-900">Pathan Sopice</h1>
                <p className="text-xl font-semibold text-center my-7 text-orange-300">
                    <Typing 
                        text={[
                            "Welcome to  Pathan sopice!",
                            "Best Deals Just for You!",
                            "Save Big Today!"
                        ]}
                        speed={100} 
                        eraseSpeed={50} 
                        typingDelay={500} 
                        eraseDelay={1000} 
                    />
                </p>
                <Bnarslid />
                <Sponcer />
                <Footer />
            </div>
        </>
    );
};

export default Home;
