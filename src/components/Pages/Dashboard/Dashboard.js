import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin]=useAdmin(user)
    return (
        <div className="drawer drawer-mobile ">
            <input id="sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Outlet/>
            </div>
            <div className="drawer-side ">
                <label htmlFor="sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    
                    <li><Link  className=' btn btn-ghost' to='/dashboard/my-order'>My orders</Link></li>
                    <li><Link  className=' btn btn-ghost' to='/dashboard/my-review'>Add A Review</Link></li>
                    <li><Link  className=' btn btn-ghost' to='/dashboard/my-profile'>My Profile</Link></li>
                    {admin && <>
                        <li><Link  className=' btn btn-ghost ' to='/dashboard/users'>users</Link></li>
                        <li><Link  className=' btn btn-ghost' to='/dashboard/add-doctors'>add doctors</Link></li>
                        <li><Link  className=' btn btn-ghost' to='/dashboard/manage-doctors'>manage doctors</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;