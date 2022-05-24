import React from 'react';
import { MdPeopleOutline } from 'react-icons/md';
import { FcSalesPerformance } from 'react-icons/fc';
import { FiFlag } from 'react-icons/fi';
import { VscFeedback } from 'react-icons/vsc';
import bg from '../../../assets/images/bg.png'
const BusinessSummary = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', }} className='pt-12 pb-12 '>
            <h3 className='text-xl lg:text-4xl text-center capitalize text-secondary '>millions peoples business trust us</h3>
            <div className=" grid gap-5 lg:grid-cols-4 justify-items-center mt-32">
                <div className=" shadow-lg rounded-xl w-[200px] flex flex-col justify-center items-center ">
                    <span className=' text-secondary text-6xl my-5'><FiFlag></FiFlag> </span>
                    <div className=" text-5xl font-bold">32</div>
                    <div className=" text-3xl mb-5">Countries</div>
                </div>
                <div className=" shadow-lg w-[200px] flex flex-col justify-center items-center ">
                    <span className=' text-secondary text-6xl my-5'>
                        <FcSalesPerformance></FcSalesPerformance>
                    </span>
                    <div className=" text-5xl font-bold">10 M+</div>
                    <div className=" text-3xl mb-5">Revenue</div>
                </div>
                <div className=" shadow-lg w-[200px] flex flex-col justify-center items-center ">
                    <span className=' text-secondary text-6xl my-5'><MdPeopleOutline></MdPeopleOutline> </span>
                    <div className=" text-5xl font-bold">355 M+</div>
                    <div className=" text-3xl mb-5">Customers</div>
                </div>
                <div className=" shadow-lg w-[200px] flex flex-col justify-center items-center ">
                    <span className=' text-secondary text-6xl my-5'><VscFeedback></VscFeedback> </span>
                    <div className=" text-5xl font-bold">9 M+</div>
                    <div className=" text-3xl mb-5">Feedback</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;