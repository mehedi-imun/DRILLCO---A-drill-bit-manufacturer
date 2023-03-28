import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import PurchaseModal from './PurchaseModal';
const Purchase = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(``)
    const [quantity, setQuantity] = useState(1000)
    const [modal, setModal] = useState(null)
    const { id } = useParams()
    const url = `https://drillco.onrender.com/product/${id}`

    const { data: product, isLoading, refetch } = useQuery('product', () => fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    ).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth)
            localStorage.removeItem('accessToken')
            navigate('/login')
        }
        return res.json()
    })
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    const { name, price, img, description, minQuantity, availableQuantity } = product;

    // handle quantity 

    const handlePlusQuantity = () => {
        if (quantity < availableQuantity) {
            setQuantity(quantity + 500)
            setError(``)

        }
        else {
            setError(`available`)
        }
    }
    const handleMinusQuantity = () => {

        if (quantity > minQuantity) {
            setQuantity(quantity - 500)
            setError(``)

        } else {
            setError(`min`)
        }
    }
    const handleSetProductModal = () => {
        setModal(product)
    }
    return (
        <div className='w-3/4 mx-auto mt-12'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body bg-indigo-50">
                    <h2 className="card-title">{name}</h2>
                    <p className='w-96'>{description}</p>

                    {error === 'min' && <p className='text-red-600'>Minimum order: {minQuantity} pieces</p>}
                    {error === 'available' && <p className='text-red-600'> not available{quantity} </p>}
                    <p className='text-2xl'>price : ${price} (per unit price) </p>
                    <div>
                        <p>Quantity:</p>
                        <button className={error === 'min' ? 'btn btn-xs btn-secondary btn-disabled' : 'btn btn-xs btn-secondary'} onClick={() => handleMinusQuantity()} ><AiOutlineMinus /></button>
                        <span className=' mx-2'>{quantity}</span>
                        <button className={error === 'available' ? 'available btn-disabled' : 'mt-2 btn btn-xs btn-secondary'} onClick={() => handlePlusQuantity()}><AiOutlinePlus /></button>
                        <p className='mx-2 inline-block '>({availableQuantity} Pieces available) </p>

                    </div>
                    <div className="card-actions mt-5 ">
                        <label onClick={() => handleSetProductModal()} htmlFor="purchase-modal" className={availableQuantity < 1000 ? 'btn brn-secondary btn-disabled ' : 'btn brn-secondary '}>checkout</label>

                    </div>
                </div>
            </div>
            {
                modal && <PurchaseModal setModal={setModal} product={product} refetch={refetch} quantity={quantity}>
                </PurchaseModal>
            }
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Purchase;