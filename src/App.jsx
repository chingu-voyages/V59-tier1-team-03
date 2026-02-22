import React, { useContext, useMemo, useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes, Route} from 'react-router-dom'
import RoleSelection from "./pages/Roles";
import Questions from "./pages/Questions";
import Summary from "./pages/Summary";
import QuestionProvider from "././contextProvider";

const App = () => {
  return (
    <>
      <QuestionProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/roles" element={<RoleSelection/>}/>
          <Route path="/questions/:role" element={<Questions/>}/>
          <Route path="/summary" element={<Summary/>}/>        
        </Routes>
        <Footer />
      </QuestionProvider>
    </>
  );
};

export default App;

