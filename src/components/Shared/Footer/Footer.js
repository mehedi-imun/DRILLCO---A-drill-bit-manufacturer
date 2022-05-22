import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className="footer p-10 bg-base-100 text-base-content">
                <div>
                    <span to='/' className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">on time delivery</Link>
                    <Link to='/' className="link link-hover">free shipping</Link>
                    <Link to='/' className="link link-hover">drill bits all size</Link>
                    <Link to='/' className="link link-hover">packages</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
                <div className=' '>
                    <span className="footer-title">social</span>
                    <div className='flex '>
                        <Link to='/' className="link text-3xl link-hover"><FaFacebook></FaFacebook></Link>
                        <Link to='/' className="link text-3xl  link-hover"><AiFillLinkedin></AiFillLinkedin></Link>
                        <Link to='/'  className="link  text-3xl link-hover"><AiFillGithub></AiFillGithub></Link>
                    </div>
                </div>
                
            </footer>
            <div className='mb-10'>
                    <hr className='w-100 ' />
                    <p className='text-center  mt-5'>
                        &copy; DRILLCO {year} All rights reserved.</p>
                </div>
        </div>
    );
};

export default Footer;