import React from "react";
import Home from "./Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import SignUp from "./components/SignUp";
import  { Toaster } from "react-hot-toast";
import { useAuth } from "./Context/AuthProvider";
import Login from "./components/Login";
const App = () => {
  const [AuthUser, setAuthUser] = useAuth();
  console.log(AuthUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={AuthUser? <Courses /> : <Navigate to="/signup"/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
