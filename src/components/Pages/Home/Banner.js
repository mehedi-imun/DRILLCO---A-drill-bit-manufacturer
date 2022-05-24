import React from 'react';
import banner from '../../../assets/images/banner.png'
const Banner = () => {
    return (

            <div className="hero min-h-screen  px-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='md:flex-1 justify-center items-center flex'><img src={banner} className="rounded-lg shadow-2xl" alt='' /></div>
                    <div className=' md:flex-1 flex items-start flex-col'>
                        <h1 className="text-5xl font-bold"> DRILLCO - A drill bit  manufacturer company </h1>
                        <p className="py-6">Drills are cutting tools used to remove material to create holes, almost always of circular cross-section. Drills come in many sizes and shapes and can create different kinds of holes in many different materials.</p>
                        <button className=" btn btn-link  text-secondary "> see more</button>
                    </div>
                </div>
            </div>
    );
};

export default Banner;