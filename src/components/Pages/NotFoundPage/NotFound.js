import React from 'react';
import image from '../../../assets/images/Funny-404-Pages.gif'
const NotFound = () => {
    return (
        <div style={{
            color: 'red', backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: '#000000',
            height: '100vh'
        }}>
        </div>
    );
};

export default NotFound;