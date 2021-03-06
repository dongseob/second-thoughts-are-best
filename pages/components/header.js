import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import "../../api/firebase";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  XIcon,
} from "@heroicons/react/outline";

const solutions = [
  {
    name: "Original",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/origianl",
    // icon: ChartBarIcon,
  },
  {
    name: "Notice",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/notice",
    // icon: CursorClickIcon,
  },
];

const products = [
  {
    id: 1,
    name: "Zeroize 1/2 T-Shirt",
    href: "#",
    color: "White",
    size: "Medium",
    imageSrc: "/images/original/Zeroize/Zeroize1.png",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Zeroize 1/2 T-Shirt",
    href: "#",
    color: "White",
    size: "Large",
    imageSrc: "/images/original/Zeroize/Zeroize1.png",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const auth = getAuth();
  const user = auth.currentUser;
  const [userEmail, setUserEmail] = useState(""); //로그인한 유저의 이메일주소
  const [isLogined, setIsLogined] = useState(false); //로그인 상태 true:접속 / false:미접속

  const logOut = () => {
    if (window.confirm("로그아웃 처리 하시겠습니까?")) {
      signOut(auth)
        .then(() => {
          location.href = "/";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    } else {
      return;
    }
  };

  useEffect(() => {
    //로그인 되었는지 확인하기
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //로그인일시
        const uid = user.uid;
        setUserEmail(user.email);
        setIsLogined(true);
        console.log("로그인 상태");
      } else {
        //미로그인일시
        setIsLogined(false);
        console.log("미로그인 상태");
      }
    });
  });

  return (
    <Popover className="relative bg-white" id="headerTarget">
      <Head>
        <title>second thoughts are best</title>
        <meta name="description" content="second thoughts are best" />
        <link rel="icon" href="/images/second-thoghts-are-best_favicon.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="남자옷, 남성의류, 패션, 스타일, 자체제작,"
        ></meta>
        <meta property="og:title" content="second thoughts are best" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://second-thoughts-are-best.vercel.app/"
        />
      </Head>
      <div
        className="mx-auto px-4 sm:px-6 border-b border-slate-900/5"
        id="headerTarget2"
      >
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/.">
              <span className="sr-only">Workflow</span>
              <Image
                className="h-8 w-auto sm:h-10"
                src="/images/second-thoghts-are-best_logo.svg"
                alt=""
                height={30}
                width={300}
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link href="/origianl">
              <a
                href="#"
                className="text-base font-medium text-gray-900 drop-shadow-lg hover:line-through"
              >
                Original
              </a>
            </Link>

            <Link href="/notice">
              <a
                href="#"
                className="text-base font-medium text-gray-900 drop-shadow-lg hover:line-through"
              >
                Notice
              </a>
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    )}
                  ></Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  ></Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {isLogined === false ? (
              <>
                <Link href="/signIn">
                  <a
                    href="#"
                    className="mx-3 whitespace-nowrap text-sm font-medium text-gray-900 drop-shadow-lg hover:line-through"
                  >
                    Sign in
                  </a>
                </Link>
                <Link href="/signUp">
                  <a
                    href="#"
                    className="mx-3 whitespace-nowrap text-sm font-medium text-gray-900 drop-shadow-lg hover:line-through"
                  >
                    Sign up
                  </a>
                </Link>
              </>
            ) : (
              <>
                <p>
                  <span className="text-sm">hello,</span>&nbsp;{userEmail}
                </p>
                <a
                  href="#"
                  onClick={logOut}
                  className="mx-3 whitespace-nowrap text-sm font-medium text-gray-900 drop-shadow-lg hover:line-through"
                >
                  Sign out
                </a>
                <Link href="/myPage">
                  <a
                    href="#"
                    className="mx-3 whitespace-nowrap text-sm font-medium text-gray-900 drop-shadow-lg hover:line-through"
                  >
                    Mypage
                  </a>
                </Link>
                <Popover.Button className="outline-none">
                  {/* <Link href="/cart"> */}
                  <a
                    href="#"
                    className="mx-3 whitespace-nowrap text-sm font-medium text-gray-900 drop-shadow-lg hover:line-through"
                  >
                    Cart
                  </a>
                  {/* </Link> */}
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel className="z-50 absolute top-16 inset-x-0 mt-px pb-6 bg-white shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-4 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                    <h2 className="sr-only">Shopping Cart</h2>

                    <form className="max-w-2xl mx-auto px-4">
                      <ul role="list" className="divide-y divide-gray-200">
                        {products.map((product) => (
                          <li
                            key={product.id}
                            className="py-6 flex items-center"
                          >
                            <Image
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="flex-none w-16 h-16 rounded-md border border-gray-200"
                              width={100}
                              height={120}
                            />
                            <div className="ml-4 flex-auto">
                              <h3 className="font-medium text-gray-900">
                                <a href={product.href}>{product.name}</a>
                              </h3>
                              <p className="text-gray-500">{product.color}</p>
                              <p className="text-gray-500">{product.size}</p>
                            </div>
                          </li>
                        ))}
                      </ul>

                      <Link href="/checkOut">
                        <button
                          type="button"
                          className="w-full bg-gray-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
                        >
                          Checkout
                        </button>
                      </Link>

                      <Link href="/myPage">
                        <p className="mt-6 text-center">
                          <a
                            href="#"
                            className="text-sm font-medium text-gray-600 hover:text-gray-500"
                          >
                            View Shopping Cart
                          </a>
                        </p>
                      </Link>
                    </form>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto"
                    src="/images/second-thoghts-are-best_logo.svg"
                    alt="Workflow"
                    height={30}
                    width={300}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 hover:line-through"
                    >
                      {/* <item.icon className="flex-shrink-0 h-6 w-6 text-gray-900" aria-hidden="true" /> */}
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {isLogined === false ? (
                    <>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-500 hover:line-through"
                      >
                        Sign in
                      </a>
                      &emsp;/&emsp;
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-500 hover:line-through"
                      >
                        Sign up
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href="#"
                        onClick={logOut}
                        className="text-gray-600 hover:text-gray-500 hover:line-through"
                      >
                        Sign out
                      </a>
                      &emsp;/&emsp;
                      <Link href="/myPage">
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-500 hover:line-through"
                        >
                          Mypage
                        </a>
                      </Link>
                      &emsp;/&emsp;
                      <Link href="/myPage">
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-500 hover:line-through"
                        >
                          Cart
                        </a>
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
