import React, { useEffect } from "react";

const row = [
  {
    no: "6",
    subject: "구매에 대한 적립금",
    price: "3,120 KRW",
    date: "22-07-01",

  },
  {
    no: "5",
    subject: "상품구매시 사용한 적립금",
    price: "2,840 KRW",
    date: "22-07-01",
  },
  {
    no: "4",
    subject: "구매에 대한 적립금",
    price: "7,530 KRW",
    date: "22-06-13",
  },
  {
    no: "3",
    subject: "구매에 대한 적립금",
    price: "2,840 KRW",
    date: "21-09-09",
  },
  {
    no: "2",
    subject: "상품구매시 사용한 적립금",
    price: "-3,150 KRW",
    date: "21-08-22",
  },
  {
    no: "1",
    subject: "적립금 복원(주문취소)",
    price: "3,150 KRW",
    date: "21-02-25",
  },
];

export default function Point() {
  return (
    <div className="mx-auto py-8 px-4 sm:px-6 lg:px-0">
      <h1 className="text-xl font-extrabold text-center tracking-tight text-gray-900 sm:text-2xl">Point</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:max-w-7xl mx-auto mt-12">
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
                <td className="px-4 py-4 text-center">{item.price}</td>
                <td className="px-4 py-4 text-center">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
