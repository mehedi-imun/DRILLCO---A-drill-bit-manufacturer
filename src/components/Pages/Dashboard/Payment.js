import React from 'react';
import { Elements,} from '@stripe/react-stripe-js';
  import CheckoutForm from './CheckoutFrom'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading'
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51L0Z9NHKPkPGbWfR23AenemDc8oGBjTTBB42S1xTYRTBGrzG8aYDlz1YXqSl0E2lB5xVJ0OfJlX6yifY384ot6Q200Q65Ed65y');

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/order/${id}`;
    const { data, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    ).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    const { userName, userEmail, address, phoneNum, price, productName, orderedQuantity } = data
    return (
        <div className=''>
            
            <div class="card w-[90%] bg-base-100 shadow-xl mt-5">
            
                <div class="card-body ">
                <h3 className='  text-center text-secondary text-2xl'>Please pay us</h3>
                    <div className='lg:flex'>
                    <div className='lg:w-[50%]'>
                    <h2 class=" ">Hi {userName} </h2>
                    <p className='text-xl mt-3'>you are order now {orderedQuantity} Pieces <p className=' text-xl '>{productName?.slice(0,20)}</p> </p>
                    <p>your phone number: {phoneNum}</p>
                    <p>your email : {userEmail}</p>
                    <p>Total price : ${price}</p>
                    </div>
                    <div className=' border bg-[#0D1838] rounded-lg px-12  py-16 lg:w-[50%] mt-2'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm  data={data}/>
                    </Elements>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Payment;