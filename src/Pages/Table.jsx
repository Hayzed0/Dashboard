import React from "react";
import projectsTableData from "../data/projectsTableData";
import authorsTableData from "../data/authors-table-data";


const Table = () => {
  return (
    <div className="xl:ml-80 p-4 xl:min-h-screen">
      <div className="grid grid-cols-1 gap-6 w-full mt-6">
        <div className="flex flex-col relative bg-white rounded-xl border shadow-sm border-gray-300 xl:col-span-2 overflow-hidden">
          <div className="flex relative items-center justify-between m-0 p-4 overflow-hidden bg-gray-900 rounded-2xl">
            <div className="flex flex-col text-white py-4">
              <h3 className="font-bold">Authors</h3>
            </div>
          </div>
          <div className=" p-6 overflow-x-scroll px-0 pt-0 pb-2">
            <table className="table-auto w-full min-w-[640px]">
              <thead>
                <tr className="text-xs text-gray-500 ">
                  <th className="border-b border-gray-300 py-3 px-6 text-left">
                    Authors
                  </th>
                  <th className="border-b border-gray-300 py-3 px-6 text-left">
                    Function
                  </th>
                  <th className="border-b border-gray-300 py-3 px-6 text-left">
                    Status
                  </th>
                  <th className="border-b border-gray-300 py-3 px-6 text-left">
                    Employed
                  </th>
                </tr>
              </thead>

              {authorsTableData.map((data, index) => (
                <tbody key={index} className="space-y-12">
                  <tr>
                    <td className="flex border-b border-gray-300 py-3 px-5 text-left items-center space-x-2">
                      <div className="flex">
                        <img
                          src={data.img}
                          alt={data.name}
                          className="w-9 h-9"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h2 className="font-bold">{data.name}</h2>
                        <p className="text-sm text-gray-500">{data.email}</p>
                      </div>
                    </td>
                    <td className="border-b border-gray-300 py-13 px-5 text-left">
                    <p className=" font-bold text-gray-500">{data.job.slice(0,1)}</p>
                    <p className="text-xs text-green-950/50 font-bold">{data.job.slice(1,2)}</p>
                    </td>

                    <td className=" border-b border-gray-300 py-3">
                      <div className="w-10/12">
                        <p className={`${data.online ? "bg-green-500" : "bg-green-950/50"} text-sm rounded-md items-center justify-center px-2 w-14 h-6 text-white `}>
                          {data.online ? "online" : "Offline"}
                        </p>
                      </div>
                    </td>
                    <td className="border-b border-gray-300 py-13 px-5 text-left text-sm text-gray-500 font-bold">
                      {data.date}
                    </td>
                    <td className="text-sm font-bold text-gray-500">
                      <p>Edit</p>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 w-full mt-6">
        <div className="flex flex-col relative bg-white rounded-xl border shadow-sm border-gray-300 xl:col-span-2 overflow-hidden">
          <div className="flex relative items-center justify-between m-0 p-4 overflow-hidden bg-gray-900 rounded-2xl">
            <div className="flex flex-col text-white py-4">
              <h3 className="font-bold">Projects</h3>
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
                      <td className="flex border-b border-gray-300 py-3 px-5 text-left items-center space-x-2">
                        <div className="flex">
                          <img src={img} alt={name} className="w-9 h-9" />
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
                          <p className="text-xs text-gray-500"> {completion}</p>
                          <div className="flex flex-start h-1 rounded-x-lg bg-gray-300 w-full overflow-hidden">
                            <div
                              className={`flex justify-center ${
                                completion === 100
                                  ? "bg-green-500"
                                  : "bg-blue-500"
                              } ${
                                completion === 100
                                  ? "w-full"
                                  : `w-[${completion}%]`
                              }`}
                            >
                              {completion}
                            </div>
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
  );
};

export default Table;