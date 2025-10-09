import { SpeedInsights } from '@vercel/speed-insights/react';
import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
const App = () => {
  const { authUser } = useContext(AuthContext);

  return (
    <div className='bg-[url("https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760028436/bgImage_xgevok.svg")] bg-contain'>
      <Toaster />
      <Routes>
        <Route
          path='/'
          element={authUser ? <HomePage /> : <Navigate to='/login' />}
        />
        <Route
          path='/login'
          element={!authUser ? <LoginPage /> : <Navigate to='/' />}
        />
        <Route
          path='/profile'
          element={authUser ? <ProfilePage /> : <Navigate to='/login' />}
        />
      </Routes>
      <SpeedInsights />
    </div>
  );
};

export default App;
