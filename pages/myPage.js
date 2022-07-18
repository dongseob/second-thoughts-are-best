import Header from "./components/header";
import Footer from "./components/footer";
import React, { useState, useEffect } from "react";

const tabs = [
  { name: "My Account", href: "#", current: false, num: 0 },
  { name: "Company", href: "#", current: false, num: 1 },
  { name: "Team Members", href: "#", current: false, num: 2 },
  { name: "Billing", href: "#", current: false, num: 3 },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MyPage() {
  const [openTab, setOpenTab] = useState(0);
  useEffect(()=>{
    tabs[3].current=true
  },[openTab])

  return (
    <>
      <Header></Header>
      <div className="pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-base font-extrabold text-gray-900 sm:text-lg">
              jds3567@naver.com 님은 현재 일반회원 입니다.
            </h2>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 " />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-base leading-6 font-medium text-gray-500">
                      Cart
                    </dt>
                    <dd className="order-1 text-3xl font-extrabold text-gray-600">
                      0
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-base leading-6 font-medium text-gray-500">
                      Point
                    </dt>
                    <dd className="order-1 text-3xl font-extrabold text-gray-600">
                      2909<span className="text-sm">&nbsp;KRW</span>
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-base leading-6 font-medium text-gray-500">
                      Coupon
                    </dt>
                    <dd className="order-1 text-3xl font-extrabold text-gray-600">
                      2
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        </div>
        <div className="sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(tab.num);
                  }}
                  className={classNames(
                    tab.current
                      ? "border-gray-500 text-gray-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        content
        <div className={openTab === 0 ? "block" : "hidden"} id="link1">
          <p>
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits.
            <br />
            <br /> Dramatically visualize customer directed convergence without
            revolutionary ROI.
          </p>
        </div>
        <div className={openTab === 1 ? "block" : "hidden"} id="link2">
          <p>
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            robust ideas.
            <br />
            <br />
            Dynamically innovate resource-leveling customer service for state of
            the art customer service.
          </p>
        </div>
      </div> */}
      <Footer></Footer>
    </>
  );
}
