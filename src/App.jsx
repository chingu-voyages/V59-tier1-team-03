import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/landingPage";
import RoleSelection from "./screens/roleSelection";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes >
          <Route path="/" element={<LandingPage/>} />
          <Route path="/role-selection" element={<RoleSelection/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
