/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import { SearchContext } from "../../LolApp";
import { useContext } from "react";

import useGetChampionsByTags from "../../hooks/useGetChampionsByTags";

const navigation = [
  { name: "All", href: "/", current: true },
  { name: "Assasins", href: "/assasins", current: false },
  { name: "Figthers", href: "/figthers", current: false },
  { name: "Mages", href: "/mages", current: false },
  { name: "Supports", href: "/supports", current: false },
  { name: "Tanks", href: "/tanks", current: false },
  { name: "Marksmen", href: "/marksmen", current: false },
  { name: "Login", href: "/login", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { search, setSearch } = useContext(SearchContext);
  return (
    <Disclosure as="nav" className="bg-gray-800 font-lato">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2  md:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://logodownload.org/wp-content/uploads/2014/09/lol-league-of-Legends-logo-1.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://logodownload.org/wp-content/uploads/2014/09/lol-league-of-Legends-logo-1.png"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:block md:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        onClick={() => {
                          setSearch("");
                        }}
                        key={item.name}
                        to={item.href}
                        className={
                          ({ isActive }) => {
                            console.log(isActive);
                            return (
                              "px-3 py-2 rounded-md text-sm font-medium " +
                              (isActive
                                ? "text-white bg-gray-900"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white ")
                            );
                          }
                          // classNames(
                          //   isActive
                          //     ? "bg-gray-900 text-white"
                          //     : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          //   "px-3 py-2 rounded-md text-sm font-medium  "
                          // )
                        }
                        // className={classNames(
                        //   item.current
                        //     ? "bg-gray-900 text-white"
                        //     : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        //   "px-3 py-2 rounded-md text-sm font-medium"
                        // )}
                        // aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex gap-2 items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <SearchBar />
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="http://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/Aatrox.png"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}