import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-[90%]  mx-auto'>
           
            <div className=" min-h-screen opacity-90" style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp5707204.jpg")` }}>
               
               <div className='text-3xl font-bold text-black gap-4 text-center pt-48'>
                <h2 className='btn btn-warning mr-3 hover:bg-white'><Link>Home</Link></h2>
                <h2 className='btn btn-primary mr-3 hover:bg-white text-black'> <Link>Login</Link></h2>
                <h2 className='btn btn-success mr-3 hover:bg-white text-black'> <Link>Book</Link></h2>
               </div>
               
                </div>
            </div>
     
    );
};

export default Header;