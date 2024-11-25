import React from "react";
import backgroundImg from "../img/background-image.png";
import team2 from "../img/team-2.jpeg";
import { FaFacebookF, FaHome, FaInstagram, FaSearch } from "react-icons/fa";
import { FaMessage, FaXTwitter } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import conversationsData from "../data/conversations-data";
import projectsData from "../data/projects-data";

const Profile = () => {
  return (
    <div className="xl:ml-80 p-4">
      <div
        className="relative flex flex-col h-60 rounded-xl bg-cover"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />
      <div className=" rounded-xl bg-white">
        <div className="flex flex-col  space-y-4 justify-between md:flex-row w-full">
          <div className="flex space-x-6 items-center w-full">
            <div className="flex">
              <img
                src={team2}
                alt="profile photo"
                className="w-20 h-20 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <h3 className="text-xl font-bold">Olawale Azeez</h3>
              </div>
              <p className="text-xs text-gray-500">CEO / Founder</p>
            </div>
          </div>
          <div className="flex space-x-4 max-w-[350px] items-center rounded-lg bg-gray-100 cursor-pointer ">
            <div className="flex">
              <button className="flex space-x-2 items-center  px-2 mx-2 hover:rounded-lg focus:rounded-lg  hover:bg-gray-50 focus:bg-gray-50">
                <FaHome />
                <h2>App</h2>
              </button>
              <button className="flex space-x-2 items-center mx-2 px-2  hover:rounded-lg focus:rounded-lg  hover:bg-white focus:bg-white">
                <RiMessage2Fill />
                <h2>Messages</h2>
              </button>
              <button className="flex space-x-2 items-center px-2 mx-2 hover:rounded-lg focus:rounded-lg  hover:bg-white focus:bg-white">
                <IoIosSettings />
                <h2>Settings</h2>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-6  gap-6 xl:grid-cols-3">
          <div className="flex flex-col space-y-6">
            <div className="flex">
              <h2 className="font-bold">Profile Settings</h2>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <p className="text-gray-500 text-xs font-bold">ACCOUNT</p>
              </div>
              <div className="flex items-center space-x-2 my-2">
                <label className="inline-flex items-center cursor-pointer mt-2">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-900 peer-checked:bg-gray-900"></div>
                </label>
                <p className="text-gray-500 text-sm">
                  Email me when someone follows me
                </p>
              </div>
              <div className="flex items-center space-x-2 my-2">
                <label className="inline-flex items-center cursor-pointer mt-2">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-900 peer-checked:bg-gray-900"></div>
                </label>
                <p className="text-gray-500 text-sm">
                  Email me when someone answered my post
                </p>
              </div>
              <div className="flex items-center space-x-2 my-2">
                <label className="inline-flex items-center cursor-pointer mt-2">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-900 peer-checked:bg-gray-900"></div>
                </label>
                <p className="text-gray-500 text-sm">
                  Email me when someone mentions me
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <p className="text-gray-500 text-xs font-bold">APPLICATION</p>
              </div>
              <div className="flex items-center space-x-2 my-2">
                <label className="inline-flex items-center cursor-pointer mt-2">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-900 peer-checked:bg-gray-900"></div>
                </label>
                <p className="text-gray-500 text-sm">
                  New Application launched
                </p>
              </div>
              <div className="flex items-center space-x-2 my-2">
                <label className="inline-flex items-center cursor-pointer mt-2">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-900 peer-checked:bg-gray-900"></div>
                </label>
                <p className="text-gray-500 text-sm">
                  New proposed Application
                </p>
              </div>
              <div className="flex items-center space-x-2 my-2">
                <label className="inline-flex items-center cursor-pointer mt-2">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-900 peer-checked:bg-gray-900"></div>
                </label>
                <p className="text-gray-500 text-sm">
                  Ready to lauch Application
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex font-bold">
                <h2>Profile Information</h2>
              </div>
              <div className="flex text-gray-500">
                <MdEdit />
              </div>
            </div>
            <div className="flex text-sm text-gray-500 border-b border-gray-200 py-6">
              <p>
                Hi, I'm Olawale Azeez, Decisions: If you can't decide, the
                answer is no. If two equally difficult paths, choose the one
                more painful in the short term (pain avoidance is creating an
                illusion of equality).
              </p>
            </div>
            <div className="flex flex-col space-y-2 mt-6">
              <div className="flex  space-x-12">
                <h2 className="font-bold">Name:</h2>
                <p className=" text-gray-500">Olawale Azeez</p>
              </div>
              <div className="flex  space-x-12">
                <h2 className="font-bold">Contact:</h2>
                <p className=" text-gray-500">+44744378062</p>
              </div>
              <div className="flex  space-x-12">
                <h2 className="font-bold">Email:</h2>
                <p className=" text-gray-500">olawale@mail.com</p>
              </div>
              <div className="flex  space-x-12">
                <h2 className="font-bold">Country:</h2>
                <p className=" text-gray-500">United Kingdom</p>
              </div>

              <div className="flex  space-x-12 items-center ">
                <h2 className="font-bold">Socials:</h2>
                <div className="flex space-x-4">
                  <FaFacebookF className="text-blue-500" />
                  <FaXTwitter className="text-gray-900" />
                  <FaInstagram className="text-red-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex font-bold">
              <h2>Platform Settings</h2>
            </div>

            {conversationsData.map((data, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src={data.img}
                      alt=""
                      className="w-16 h-16 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-bold">{data.name}</h2>
                    <p className="text-gray-500 text-sm">{data.message}</p>
                  </div>
                </div>
                <div className="mr-6">
                  <button className="font-semibold text-sm">Reply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex ">
            <h2 className="font-bold">Projects</h2>
          </div>
          <div className="flex mt-4">
            <p className="text-sm text-gray-500">Architeture Designs</p>
          </div>
          <div  className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-4">
          {
            projectsData.map(({img, title, tag, description,members}, index) => (
             
                <div key={index} className="flex flex-col">
                  <div className="flex">
                    <img src={img} alt={title} className="rounded-lg" />
                  </div>
                  <div className="flex text-gray-500 text-sm mt-4">
                    <p>{tag}</p>
                  </div>
                  <div className="text-lg font-bold mt-4">
                    <h1>{title}</h1>
                  </div>
                  <div className="flex">
                    <p className="text-sm text-gray-500 mt-4">
                     {description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <button className="px-4 py-2 items-center border hover:border-gray-100 focus:ring-2 bg-white rounded-xl font-bold">
                        View Project
                      </button>
                    </div>
                    <div>
                     {
                        members.map((data,index) => (
                            <img
                            key={index}
                            src={data.img}
                            alt={data.name}
                            className="inline-block object-cover object-center -ml-2.5 border-2 rounded-full w-6 h-6"
                          />
                        ))
                     }
                    </div>
                  </div>
                </div>
             
            ))
          }
           </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
