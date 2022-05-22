import React from 'react';
import {MdOutlineLocalShipping,MdPeopleOutline } from 'react-icons/md';
import {FiFlag } from 'react-icons/fi';
import {VscFeedback } from 'react-icons/vsc';
import bg from '../../../assets/images/bg.png'
const BusinessSummary = () => {
    return (
        <div style={{backgroundImage: `url(${bg})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',}} className='pt-12 pb-12 '>
            <h3 className='text-xl lg:text-4xl text-center capitalize text-secondary'>millions peoples business trust us</h3>
            <div className=" grid grid-cols-4 justify-items-center mt-12">
                <div class=" shadow-lg rounded-xl w-[200px] flex flex-col justify-center items-center ">
                    <span className=' text-secondary text-6xl my-5'><FiFlag></FiFlag> </span>
                    <div className=" text-5xl font-bold">32</div>
                    <div className=" text-3xl mb-5">Countries</div>
                </div>
                <div class=" shadow-lg w-[200px] flex flex-col justify-center items-center ">
                    <span className=' text-secondary text-6xl my-5'><MdOutlineLocalShipping></MdOutlineLocalShipping> </span>
                    <div className=" text-5xl font-bold">2359+</div>
                    <div className=" text-3xl mb-5">Shipping int.</div>
                </div>
                <div class=" shadow-lg w-[200px] flex flex-col justify-center items-center ">
                    <span className=' text-secondary text-6xl my-5'><MdPeopleOutline></MdPeopleOutline> </span>
                    <div className=" text-5xl font-bold">355+</div>
                    <div className=" text-3xl mb-5">Happy clients</div>
                </div>
                <div class=" shadow-lg w-[200px] flex flex-col justify-center items-center ">
                    <span className=' text-secondary text-6xl my-5'><VscFeedback></VscFeedback> </span>
                    <div className=" text-5xl font-bold">342+</div>
                    <div className=" text-3xl mb-5">Feedback</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;