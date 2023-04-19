import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-[90%]  mx-auto'>
           
            <div className="hero min-h-[300px] opacity-90 rounded-2xl" style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp5707204.jpg")` }}>
               
               <div className='text-3xl font-bold text-black gap-4 text-center '>
               <Link to='/'><h2 className='btn btn-warning mr-3 hover:bg-white'>Home</h2></Link>

               <Link to='/login'><h2 className='btn btn-primary mr-3 hover:bg-white text-black'> Login</h2></Link>

               <Link to="/booked"> <h2 className='btn btn-success mr-3 hover:bg-white text-black'> Book</h2></Link>
               </div>
               
                </div>
            </div>
     
    );
};

export default Header;