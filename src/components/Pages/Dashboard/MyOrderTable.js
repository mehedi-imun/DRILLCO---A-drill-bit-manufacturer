import React from 'react';
import { FcCancel } from 'react-icons/fc';
import { MdOutlinePayment } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyOrderTable = ({ product, index, refetch}) => {
    const { price, productName, orderedQuantity, userEmail ,_id,paid,transactionID,statusPending } = product;
    const navigate= useNavigate()
    const handleDEleteOrder = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be cancel order??",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Cancel Order!'
        }).then((result) => {
            if (result.isConfirmed) {

                const ulr = `http://localhost:5000/order/${userEmail}`;
                fetch(ulr, {
                    method: 'DELETE',
                    headers: {
                        'authorization': `Barer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Cancel Order!',
                                'Your order has been cancel',
                                'success'
                            )
                            refetch()
                        }
                    })

            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName.slice(0, 25)}</td>
            <td>{orderedQuantity}</td>
            <td>$ {price}</td>
            
            <td>
                { paid ? <>{transactionID}</> : 
                    <button  onClick={() => handleDEleteOrder()} className="btn btn-sm  text-2xl">< FcCancel /></button>}
            </td>
            <td>
                { paid ? <p>paid</p> : <button onClick={()=>navigate(`/dashboard/payment/${_id}`)} className="btn btn-sm  ">< MdOutlinePayment className='text-xl' /> pay </button>
                
                }
            </td>
            <td>
                {
                    statusPending ? " pending " : " shipped"
                }
            </td>
        </tr>
    );
};

export default MyOrderTable;