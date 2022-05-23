import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import PurchaseModal from './PurchaseModal';
const Purchase = () => {
    const [quantity, setQuantity] = useState(1000)
    const { id } = useParams()
    const url = `http://localhost:5000/product/${id}`

    const { data: product, isLoading } = useQuery('product', () => fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    ).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const { name, price, img, description, minQuantity, availableQuantity } = product;

    // handle quantity 

    const handlePlusQuantity = () => {
        if (quantity < availableQuantity) {
            setQuantity(quantity + 500)

        }
    }
    const handleMinusQuantity = () => {

        if (quantity > minQuantity) {
            setQuantity(quantity - 500)

        }
    }
    return (
        <div className='w-3/4 mx-auto mt-12'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body bg-indigo-50">
                    <h2 className="card-title">{name}</h2>
                    <p className='w-96'>{description}</p>
                    <p className='text-xl'>Minimum order: {minQuantity} pieces</p>
                    <p className='text-2xl'>price : ${price} (per unit price) </p>
                    <div>
                        <p>Quantity:</p>
                        <button onClick={() => handleMinusQuantity()} ><AiOutlineMinus /></button>
                        <span className=' mx-2'>{quantity}</span>
                        <button className='' onClick={() => handlePlusQuantity()}><AiOutlinePlus /></button>
                        <span className='mx-2'>{availableQuantity} Pieces available</span>

                    </div>
                    <div className="card-actions ">
                        <label htmlFor="purchase-modal" className="btn brn-secondary">checkout</label>

                    </div>
                </div>
            </div>
            <PurchaseModal product={product} quantity={quantity}>
            </PurchaseModal>
        </div>
    );
};

export default Purchase;