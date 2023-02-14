import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import PublicLayout from "./layout/PublicLayout";
import LoginForm from "./components/LoginForm/LoginForm";
import Trainers from "./pages/Trainers/Trainers";
import Groups from "./pages/Groups/Groups";
import Students from "./pages/Students/Students";
import Subjects from "./pages/Subjects/Subjects";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<PublicLayout />}>
            <Route path="/login" element={<LoginForm />}></Route>
          </Route>
          <Route element={<AdminLayout />}>
            <Route path="/" element={<Groups />}></Route>
            <Route path="/trainers" element={<Trainers />}></Route>
            <Route path="/groups" element={<Groups />}></Route>
            <Route path="/students" element={<Students />}></Route>
            <Route path="/subjects" element={<Subjects />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
