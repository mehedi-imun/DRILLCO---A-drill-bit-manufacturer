import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

import MyOrderTable from './MyOrderTable';
const MyOrders = () => {
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth)
    const [products, setProducts] = useState([])
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Barer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate('/login')
                    }
                    return res.json()
                })
                .then(data => {
                    setProducts(data);

                })
        }
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>cancel order</th>
                        <th>pay</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((product,index)=><MyOrderTable
                        key={product._id}
                        index={index}
                        product={product}
                        >

                        </MyOrderTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;