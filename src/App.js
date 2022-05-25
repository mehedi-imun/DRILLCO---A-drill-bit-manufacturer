
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Pages/Authentications/Login/Login';
import RequireAdmin from './components/Pages/Authentications/RequireAdmin/RequireAdmin';

import RequireAuth from './components/Pages/Authentications/RequireAuth/RequireAuth';
import Signup from './components/Pages/Authentications/SignUp/Signup';
import Blog from './components/Pages/Blog/Blog';
import AddProduct from './components/Pages/Dashboard/AddProduct';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import MakeAdmin from './components/Pages/Dashboard/MakeAdmin';
import ManageAllOrder from './components/Pages/Dashboard/ManageAllOrder';
import ManageProduct from './components/Pages/Dashboard/ManageProduct';
import MyOrders from './components/Pages/Dashboard/MyOrders';
import MyProfile from './components/Pages/Dashboard/MyProfile';
import MyReview from './components/Pages/Dashboard/MyReview';
import Payment from './components/Pages/Dashboard/Payment';
import Home from './components/Pages/Home/Home';
import MyPortfolio from './components/Pages/MyPortfolio/MyPortfolio';
import NotFound from './components/Pages/NotFoundPage/NotFound';

import Purchase from './components/Pages/Purchase/Purchase'
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/portfolio' element={<MyPortfolio/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard/>
        </RequireAuth>}>
        <Route index element={ <MyOrders/>}></Route>
        <Route path='payment/:id' element={<RequireAuth><Payment></Payment></RequireAuth>}></Route>
          <Route path='my-review' element={<MyReview />}></Route>
          <Route path='my-profile' element={<MyProfile />}></Route>
          <Route path='my-order' element={<MyOrders />}></Route>
          <Route path='make-admin' element={<RequireAdmin>
            <MakeAdmin />
          </RequireAdmin>}></Route>

          <Route path='manage-all-order' element={<RequireAdmin>
            <ManageAllOrder />
          </RequireAdmin>}></Route>
          <Route path='manage-product' element={<RequireAdmin>
            <ManageProduct />
          </RequireAdmin>}></Route>
          <Route path='add-product' element={<RequireAdmin>
            <AddProduct />
          </RequireAdmin>}></Route>

        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
