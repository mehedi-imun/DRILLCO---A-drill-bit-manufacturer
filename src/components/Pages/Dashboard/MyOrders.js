import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import MyOrderTable from './MyOrderTable';
const MyOrders = () => {
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth)
    const { data: products, isLoading, refetch } = useQuery('order', () => fetch(`https://stark-ravine-05913.herokuapp.com/order?userEmail=${user.email}`, {
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
        }))
    if (loading || isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>

                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>cancel order/ transaction iD</th>
                        <th>payment</th>
                        <th>status</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((product, index) => <MyOrderTable
                            key={product._id}
                            index={index}
                            product={product}
                            refetch={refetch}
                        >
                        </MyOrderTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;