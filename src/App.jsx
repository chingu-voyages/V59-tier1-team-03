import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes, Route} from 'react-router-DOM'
import Roles from "./pages/Roles";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/roles" element={<Roles/>}/>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
