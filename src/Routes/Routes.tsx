import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Page/Home/Home";
import { SignIn } from "../Page/SignIn/SignIn";

export const RoutePath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
