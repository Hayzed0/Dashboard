import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="xl:ml-80">
      <div className="flex  flex-col space-y-6 justify-between p-6 xl:flex-row xl:items-center">
        <p className="flex text-sm text-gray-500 items-center">
          © 2024, made with<span><FaHeart className="text-red-500 w-3 h-3" /></span><strong>Olawale Azeez</strong>for a better web.
        </p>
        <div className="flex space-x-4 text-sm text-gray-500">
          <p>Olawale Azeez</p>
          <p>About us</p>
          <p>Blog</p>
          <p>License</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
