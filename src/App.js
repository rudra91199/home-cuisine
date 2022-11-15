import './App.css';
import { Routes ,Route} from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import Home from './Pages/Home/Home/Home';
import HeaderLogo from './Pages/Shared/HeaderLogo/HeaderLogo';
import Foods from './Pages/Foods/Foods';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div className='app'>
      <HeaderLogo/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/foods' element={<Foods />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
