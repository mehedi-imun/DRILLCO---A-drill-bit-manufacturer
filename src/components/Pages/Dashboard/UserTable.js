import React from 'react';
import Swal from 'sweetalert2';

const UserTable = ({ user, refetch, index }) => {
    const { email, role } = user;

    const handleMakeAdmin = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be make admin!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, i make it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://drillco.onrender.com/user/admin/${email}`, {
                    method: 'PUT', headers: {
                        'authorization': `Barer ${localStorage.getItem('accessToken')}`
                    }
                }).then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {

                            refetch()

                            Swal.fire(
                                'made!',
                                'Your are make admin.',
                                'success'
                            )
                        }
                    })



            }
        })

    }
    const handleRemoveAdmin = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delete admin!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://drillco.onrender.com/admin/${email}`, {
                    method: 'delete',
                    headers: {
                        'authorization': `Barer ${localStorage.getItem('accessToken')}`
                    }
                }).then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'admin has been deleted.',
                                'success'
                            )
                        }
                    })




            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {role || <button
                    onClick={() => handleMakeAdmin()}
                    className="btn btn-sm btn-secondary">Make Admin</button>
                }
            </td>
            <td> {
                role ? <button onClick={() => handleRemoveAdmin()} className="btn btn-sm btn-error">Remove admin</button> :
                    <button className="btn btn-sm btn-disabled">normal user</button>
            }

            </td>

        </tr>
    );
};

export default UserTable;