
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Pages/Authentications/Login/Login';
import RequireAuth from './components/Pages/Authentications/RequireAuth/RequireAuth';
import Signup from './components/Pages/Authentications/SignUp/Signup';
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
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
