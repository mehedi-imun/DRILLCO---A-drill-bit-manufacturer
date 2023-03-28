import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const product = data;
        fetch('https://drillco.onrender.com/add-product', {
            method: 'POST',
            headers: {
                'authorization': `Barer ${localStorage.getItem('accessToken')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ product })
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('successfully added product')
                    reset()
                }
            })
    }
    return (
        <div className='my-12  '>
            <div className='flex justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <h4 className=' text-2xl text-center'>Add Product</h4>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className='input input-bordered input-primary w-full max-w-xs'
                                type='text'
                                {...register("name", { required: true })}
                                placeholder='product Name'

                            />
                            <input {...register("availableQuantity", { required: true })} type="number" placeholder="availableQuantity" className=" mt-5 input input-bordered input-primary w-full max-w-xs" />
                            <input {...register("minQuantity", { required: true })} type="number" placeholder="1000 pice min Quantity" className="input input-bordered input-primary mt-5 w-full max-w-xs" />
                            <input type='text'
                                {...register("description", { required: true })}
                                placeholder='description'
                                className='input input-bordered input-primary mt-5 w-full max-w-xs'
                            />
                            <input type='text'
                                {...register("img", { required: true })}
                                placeholder='img link'
                                className='input input-bordered input-primary mt-5 w-full max-w-xs'
                            />
                            <input type='number'
                                {...register("price", { required: true })}
                                placeholder='price'
                                className='input input-bordered input-primary mt-5 w-full max-w-xs'
                            />
                            <input type='submit'

                                value="add product"
                                className=' btn btn-secondary mt-5 w-full max-w-xs'
                            />

                        </form>


                    </div>
                </div>
            </div>
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

export default AddProduct;