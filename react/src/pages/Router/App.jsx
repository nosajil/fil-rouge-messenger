import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopPage } from '../ShopPage';
import { TchatPage } from '../TchatPage';
import { UserPage } from '../UserPage';
import { LoginPage } from '../Auth/LoginPage';
import { RegisterPage } from '../Auth/RegisterPage';
import { ErrorPage } from '../../components/ErrorPage';
import { Navbar } from '../../components/Navbar';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="AppRoutes">
        <Navbar />

        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/tchat' element={<TchatPage />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}
