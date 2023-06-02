import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import Register from "../../pages/Register";
import Course from "../../pages/Course";
import About from "../../pages/About";
import Article from "../../pages/Article";
import Login from "../../pages/Login";
import Payment from "../../pages/Payment";
import Form from "../../pages/Form";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/course" element={<Course />} />
        <Route path="/article" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
};

export default Router;
