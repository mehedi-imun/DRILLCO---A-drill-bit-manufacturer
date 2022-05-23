
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Pages/Authentications/Login/Login';
import RequireAuth from './components/Pages/Authentications/RequireAuth/RequireAuth';
import Signup from './components/Pages/Authentications/SignUp/Signup';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import MyOrders from './components/Pages/Dashboard/MyOrders';
import MyProfile from './components/Pages/Dashboard/MyProfile';
import MyReview from './components/Pages/Dashboard/MyReview';
import Home from './components/Pages/Home/Home';
import Purchase from './components/Purchase/Purchase';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard/>
        </RequireAuth>}>
        <Route index element={ <MyOrders/>}></Route>
          <Route path='my-review' element={<MyReview />}></Route>
          <Route path='my-profile' element={<MyProfile />}></Route>
          <Route path='my-order' element={<MyOrders />}></Route>

        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
