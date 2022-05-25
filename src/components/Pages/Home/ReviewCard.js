import React from 'react';
import Rating from 'react-rating';
import { BsFillStarFill } from 'react-icons/bs';

const ReviewCard = ({ review }) => {
    const { name, description, rating } = review;
    return (
        <div className='border w-80 p-5 lg:p-0 rounded-md '>
            <div className=''>
                <h4 className='p-5'>Name: {name}</h4>
            <span className='p-5'> Ratings: <Rating
                initialRating={rating}
                emptySymbol={<BsFillStarFill icon={BsFillStarFill} />}
                fullSymbol={<BsFillStarFill style={{ color: 'goldenrod' }} icon={BsFillStarFill} />}
                readonly
            ></Rating></span>
            </div>
          
                <p className='mt-5 p-5'>{description}</p>
            

        </div>
    );
};

export default ReviewCard;