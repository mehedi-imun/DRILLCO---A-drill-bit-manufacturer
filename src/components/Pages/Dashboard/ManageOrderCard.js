import React from 'react';

const ManageOrderCard = ({ order, index, refetch }) => {
    const { productName, orderedQuantity, statusPending, paid,_id } = order;

    const handleShipment = ()=>{
        fetch(`http://localhost:5000/order-status/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
        .then(data => console.log(data))

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName?.slice(0, 15)}</td>
            <td>{orderedQuantity}</td>
            <td>
                { paid ? 
                <>
                
                { statusPending ?  <button 
                    onClick={()=>handleShipment()}
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