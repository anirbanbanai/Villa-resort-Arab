import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Header = () => {
    const {LogOut, user} = useContext(AuthContext);
    const handleLogOut = ()=>{
       LogOut()
       .then(result=>{})
       .catch(error=>console.log(error))
    }
    return (
        <div className='w-[90%]  mx-auto'>
           
            <div className="hero min-h-[300px] opacity-90 rounded-2xl" style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp5707204.jpg")` }}>
               
               <div className='text-3xl font-bold text-black gap-4 text-center '>
               <Link to='/'><h2 className='btn bg-yellow-300 text-black mr-3 hover:bg-white'>Home</h2></Link>

              { !user && <Link to='/login'><h2 className='btn bg-slate-300 mr-3 hover:bg-white text-black'> Login</h2></Link> }

               <Link to="/booked"> <h2 className='btn  mr-3 bg-green-300 hover:bg-white text-black'> Booked</h2></Link>

               {!user &&<Link to="/regi"> <h2 className='btn bg-red-300 mr-3 hover:bg-white text-black'> Register</h2></Link>}

                { user && <h2 onClick={handleLogOut} className='btn bg-orange-400 mr-3 hover:bg-white text-black'> Log-Out</h2>}
              
               </div>
               
                </div>
            </div>
     
    );
};

export default Header;