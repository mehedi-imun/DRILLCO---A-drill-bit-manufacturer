
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const MyReview = () => {
    const [error, setError] = useState('')
    const handleReview = (event) => {
        event.preventDefault()
        const rating = parseInt(event.target.ratingNum.value)
        const description = event.target.description.value
        const review = 
            {
                rating: rating,
                description: description
            }
        
        if (rating <= 5) {
            fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({review})

        })
            .then(res => res.json())
            .then(data=>{
                if(data.acknowledged){
                    toast.success('successfully review added')
                    event.target.description.value=''
                    event.target.ratingNum.value=''
                }
            })

        } else {
            setError('maximum rating-5 star')
        }

    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl ml-16 mt-10">
            <div class="card-body ">
                <ToastContainer></ToastContainer>
                <div class="rating">
                    <form onSubmit={handleReview}>
                        {error}
                        <input name='ratingNum' type="number" placeholder="Enter your rating" class="input input-bordered input-sm w-full max-w-xs bg-base-100" />
                        <textarea name='description' type="text" placeholder="Enter your rating" class="textarea border  w-full max-w-xs  textarea-accent mt-5" />
                        <input type="submit" className='btn w-full  btn-sm btn-secondary' value='add' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyReview;