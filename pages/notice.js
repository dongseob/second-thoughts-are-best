import Header from "./components/header";
import Footer from "./components/footer";
import React, { useEffect } from "react";

const row = [
  {
    no: "4",
    subject: "22 FW ragnarok collection",
    name: "master",
    date: "22-09-01",
  },
  {
    no: "3",
    subject: "22 SS aurora collection",
    name: "master",
    date: "22-03-01",
  },
  {
    no: "2",
    subject: "21 FW paris collection",
    name: "master",
    date: "21-09-01",
  },
  {
    no: "1",
    subject: "21 SS bohemian collection",
    name: "master",
    date: "21-03-01",
  },
];

export default function Notice() {
  return (
    <>
      <Header></Header>

      <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:max-w-7xl mx-auto">
          <div className="p-4">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
              />
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
            <colgroup>
              <col width={10}></col>
              <col width={50}></col>
              <col width={20}></col>
              <col width={20}></col>
            </colgroup>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-4 text-center">
                  No.
                </th>
                <th scope="col" className="px-4 py-4 text-center">
                  Subject
                </th>
                <th scope="col" className="px-4 py-4 text-center">
                  Name
                </th>
                <th scope="col" className="px-4 py-4 text-center">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {row.map((item) => (
                <tr
                  key={item.no}
                  id={item.no}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-4 py-4 text-center">{item.no}</td>
                  <td className="px-4 py-4 break-words">{item.subject}</td>
                  <td className="px-4 py-4 text-center">{item.name}</td>
                  <td className="px-4 py-4 text-center">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
