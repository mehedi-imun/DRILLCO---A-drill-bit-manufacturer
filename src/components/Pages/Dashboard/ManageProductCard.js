import React from 'react';
import Swal from 'sweetalert2';

const ManageProductCard = ({ product, refetch }) => {
    const { name, img, _id } = product

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delete product??",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete!'
        }).then((result) => {
            if (result.isConfirmed) {

                const ulr = `https://drillco.onrender.com/product/${_id}`;
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
                                'delete product!',
                                'Your product has been delete',
                                'success'
                            )
                            refetch()
                        }
                    })
            }
        })
    }
    return (
        <div className="card w-[300px] mb-12 bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{name}</h2>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleDelete()}
                        className="btn btn-secondary mt-3">DELETE</button>
                </div>
            </div>
        </div>
    );
};
export default ManageProductCard;