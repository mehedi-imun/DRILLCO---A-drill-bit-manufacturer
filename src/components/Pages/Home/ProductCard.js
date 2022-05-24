import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate()
    const { name, price, img, description, _id} = product;
    return (
        <div className='  flex justify-around'>
            <div className="card w-[300px] glass shadow-md">
                <figure><img className='' src={img} alt="drill bit" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name?.slice(0, 20)}</h2>
                    <p>{description?.slice(0, 50)}</p>
                    <p className=''>price: ${price} (per unit)</p>
                    <div className="card-actions justify-end">
                        <button 
                        onClick={()=>navigate(`/purchase/${_id}`)}
                         className="btn btn-secondary rounded-3xl  btn-sm ">buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;