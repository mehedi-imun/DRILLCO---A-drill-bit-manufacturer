import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const PurchaseModal = ({ product, quantity, setModal }) => {
    const { register, handleSubmit, reset } = useForm();
    const [user, loading] = useAuthState(auth);
    const { name, price, } = product;
    const totalPrice = price * quantity
    const onSubmit = (userData) => {
        const order = {
            userName: user?.displayName,
            userEmail: user?.email,
            address: userData?.address,
            phoneNum: userData?.phone,
            price: totalPrice,
            productName: name,
            orderedQuantity: quantity,

        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setModal(false)
                    reset()
                    toast.success('successfully ordered')

                }
            })


    };
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-sm text-primary">{product?.name}</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className=' flex justify-center items-center flex-col mt-5'>
                        <p className=" w-full mb-2 max-w-xs" >{user?.displayName}</p>
                        <input value={user?.email} disabled className="input input-bordered mb-2  w-full max-w-xs" />
                        <input value={`Quantity:${quantity} Pieces`} readOnly className="input input-bordered mb-2  w-full max-w-xs" />
                        <input value={`Total: $${totalPrice}`} readOnly className="input input-bordered mb-2  w-full max-w-xs" />
                        <input required type="number"{...register("phone")} placeholder='Your Phone Number' className="input input-bordered mb-2  w-full max-w-xs" />
                        <input required type='text' {...register("address")} placeholder='Your Address' className="input input-bordered mb-2  w-full max-w-xs" />
                        <input type='submit' value="order" className="input btn btn-secondary mb-2  w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default PurchaseModal;