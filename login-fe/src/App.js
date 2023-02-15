import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Main from './components/Main/Main';
import DeviceManagement from './components/DeviceManagement/DeviceManagement';


function App() {
  const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className='wrapper'> 
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/main' element={<Main />} />
          <Route path='/device-management' element={<DeviceManagement />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
