import React from "react";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { HiTable } from "react-icons/hi";
import { ImHome } from "react-icons/im";
import { IoMdNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { manageState } from "../context/Context";

const SideNav = () => {
  const { openSidenav } = manageState();
  return (
    <aside
      className={` ${
        openSidenav ? "block" : "hidden"
      } fixed top-0 left-0 h-screen w-80 z-40 mt-4 ml-2 transition-transform translate-x-0 border border-gray-300 rounded-xl shadow-sm bg-white dark:bg-gray-900 xl:block`}
    >
      <div className="flex flex-col w-full items-center mx-auto font-bold mt-8 text-gray-900 dark:text-white">
        <h2>Olawale Azeez Dashboard</h2>
      </div>
      <div className="h-full overflow-y-auto px-3 py-4 bg-white dark:bg-black">
        <ul className="space-y-6">
          <li className="flex text-gray-500 dark:text-white font-semibold space-x-4 my-4 px-2 hover:bg-gray-100 dark:hover:bg-gray-500 py-3 rounded-lg active:bg-gray-900 dark:active:bg-gray-800 active:text-white">
            <ImHome size={20} />
            <span>Dashboard</span>
          </li>
          <li className="flex text-gray-500 dark:text-white font-semibold space-x-4 my-4 px-2 hover:bg-gray-100 dark:hover:bg-gray-500 py-3 rounded-lg active:bg-gray-900 dark:active:bg-gray-800 active:text-white">
            <RxAvatar size={20} />
            <span>Profile</span>
          </li>
          <li className="flex text-gray-500 dark:text-white font-semibold space-x-4 my-4 px-2 hover:bg-gray-100 dark:hover:bg-gray-500 py-3 rounded-lg active:bg-gray-900 dark:active:bg-gray-800 active:text-white">
            <HiTable size={20} />
            <span>Dashboard</span>
          </li>
          <li className="flex text-gray-500 dark:text-white font-semibold space-x-4 my-4 px-2 hover:bg-gray-100 dark:hover:bg-gray-500 py-3 rounded-lg active:bg-gray-900 dark:active:bg-gray-800 active:text-white">
            <IoMdNotifications size={20} />
            <span>Notifications</span>
          </li>
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