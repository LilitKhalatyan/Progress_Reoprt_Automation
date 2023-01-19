import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from '../../layout/MainLayout';
import AuthLayout from '../../layout/AuthLayout';
import PublicLayout from '../../layout/PublicLayout';
import LoginForm from '../LoginForm/LoginForm';

function App() {
  return (
    <div className="App">
      <MainLayout />
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route>
              <Route path="/" element={<LoginForm />}></Route>
            </Route>
          </Route>
          <Route element={<AuthLayout />}>
            <Route>

            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
