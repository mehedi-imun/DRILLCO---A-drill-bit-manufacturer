import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate()
    const { name, price, img, _id,availableQuantity,minQuantity} = product;
    return (
        <div className='  flex justify-around'>
            <div className="card w-[300px] glass shadow-md">
                <figure><img className='h-[200px] w-[100%]' src={img} alt="drill bit" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name?.slice(0, 20)}</h2>
                    <p className=''>price: ${price} (per unit)</p>
                    <p >available Quantity: {availableQuantity}  </p>
                    <p  className=' mb-5 text-rose-600'>minimum order: {minQuantity} pieces </p>
                    <div className="card-actions justify-end">
                        <button 
                        onClick={()=>navigate(`/purchase/${_id}`)}
                         className={availableQuantity<1000? "btn btn-secondary rounded-3xl  btn-sm btn-disabled" :"btn btn-secondary rounded-3xl   btn-sm"}>buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;