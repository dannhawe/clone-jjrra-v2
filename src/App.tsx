import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Dashboard/Profile';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import UserPage from './Pages/Login/UserPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserPage />} >
            <Route index element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>
          <Route path="profile" element={<Dashboard />}>
            <Route index element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
