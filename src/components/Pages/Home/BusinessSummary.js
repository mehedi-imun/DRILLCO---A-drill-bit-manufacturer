import React from 'react';
import countries from '../../../assets/images/countries.png'
import clients from '../../../assets/images/clients.png'
import feedback from '../../../assets/images/feedback.png'
import project from '../../../assets/images/project.png'
const BusinessSummary = () => {
    return (
        <div className='pt-12 pb-12 lg:px-12 bg-indigo-50'>
            <h3 className='text-xl lg:text-4xl text-center capitalize text-secondary'>millions peoples business trust us</h3>
            <div class="stats shadow flex mt-12 gap-5 ">
                <div class="stat place-items-center ">
                    <div class="stat-value"><img className='w-[200px]' src={countries} alt="" /></div>
                    <div class="stat-value">32</div>
                    <div class="stat-title">countries</div>
                   
                </div>
                <div class="stat place-items-center">
                    <div class="stat-value"><img className='w-[200px]' src={project} alt="" /></div>
                    <div class="stat-value">32</div>
                    <div class="stat-title">countries</div>
                   
                </div>
                <div class="stat place-items-center">
                    <div class="stat-value"><img className='w-[200px]' src={clients} alt="" /></div>
                    <div class="stat-value">32</div>
                    <div class="stat-title">countries</div>
                   
                </div>
                <div class="stat place-items-center">
                    <div class="stat-value"><img className='w-[100px]' src={feedback} alt="" /></div>
                    <div class="stat-value">32</div>
                    <div class="stat-title">countries</div>
                   
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;