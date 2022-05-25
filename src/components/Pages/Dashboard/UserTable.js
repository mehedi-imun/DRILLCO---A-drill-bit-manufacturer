import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const UserTable = ({ user, refetch }) => {
    const { email, role } = user;

    const handleMakeAdmin = () => {

        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT', headers: {
                'authorization': `Barer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('successfully make admin')
                    refetch()
                }
            })

    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>
                {role || <button
                    onClick={() => handleMakeAdmin()}
                    className="btn btn-sm btn-secondary">Make Admin</button>
                }
            </td>
            <td><button className="btn btn-sm btn-error">Remove admin</button></td>
            <ToastContainer></ToastContainer>
        </tr>
    );
};

export default UserTable;