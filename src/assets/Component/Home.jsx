import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SubHome from './SubHome';


const Home = () => {
    const load = useLoaderData([]);
    console.log(load)
    return (
        <div>
            <h3 className='text-2xl text-center'>This is home</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 rounded-xl w-[90%] mx-auto'>
            {
                load.map(m=><SubHome key={m.id} main={m}></SubHome>)
            }
            </div>
        </div>
    );
};

export default Home;