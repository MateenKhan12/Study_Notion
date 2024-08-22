import React, { useState } from 'react'
import Login from './components/StudentForm/Login'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import SignUp from "./components/StudentForm/SignUp";
import ResetPassword from './components/StudentForm/ResetPassword';
import ResendEmail from './components/StudentForm/ResendEmail';
import NewPassword from './components/StudentForm/NewPassword';
import ResetCompleted from './components/StudentForm/ResetCompleted';
import VerifyEmail from './components/StudentForm/VerifyEmail';
import HomePage from './components/Home/HomePage';




function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/resendemail" element={<ResendEmail />} />
        <Route path="/passwordcreated" element={<NewPassword />} />
        <Route path="/resetcomplete" element={<ResetCompleted />} />
        <Route path="/verification" element={<VerifyEmail />} />
        {/* <Route path="/homepage" element={<HomePage />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/catalog" element={<Login />} />
        {/* <Route path="/catalog" element={<SignUp />} />
        <Route path="/catalog" element={<VerifyEmail />} />
        <Route path="/catalog" element={<ResetCompleted />} /> */}
        
     
        

       
      </Routes>
    </Router>
  )
}

export default App
