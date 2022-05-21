import React from 'react';

const ProductCard = ({ product }) => {
    const { name, price, img, description,} = product;
    return (
        <div className='  flex justify-around'>
            <div class="card w-[300px] glass">
                <figure><img className='' src={img} alt="drill bit"/></figure>
                <div class="card-body">
                    <h2 class="card-title">{name?.slice(0,20)}</h2>
                    <p>{description?.slice(0,50)}</p>
                    <p className=''>price: ${price} (per unit)</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary rounded-3xl  btn-sm ">buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;