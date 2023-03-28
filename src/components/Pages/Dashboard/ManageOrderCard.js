import React from 'react';

const ManageOrderCard = ({ order, index, refetch }) => {
    const { productName, orderedQuantity, statusPending, paid, _id } = order;

    const handleShipment = () => {
        fetch(`https://drillco.onrender.com/order-status/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()

                }
            })

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName?.slice(0, 15)}</td>
            <td>{orderedQuantity}</td>
            <td>
                {paid ?
                    <>

                        {statusPending ? <button
                            onClick={() => handleShipment()}
                            className='btn btn-xs btn-secondary'>pending</button> :
                            <button className='btn btn-xs btn-secondary'>sipped</button>
                        }

                    </> :
                    <p>Not paid</p>

                }
            </td>

        </tr>
    );
};

export default ManageOrderCard;