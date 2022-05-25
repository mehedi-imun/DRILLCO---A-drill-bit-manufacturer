import React from 'react';
import profile from '../../../assets/images/portfolio/profile.png'
import './MyPortfolio.css';
import about from '../../../assets/images/portfolio/about.png'
import { Link } from 'react-router-dom';
import project1 from '../../../assets/images/portfolio/project1.png'
import project2 from '../../../assets/images/portfolio/project2.png'
import project3 from '../../../assets/images/portfolio/project3.png'
const MyPortfolio = () => {
    return (
        <div className='portfolioBody .main '>
            <section className="home-section align-items-center hidden">
                <div className="container ">
                    <div className="lg:flex lg:justify-between align-items-center  ">
                        <div className="home-text sm:flex-col lg:w-[50%">
                            <p>Hello, I'm</p>
                            <h1>Mahedi</h1>
                            <h2>Junior web developer</h2>
                            <a href='#about' className="BtnPortfolio mr-5">more about me</a>
                            <a href='#project' className="BtnPortfolio">portfolio</a>
                        </div>

                        <div className="home-img flex justify-center   lg:w-[50%]">
                            <div className="img-box ">
                                <img src={profile} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='about' className="about-section sec-padding mt-5">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="section-title">
                            <h2>about me</h2>
                        </div>

                        <div className="about-img lg:w-[40%] px-[15px]">
                            <div className="img-box">
                                <img className='' src={about} alt="" />
                            </div>
                        </div>
                        <div className="about-text lg:w-[60%] px-[15px] mt-12">
                            <p className=' text-xl'> I am  mahaedi imun anik , I am from Bangladesh. I stayed in Lakshmipur with my family- my mother , my sister and my wife.  .. last one year. I will learn, web development.
                                I know, react, MongoDB,  Express.js, node.js, tailwind, firebase, Axios, react-query, more </p>
                            <h4 className=' text-2xl mt-5  mb-5'>skills </h4>
                            <div className="flex flex-wrap justify-start gap-5 lg:w-[70%]">
                                <div className="skill-item skill">MongoDb</div>
                                <div className="skill-item skill">Express.js</div>
                                <div className="skill-item skill">React</div>
                                <div className="skill-item skill">Node.js</div>
                                <div className="skill-item skill">bootstrap</div>
                                <div className="skill-item skill">Tailwind</div>
                            </div>
                            <div>
                                <h4 className=' text-2xl my-5 text-[#e02f6b]'>Education</h4>
                                <div className=' text-lg font-serif'> <h4>Education level : Secondary</h4>
                                    <h4>Exam/Degree Title : SSC</h4>
                                    <h4>Institution Name : sreerampur high school</h4>
                                    <h4>Passing year : 2017</h4></div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id='project' className='mt-5'>
                <div className="section-title">
                    <h2 className='pt-12'>Recent Project</h2>
                </div>
                <div className='container lg:flex justify-between gap-10 box-border '>
                    <div className='lg:w-[700px] mb-5'>
                        <img className='img-border' src={project1} alt="" />
                        <h2 className=' text-xl font-sans mt-5'>Warehouse management website</h2>
                        <div className='mt-5'>
                            <a href='https://electranext-6bbbe.firebaseapp.com/' target='_blank' rel="noreferrer" className='BtnPortfolio mr-2'>view project</a>
                            <a href='https://github.com/mahedi-imun/electraNext-warehouse' target='_blank' rel="noreferrer" className='BtnPortfolio mr-2'>view github</a>
                        </div>
                    </div>
                    <div className='lg:w-[700px]  mb-5'>
                        <img className='img-border' src={project2} alt="" />
                        <h2 className=' text-xl font-sans mt-5'>Product Review Website</h2>
                        <div className='mt-5'>
                            <a href='https://bike-review.netlify.app/' target='_blank' rel="noreferrer" className='BtnPortfolio mr-2'>view project</a>
                            <a href='https://github.com/mahedi-imun/product-analytics-and-customer-reviews-' target='_blank' rel="noreferrer" className='BtnPortfolio mr-2'>view github</a>
                        </div>
                    </div>
                    <div className='lg:w-[700px]  mb-5'>
                        <img className='img-border' src={project3} alt="" />
                        <h2 className=' text-xl mt-5 font-sans'>wadding photography website</h2>
                        <div className='mt-5'>
                            <a href='https://snapshots-studio.web.app/' target='_blank' rel="noreferrer" className='BtnPortfolio mr-2'>view project</a>
                            <a href='https://github.com/mahedi-imun/Snapshots-studio' target='_blank' rel="noreferrer" className='BtnPortfolio mr-2'>view github</a>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default MyPortfolio;