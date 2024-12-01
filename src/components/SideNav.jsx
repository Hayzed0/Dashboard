import React from "react";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { HiTable } from "react-icons/hi";
import { ImHome } from "react-icons/im";
import { IoMdNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { manageState } from "../context/Context";
import { Link } from "react-router-dom";

const SideNav = () => {
  const { openSidenav, theme, bgColor } = manageState();
  const asideClass = `bg-${bgColor} ${
    openSidenav ? "block" : "hidden"
  } fixed top-0 left-0 h-screen w-80 z-40 ml-2 transition-transform translate-x-0 border border-gray-300 rounded-xl shadow-sm xl:block`;

  const dynamicClass = `text-gray-500 flex  dark:text-white font-semibold space-x-4 my-2 px-6 w-full py-3 rounded-lg focus:bg-color-${theme}-focus focus:text-color-${theme}-focus hover:bg-color-${theme}-hover hover:text-color-${theme}-hover`;

  return (
    <aside className={asideClass}>
      <div className="flex flex-col w-full items-center mx-auto font-bold mt-8 text-gray-500 dark:text-white">
        <h2>Olawale Azeez Dashboard</h2>
      </div>
      <div className="h-full overflow-y-auto px-3 py-4 ">
        <ul className="space-y-2">
          <Link to="/" className={dynamicClass}>
            <ImHome size={20} />
            <span>Dashboard</span>
          </Link>
          <Link to="/profile" className={dynamicClass}>
            <RxAvatar size={20} />
            <span>Profile</span>
          </Link>
          <Link to="/table" className={dynamicClass}>
            <HiTable size={20} />
            <span>Table</span>
          </Link>
          <Link to="/notifications" className={dynamicClass}>
            <IoMdNotifications size={20} />
            <span>Notifications</span>
          </Link>
        </ul>
        <div>
          <div className="flex text-gray-500 dark:text-white font-bold space-x-4 mt-10 mb-2 px-2 text-lg">
            <h2>Auth Pages</h2>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="flex text-gray-500 dark:text-white font-semibold space-x-4 my-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-500 py-3 rounded-lg active:bg-gray-900 dark:active:bg-gray-800 active:text-white">
                <GoSignIn size={20} />
                <span>Sign In</span>
              </li>
              <li className="flex text-gray-500 dark:text-white font-semibold space-x-4 my-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-500 py-3 rounded-lg active:bg-gray-900 dark:active:bg-gray-800 active:text-white">
                <GoSignOut size={20} />
                <span>Sign Out</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
