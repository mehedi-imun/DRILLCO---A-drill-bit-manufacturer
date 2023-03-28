import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ProductCard from './ProductCard';

const Products = () => {
    const { isLoading, data: products } = useQuery('drillco', () =>
        fetch('https://drillco.onrender.com/products', {
            method: 'GET',
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=''>
            <h3 className=' text-center text-2xl pt-5 text-secondary font-bold'>Our products</h3>
            <div className=' grid lg:grid-cols-3 grid-cols-1 gap-10 mt-5   px-12 pb-5'>
                {
                    products?.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    >
                    </ProductCard>)
                }
            </div>
            <dir className='text-right px-12'> <button className='btn btn-link text-secondary'>see more</button></dir>
        </div>
    );
};

export default Products;