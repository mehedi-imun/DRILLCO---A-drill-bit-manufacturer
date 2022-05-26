import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ManageProductCard from './ManageProductCard';

const ManageProduct = () => {
    const { isLoading, data: products, refetch } = useQuery('product', () =>
        fetch('https://stark-ravine-05913.herokuapp.com/products', {
            method: 'GET',
        })
            .then(res => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=' grid lg:grid-cols-2 justify-center '>
            {
                products?.map(product => <ManageProductCard
                    key={product._id}
                    product={product}
                    refetch={refetch}
                >
                </ManageProductCard>)
            }

        </div>
    );
};

export default ManageProduct;