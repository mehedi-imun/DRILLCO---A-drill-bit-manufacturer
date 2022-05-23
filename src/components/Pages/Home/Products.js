import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ProductCard from './ProductCard';

const Products = () => {
    const { isLoading, data:products } = useQuery('drillco', () =>
     fetch('http://localhost:5000/products',{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
     })
     .then(res => res.json())
     )
    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div className=' bg-indigo-50 '>
            <h3 className=' text-center text-2xl pt-5 text-secondary font-bold'>Drill bits</h3>
            <div className=' grid lg:grid-cols-3 grid-cols-1 gap-10 mt-5   px-12 pb-16 '>
                {
                    products?.map(product=><ProductCard
                    key={product._id}
                    product={product}
                    >
                    </ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;