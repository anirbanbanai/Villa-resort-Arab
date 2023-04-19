import React from 'react';
import { FaBed , FaCreativeCommonsBy , FaGalacticRepublic } from "react-icons/fa";

const SubHome = ({main}) => {
    return (
        <div className='bg-slate-200 p-5 rounded-xl'>
            <img className='w-[80%] mx-auto' src={main.img} alt="" />
            <h2 className='text-center text-xl'>{main.name}</h2>
        <div className='flex justify-between gap-2 items-center'>
            <h2 className='flex gap-1'><FaBed className='mt-1'/> {main.bed}</h2>
            <h1 className='flex gap-2'><FaCreativeCommonsBy className='mt-1'/><FaCreativeCommonsBy className='mt-1'/> {main.per}</h1>
            <h2 className='flex gap-1'><FaGalacticRepublic className='mt-1'/> {main.price}</h2>
            <button className='btn btn-primary'>Book</button>
        </div>
        </div>
    );
};

export default SubHome;