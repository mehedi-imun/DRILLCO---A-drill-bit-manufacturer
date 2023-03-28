import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ManageOrderCard from './ManageOrderCard';

const ManageAllOrder = () => {
  const { data: orders, isLoading, refetch } = useQuery('order', () =>
    fetch(`https://drillco.onrender.com/all-order`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json()));


  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>quantity</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {
            orders?.map((order, index) => <ManageOrderCard
              key={order._id}
              order={order}
              index={index}
              refetch={refetch}
            >
            </ManageOrderCard>)

          }
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrder;