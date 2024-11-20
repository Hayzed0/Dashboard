import React from "react";
import { FaSignal, FaUserPlus, FaWallet } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import ReactApexChart from "react-apexcharts";
import Data from "../data/statistical-chart";
import { IoTime } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import projectsTableData from "../data/projectsTableData";

const Home = () => {
  const webView = Data.websiteViewData;
  const dailySales = Data.dailySalesData;
  const completedTask = Data.completedTaskData;

  return (
    <div className=" xl:ml-80 p-4 mt-6">
      <div className="flex flex-col items-center">
        {/* First grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
          <div className="flex flex-col rounded-lg border bg-white border-gray-300">
            <div className="flex justify-between items-center my-2 mx-4 ">
              <div className="flex bg-gray-900 rounded-md items-center p-2">
                <FaWallet size={25} className="text-white font-bold" />
              </div>
              <div className="flex flex-col items-end">
                <p className="text-gray-500 text-sm">Today's Money</p>
                <h2 className="text-gray-900 font-bold text-2xl">$53K</h2>
              </div>
            </div>
            <div className="flex items-start border-t border-gray-300 p-4">
              <h3 className="text-gray-500 space-x-2 text-lg">
                <span className="text-green-500 font-bold space-x-2">+55%</span>{" "}
                than last month
              </h3>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border bg-white border-gray-300">
            <div className="flex justify-between items-center my-2 mx-4 ">
              <div className="flex bg-gray-900 rounded-md items-center p-2">
                <HiUsers size={25} className="text-white font-bold" />
              </div>
              <div className="flex flex-col items-end">
                <p className="text-gray-500 text-sm">Today's Users</p>
                <h2 className="text-gray-900 font-bold text-2xl">2300</h2>
              </div>
            </div>
            <div className="flex items-start border-t border-gray-300 p-4">
              <h3 className="text-gray-500 space-x-2 text-lg">
                <span className="text-green-500 font-bold space-x-2">+3%</span>{" "}
                than last month
              </h3>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border bg-white border-gray-300">
            <div className="flex justify-between items-center my-2 mx-4 ">
              <div className="flex bg-gray-900 rounded-md items-center p-2">
                <FaUserPlus size={25} className="text-white font-bold" />
              </div>
              <div className="flex flex-col items-end">
                <p className="text-gray-500 text-sm">New Clients</p>
                <h2 className="text-gray-900 font-bold text-2xl">3462</h2>
              </div>
            </div>
            <div className="flex items-start border-t border-gray-300 p-4">
              <h3 className="text-gray-500 space-x-2 text-lg">
                <span className="text-green-500 font-bold space-x-2">+5%</span>{" "}
                than last month
              </h3>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border bg-white border-gray-300">
            <div className="flex justify-between items-center my-2 mx-4 ">
              <div className="flex bg-gray-900 rounded-md items-center p-2">
                <FaSignal size={25} className="text-white font-bold" />
              </div>
              <div className="flex flex-col items-end">
                <p className="text-gray-500 text-sm">Total Sales</p>
                <h2 className="text-gray-900 font-bold text-2xl">109,800</h2>
              </div>
            </div>
            <div className="flex items-start border-t border-gray-300 p-4">
              <h3 className="text-gray-500 space-x-2 text-lg">
                <span className="text-green-500 font-bold space-x-2">+15%</span>{" "}
                than last month
              </h3>
            </div>
          </div>
        </div>
        {/* Second grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 mt-12 w-full">
            <div className="flex flex-col mx-4 w-full">
              <ReactApexChart
                options={webView.options}
                series={webView.series}
                type="bar"
                height={250}
              />
              <div className="flex flex-col items-start ml-6 mb-2">
                <h2 className="text-lg font-bold">Website View</h2>
                <p className="text-sm text-gray-500">
                  Last Campaign Performance
                </p>
              </div>
            </div>
            <div className="w-full border-t border-gray-300 p-4">
              <p className="text-sm text-gray-500 flex items-center space-x-2">
                {" "}
                <span className="mr-1">
                  <IoTime />
                </span>{" "}
                Campaign sent 2 days ago
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 mt-12">
            <div className="flex flex-col mx-4 w-full">
              <ReactApexChart
                options={dailySales.options}
                series={dailySales.series}
                type="line"
                height={250}
              />
              <div className="flex flex-col items-start ml-6 mb-2">
                <h2 className="text-lg font-bold">Daily Sales</h2>
                <p className="text-sm text-gray-500">
                  15% increase in todays sales
                </p>
              </div>
            </div>
            <div className="w-full border-t border-gray-300 p-4">
              <p className="text-sm text-gray-500 flex items-center space-x-2">
                {" "}
                <span className="mr-1">
                  <IoTime />
                </span>
                updated 2 minutes ago
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 mt-12">
            <div className="flex flex-col mx-4 w-full">
              <ReactApexChart
                options={completedTask.options}
                series={completedTask.series}
                type="line"
                height={250}
              />
              <div className="flex flex-col items-start ml-6 mb-2">
                <h2 className="text-lg font-bold">Completeted Task</h2>
                <p className="text-sm text-gray-500">
                  Last Campaign Performance
                </p>
              </div>
            </div>
            <div className="w-full border-t border-gray-300 p-4">
              <p className="text-sm text-gray-500 flex items-center space-x-2">
                {" "}
                <span className="mr-1">
                  <IoTime />
                </span>{" "}
                Just Updated
              </p>
            </div>
          </div>
        </div>
        {/* table container */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 w-full mt-6">
          <div className="flex flex-col relative bg-white rounded-xl border shadow-sm border-gray-300 xl:col-span-2 overflow-hidden">
            <div className="flex relative items-center justify-between m-0 p-4 overflow-hidden">
              <div className="flex flex-col">
                <h3 className="font-bold">Projects</h3>
                <p className="flex items-center text-sm text-gray-500">
                  <span>
                    <IoTime />
                  </span>{" "}
                  30 done this month
                </p>
              </div>
              <div className="flex text-gray-500 font-bold">
                <BsThreeDotsVertical size={35} />
              </div>
            </div>
            <div className=" p-6 overflow-x-scroll px-0 pt-0 pb-2">
              <table className="table-auto w-full min-w-[640px]">
                <thead>
                  <tr className="text-xs text-gray-500 ">
                    <th className="border-b border-gray-300 py-3 px-6 text-left">
                      COMPANIES
                    </th>
                    <th className="border-b border-gray-300 py-3 px-6 text-left">
                      MEMBERS
                    </th>
                    <th className="border-b border-gray-300 py-3 px-6 text-left">
                      BUDGET
                    </th>
                    <th className="border-b border-gray-300 py-3 px-6 text-left">
                      COMPLETTION
                    </th>
                  </tr>
                </thead>

                {projectsTableData.map(
                  ({ img, name, members, budget, completion }, index) => (
                    <tbody key={index} className="space-y-12">
                      <tr>
                        <td className="flex border-b border-gray-300 py-3 px-5 text-left">
                          <div className="flex">
                            <img src={img} alt="" className="w-9 h-9" />
                          </div>
                          <h2 className="font-bold">{name}</h2>
                        </td>
                        <td className="border-b border-gray-300 py-13 px-5 text-left">
                          {members.map((data, key) => (
                            <img
                              key={key}
                              src={data.img}
                              alt={data.name}
                              className="inline-block object-cover object-center -ml-2.5 border-2 rounded-full w-6 h-6"
                            />
                          ))}
                        </td>
                        <td className=" border-b border-gray-300 py-3 px-5 text-left">
                          {budget}
                        </td>
                        <td className=" border-b border-gray-300 py-3 px-5 text-left">
                          <div className=" w-10/12">
                            <p className="text-xs text-gray-500">
                              {" "}
                              {completion}
                            </p>
                            <div className="flex flex-start h-1 rounded-x-lg bg-gray-300 w-full overflow-hidden">
                              <div
                                className={`flex justify-center ${
                                  completion === 100
                                    ? "bg-green-500"
                                    : "bg-blue-500"
                                } ${
                                  completion === 40
                                    ? "w-[40%]"
                                    : `w-[${completion}%]`
                                }`}
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  )
                )}
              </table>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
