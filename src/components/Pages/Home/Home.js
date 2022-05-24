import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;