import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaGithub, } from 'react-icons/fa';
import ceo from '../../../assets/images/employee/ceo.png'
import coo from '../../../assets/images/employee/coo.png'
import cmo from '../../../assets/images/employee/cmo.jpg'
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div className='mt-12'>
            <h4 className=' text-3xl text-secondary text-center  mb-12'> About Our executive</h4>
            <div className=' grid lg:grid-cols-3 justify-items-center gap-5 '>

                <div className="card w-80 bg-base-100 shadow-2xl">
                    <figure className="px-5 pt-5">
                        <img className="mask mask-circle" src={coo} alt='' />
                    </figure>
                    <div className="card-body items-center text-center mt-[-20px] ">
                        <h2 className="card-title "> Oliver</h2>
                        <p>Chief Operating Officer (COO)</p>

                        <div className='flex  '>
                            <Link to='/' className="link text-2xl mr-2 link-hover"><FaFacebookF></FaFacebookF></Link>
                            <Link to='/' className="link mr-2 text-2xl  link-hover"><FaTwitter></FaTwitter></Link>
                            <Link to='/' className="link mr-2  text-2xl link-hover"><FaLinkedinIn></FaLinkedinIn></Link>
                            <Link to='/' className="link mr-2 text-2xl link-hover"><FaYoutube></FaYoutube></Link>
                            <Link to='/' className="link  text-2xl link-hover"><FaGithub></FaGithub></Link>
                        </div>


                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-2xl">
                    <figure className="px-5 pt-5">
                        <img className="mask mask-circle" src={ceo} alt='' />
                    </figure>
                    <div className="card-body items-center text-center mt-[-20px] ">
                        <h2 className="card-title "> Robert</h2>
                        <p>Chief Executive Officer (CEO)</p>

                        <div className='flex  '>
                            <Link to='/' className="link text-2xl mr-2 link-hover"><FaFacebookF></FaFacebookF></Link>
                            <Link to='/' className="link mr-2 text-2xl  link-hover"><FaTwitter></FaTwitter></Link>
                            <Link to='/' className="link mr-2  text-2xl link-hover"><FaLinkedinIn></FaLinkedinIn></Link>
                            <Link to='/' className="link mr-2 text-2xl link-hover"><FaYoutube></FaYoutube></Link>
                            <Link to='/' className="link  text-2xl link-hover"><FaGithub></FaGithub></Link>
                        </div>


                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-2xl">
                    <figure className="px-5 pt-5">
                        <img className="mask mask-circle" src={cmo} alt='' />
                    </figure>
                    <div className="card-body items-center text-center mt-[-20px] ">
                        <h2 className="card-title "> Jennifer</h2>
                        <p>Chief Marketing Officer (CMO)</p>

                        <div className='flex  '>
                            <Link to='/' className="link text-2xl mr-2 link-hover"><FaFacebookF></FaFacebookF></Link>
                            <Link to='/' className="link mr-2 text-2xl  link-hover"><FaTwitter></FaTwitter></Link>
                            <Link to='/' className="link mr-2  text-2xl link-hover"><FaLinkedinIn></FaLinkedinIn></Link>
                            <Link to='/' className="link mr-2 text-2xl link-hover"><FaYoutube></FaYoutube></Link>
                            <Link to='/' className="link  text-2xl link-hover"><FaGithub></FaGithub></Link>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;