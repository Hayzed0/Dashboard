import React from "react";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import StateProvider from "./context/Context"
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import { Outlet, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <StateProvider>
      <main className="bg-slate-50">
        <SideNav />
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </StateProvider>
  );
};

export default App;
