import React from "react";
import SideNav from "./SideNav";
import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import {
  IoCloseSharp,
  IoPersonCircle,
  IoSettingsOutline,
  IoTime,
} from "react-icons/io5";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { manageState } from "../context/Context";
import Team2 from "../../src/img/team-2.jpeg";



const Navbar = () => {

  const {
    isOpen,
    handleDashboardConfigurator,
    handleOpenSidenav,
    handleOpenNotification,
    notificationIsOpen,
    handleChangeColor,
    toggleNavbar,
    navbarToggler,
    theme,
    handleThemeChange,
  } = manageState();
 
  return ( 
    <div className={`xl:ml-80 p-4 ${navbarToggler ? "rounded-3xl border bg-white shadow-sm mt-12 mx-4": "rounded-none shadow-none border-0 mt-0 mx-0"}`}>
      <div className="flex flex-col-reverse justify-between md:flex-row md:items-center">
        <div className="flex flex-col items-start md:items-center justify-start space-y-4">
          <div className="flex flex-col capitalize">
            <ol className="flex flex-col w-full">
              <li className="flex items-center space-x-4">
                <p className="text-sm font-semibold text-gray-500">Dashboard</p>
                <span className="font-semibold"> /</span>
                <p className="text-sm font-semibold">Home</p>
              </li>
              <li className="flex">
                <p className="font-bold">Home</p>
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-row space-x-2 justify-between items-center md:space-x-4 md:justify-normal">
          <div className="flex w-[200px] h-10">
            <input
              type="search"
              className="w-full h-full border border-gray-100 outline outline-gray-200 focus:outline-gray-900 px-2 rounded-md placeholder:text-sm placeholder:font-semibold"
              placeholder="Search"
            />
          </div>
          <div className=" relative flex space-x-4 md:space-x-4">
            <button
              onClick={handleOpenSidenav}
              className="flex-row cursor-pointer xl:hidden rounded-md p-2 hover:bg-gray-200"
            >
              <RxHamburgerMenu size={22} className="text-gray-500 " />
            </button>
            <div className="flex cursor-pointer items-center space-x-2 p-2 rounded-md hover:bg-gray-200">
              <IoPersonCircle size={22} className="text-gray-500" />
              <span className="text-sm font-bold text-gray-500 hidden lg:inline-block">
                Sign in
              </span>
            </div>
            <div className="relative flex">
              <button
                onClick={handleOpenNotification}
                className="flex cursor-pointer rounded-md p-2 hover:bg-gray-200"
              >
                <IoMdNotifications size={22} className="text-gray-500" />
              </button>
              {notificationIsOpen && (
                <div className="absolute top-10 right-0 z-50 bg-white w-60 block transition-transform translate-x-0 ease-out duration-300 shadow-md border-2">
                  <div className="flex flex-col items-start my-2">
                    <div className="flex space-x-2 items-center ml-2 mt-2">
                      <img
                        src={Team2}
                        alt="Image of a man"
                        className="rounded-full w-10 h-10 "
                      />
                      <div className="flex flex-col">
                        <div className="flex space-x-2">
                          <h5 className="font-semibold text-sm">New Message</h5>
                          <p className="text-sm text-gray-500">from Laur</p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-xs text-gray-500 inline-flex items-center space-x-6">
                            {" "}
                            <span className="p-1">
                              <IoTime />
                            </span>
                            15 minutes ago
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 items-center ml-2 mt-2">
                      <img
                        src={Team2}
                        alt="Image of a man"
                        className="rounded-full w-10 h-10 "
                      />
                      <div className="flex flex-col">
                        <div className="flex space-x-2">
                          <h5 className="font-semibold text-sm">New Message</h5>
                          <p className="text-sm text-gray-500">from Laur</p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-xs text-gray-500 inline-flex items-center space-x-6">
                            {" "}
                            <span className="p-1">
                              <IoTime />
                            </span>
                            15 minutes ago
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 items-center ml-2 mt-2">
                      <img
                        src={Team2}
                        alt="Image of a man"
                        className="rounded-full w-10 h-10 "
                      />
                      <div className="flex flex-col">
                        <div className="flex space-x-2">
                          <h5 className="font-semibold text-sm">New Message</h5>
                          <p className="text-sm text-gray-500">from Laur</p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-xs text-gray-500 inline-flex items-center space-x-6">
                            {" "}
                            <span className="p-1">
                              <IoTime />
                            </span>
                            15 minutes ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex">
              <button
                onClick={handleDashboardConfigurator}
                className="flex cursor-pointer rounded-md hover:bg-gray-200 p-2"
              >
                <IoMdSettings size={22} className="text-gray-500" />
              </button>
              {isOpen && (
                <aside className={`fixed top-0 right-0 h-screen w-96 z-40 mr-0 transition-transform cursor-pointer duration-300 border border-gray-300 shadow-sm bg-white dark:bg-gray-900 block ${isOpen ? "translate-x-0" : "translate-x-96"}`}>
                  <div className="flex flex-row items-center  mt-4 justify-between">
                    <div className="flex flex-col items-start ml-4 mt-4">
                      <h2 className="text-xl font-bold">
                        Dashboard Configurator
                      </h2>
                      <p className="text-gray-500">See Dashboard Options</p>
                    </div>
                    <button
                      onClick={handleDashboardConfigurator}
                      className="flex items-end mt-4 mr-6 hover:bg-gray-200 p-2 rounded-md"
                    >
                      <IoCloseSharp size={22} className="text-gray-500" />
                    </button>
                  </div>
                  <div className="flex flex-col mt-16 ml-4 space-y-2">
                    <h3 className="font-bold text-xl">SideNav Colors</h3>
                    <div className="flex space-x-2">
                      <button className="focus:ring-2 focus:ring-gray-900 rounded-full" onClick={() => handleThemeChange("theme1")}>
                        <FaCircle size={22} className="text-gray-100"/>
                      </button>
                      <button className="focus:ring-2 focus:ring-gray-200 rounded-full" onClick={() => handleThemeChange("theme2")}>
                        <FaCircle size={22} className="text-gray-900" />
                      </button>
                      <button className="focus:ring-2 focus:ring-green-200 rounded-full" onClick={() => handleThemeChange("theme3")}>
                        <FaCircle size={22} className="text-green-500" />
                      </button>
                      <button className="focus:ring-2 focus:ring-orange-200 rounded-full" onClick={() => handleThemeChange("theme4")}>
                        <FaCircle size={22} className="text-orange-500" />
                      </button>
                      <button className="focus:ring-2 focus:ring-red-200 rounded-full" onClick={() => handleThemeChange("theme5")}>
                        <FaCircle size={22} className="text-red-500" />
                      </button>
                      <button className="focus:ring-2 focus:ring-pink-200 rounded-full" onClick={() => handleThemeChange("theme6")}>
                        <FaCircle size={22} className="text-pink-500" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col mt-16 ml-4 space-y-2">
                    <h3 className="font-bold text-xl">SideNav Types</h3>
                    <p className="text-sm text-gray-500">
                      Choose between 3 different SideNav types
                    </p>
                    <div className="flex items-start space-x-3">
                      <button className="px-4 py-2 font-semibold text-lg focus:bg-gray-900 focus:text-white bg-transparent border items-center border-gray-900 active:bg-gray-900 rounded-lg active:text-white hover:bg-gray-900 hover:text-white" onClick={()=>handleThemeChange("theme1")}>
                        Dark
                      </button>
                      <button className="px-4 py-2 font-semibold text-lg focus:bg-gray-900 focus:text-white bg-transparent border items-center border-gray-900 active:bg-gray-900 rounded-lg active:text-white hover:bg-gray-900 hover:text-white">
                        Transparent
                      </button>
                      <button className="px-4 py-2 font-semibold text-lg  focus:bg-gray-900 focus:text-white bg-transparent border items-center border-gray-900 active:bg-gray-900 rounded-lg active:text-white hover:bg-gray-900 hover:text-white" onClick={()=>handleThemeChange("theme2")}>
                        white
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-12 mx-6 border-y border-gray-500 py-6">
                    <div className="flex">
                      <h3 className="text-gray-900 font-semibold text-xl">
                        Navbar Fixed
                      </h3>
                    </div>
                    <label  className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer"  onClick={toggleNavbar}/>
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-900 peer-checked:bg-gray-900"></div>
                    </label>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
