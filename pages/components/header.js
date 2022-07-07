import Link from "next/link";
import Image from "next/image";

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
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Popover className="relative bg-white" id="headerTarget">
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
            <a
              href="#"
              className="mx-3 whitespace-nowrap text-sm font-medium text-gray-900 drop-shadow-lg hover:line-through"
            >
              Sign in
            </a>
            <a
              href="#"
              className="mx-3 whitespace-nowrap text-sm font-medium text-gray-900 drop-shadow-lg hover:line-through"
            >
              Mypage
            </a>
            <a
              href="#"
              className="mx-3 whitespace-nowrap text-sm font-medium text-gray-900 drop-shadow-lg hover:line-through"
            >
              Cart
            </a>
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
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
