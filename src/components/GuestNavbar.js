import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Register", href: "/register" },
  { name: "About Us", href: "/register" },
  { name: "Results", href: "/register" },
  { name: "Voting", href: "/register" },
  { name: "Candidates", href: "/register" },
  { name: "Elections", href: "/register" },
  
];

const GuestNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-600 text-white p-4">
      <nav className="flex items-center justify-between lg:px-8">
        <div className="flex lg:flex-1 items-center">
          <a
            href="/"
            className="flex items-center text-2xl font-extrabold text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 12l-4 4-4-4" />
            </svg>
            CampusVote
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="p-2 text-xl"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 text-lg">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-semibold hover:text-indigo-300 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end text-lg">
          <a
            href="/login"
            className="font-semibold hover:text-indigo-300 transition duration-300"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-indigo-600 bg-opacity-80" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-72 sm:max-w-sm bg-white">
          <div className="flex items-center justify-between p-4">
            <a
            href="/"
            className="flex items-center text-2xl font-extrabold text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 12l-4 4-4-4" />
            </svg>
            CampusVote
          </a>
            <button
              type="button"
              className="text-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>
          <div className="mt-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 pl-4 text-lg font-semibold hover:bg-indigo-100 transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-4">
            <a
              href="/login"
              className="block py-2 pl-4 text-lg font-semibold hover:bg-indigo-100 transition duration-300"
            >
              Log in
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default GuestNavbar;
