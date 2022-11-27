import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login/Login';
import Home from './Pages/Home/Home/Home';
import HeaderLogo from './Pages/Shared/HeaderLogo/HeaderLogo';
import Foods from './Pages/Foods/Foods';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Checkout/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
import Reset from './Pages/Login/Reset/Reset';


function App() {
  return (
    <div className='app'>
      <HeaderLogo />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/foods' element={<Foods />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path='/reset' element={<Reset />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
