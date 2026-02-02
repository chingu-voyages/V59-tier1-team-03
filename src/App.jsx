import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes, Route} from 'react-router-dom'
import RoleSelection from "./pages/Roles";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/roles" element={<RoleSelection/>}/>
      </Routes>

      <Footer />
      

    </>
  );
};

export default App;
