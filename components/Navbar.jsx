"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/farranlend-white.webp";
import profileDefault from "@/assets/images/profile.png";
import { FaGoogle } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathName = usePathname();

  return (
    <nav className="bg-purple-900 border-b border-purple-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link className="flex flex-shrink-0 items-center" href="/">
              <Image
                className="h-10 w-auto"
                src={logo}
                alt="PropertyPulse"
                priority
              />
            </Link>
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-2 mr-10">
                <Link
                  href="/"
                  className={`${
                    pathName === "/" ? "border-b-2 " : ""
                  }text-white  hover:-translate-x-1 ease-in-out duration-200 hover:text-white rounded-md px-3 py-2 `}
                >
                  فرنا
                </Link>
                <Link
                  href="/creditGuide"
                  className={`${
                    pathName === "/creditGuide" ? "border-b-2 " : ""
                  }text-white  hover:-translate-x-1 ease-in-out duration-200 hover:text-white rounded-md px-3 py-2 `}
                >
                  چطور وام بگیرم؟
                </Link>
                <Link
                  href="/guide"
                  className={`${
                    pathName === "/guide" ? "border-b-2 " : ""
                  }text-white  hover:-translate-x-1 ease-in-out duration-200 hover:text-white rounded-md px-3 py-2 `}
                >
                  راهنما
                </Link>
                <Link
                  href="/blog"
                  className={`${
                    pathName === "/blog" ? "border-b-2 " : ""
                  }text-white  hover:-translate-x-1 ease-in-out duration-200 hover:text-white rounded-md px-3 py-2 `}
                >
                  بلاگ
                </Link>
                {isLoggedIn && (
                  <Link
                    href="/properties/add"
                    className={`${
                      pathName === "/properties/add" ? "border-b-4" : ""
                    }text-white  hover:-translate-x-1 ease-in-out duration-200 hover:text-white rounded-md px-3 py-2 `}
                  ></Link>
                )}
              </div>
            </div>
          </div>

          {!isLoggedIn && (
            <div className="hidden md:block md:ml-6">
              <div className="flex items-center">
                <button className="flex items-center text-white border-2 rounded-md px-3 py-2 hover:bg-purple-50 ease-in-out duration-200  hover:text-purple-900 ">
                  <Link href="/login">
                    <span> ورود / ثبت نام </span>
                  </Link>
                </button>
              </div>
            </div>
          )}

          {isLoggedIn && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              <Link href="messages" className="relative group">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  2
                </span>
              </Link>
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="h-8 w-8 rounded-full"
                      src={profileDefault}
                      alt=""
                      priority
                    />
                  </button>
                </div>
                {isProfileMenuOpen && (
                  <div
                    id="user-menu"
                    className=" absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </Link>
                    <Link
                      href="/properties/saved"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                    >
                      Saved Properties
                    </Link>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className={`${
                pathName === "/" ? "border-1" : ""
              } text-white block rounded-md px-3 py-2 text-base font-medium hover:-translate-y-1 ease-in-out duration-200 `}
            >
              فرنا
            </Link>
            <Link
              href="/creditGuide"
              className={`${
                pathName === "/properties" ? "border-1 " : ""
              } text-white block rounded-md px-3 py-2 text-base font-medium hover:-translate-y-1 ease-in-out duration-200`}
            >
              چگونه از بگیریم؟
            </Link>
            <Link
              href="/guide"
              className={`${
                pathName === "/guide" ? "border-1 " : ""
              } text-white block rounded-md px-3 py-2 text-base font-medium hover:-translate-y-1 ease-in-out duration-200`}
            >
              راهنما
            </Link>
            <Link
              href="/blog"
              className={`${
                pathName === "/blog" ? "border-1 " : ""
              } text-white block rounded-md px-3 py-2 text-base font-medium hover:-translate-y-1 ease-in-out duration-200`}
            >
              بلاگ
            </Link>

            {!isLoggedIn && (
              <button className="flex items-center text-white border-2 hover:bg-blue rounded-md px-3 py-2">
                <Link href="/login">
                  <span> ورود / ثبت نام </span>
                </Link>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
