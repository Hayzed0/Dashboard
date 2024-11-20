import React from "react";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import StateProvider from "./context/Context"
import Home from "./Pages/Home";

const App = () => {
  return (
    <StateProvider>
      <div className="bg-slate-50">
        <SideNav />
        <Navbar />
        <Home />
      </div>
    </StateProvider>
  );
};

export default App;
