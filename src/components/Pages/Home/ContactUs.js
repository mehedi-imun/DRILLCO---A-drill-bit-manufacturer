import React from 'react';
import contact from '../../../assets/images/contact.png'
const ContactUs = () => {
    return (
        <div className='mt-12'>
            <h4 className=' text-3xl text-secondary text-center  mb-12'> Contact Us</h4>
            <div className='lg:flex'>
                <div className='flex-1 flex justify-center items-center'>
                    <div class="card w-[80%]  shadow ">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title mb-5">contact us</h2>
                            <input type="text" placeholder="your Name" class="input input-bordered input-sm w-full max-w-xs mb-5" />
                            <textarea class="textarea bg-base-200 w-full max-w-xs" placeholder="Massage"></textarea>
                            <button className='btn btn-secondary btn-sm mt-6'>Contact</button>
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex justify-center items-center'>
                    <img className='w-[70%]' src={contact} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;