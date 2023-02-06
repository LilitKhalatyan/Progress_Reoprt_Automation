import React from 'react';
import { Route, Routes } from "react-router-dom";
import MainLayout from '../../layout/MainLayout';
import AdminLayout from '../../layout/AdminLayout';
import PublicLayout from '../../layout/PublicLayout';
import LoginForm from '../LoginForm/LoginForm';
import Trainers from '../../pages/Trainers/Trainers';
import Courses from '../../pages/Courses/Courses';
import Subjects from '../../pages/Subjects/Subjects';
import Settings from '../../pages/Settings/Settings';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<PublicLayout />}>
            <Route>
              <Route path="/" element={<LoginForm />}></Route>
            </Route>
          </Route>
          <Route element={<AdminLayout />}>
            <Route>
              <Route path="/trainers" element={<Trainers />}></Route>
              <Route path="/courses" element={<Courses />}></Route>
              <Route path="/subjects" element={<Subjects />}></Route>
              <Route path="/settings" element={<Settings />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;