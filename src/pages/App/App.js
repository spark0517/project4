import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import userService from "../../utils/userService";
import Feed from "../Feed/Feed";
import Layout from "../Layout/Layout";

function App() {
  const [user, setUser] = useState(userService.getUser());

  function handleSignUpOrLogin() {
    setUser(userService.getUser());
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Feed />}></Route>
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />

        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route path="/:username" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;