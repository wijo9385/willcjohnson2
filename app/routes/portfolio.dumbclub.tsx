import type { V2_MetaFunction } from "@remix-run/node";

import Collapsible from 'react-collapsible';

import {
  useState
} from 'react';


import {
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Will C. Johnson" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="hidden sm:flex fixed left-0 top-0 h-screen flex flex-col justify-center">
        <a target="_blank" href="https://github.com/wijo9385" className="text-gray-500 hover:text-gray-900 p-4">
          <svg height="32px" width="32px">
            <use xlinkHref="#Github"></use>
          </svg>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/william-johnson-504675218/" className="text-gray-500 hover:text-gray-900 p-4">
          <svg height="32px" width="32px">
            <use xlinkHref="#LinkedIn"></use>
          </svg>
        </a>
        <a target="_blank" href="https://instagram.com/will.johnso.n" className="text-gray-500 hover:text-gray-900 p-4">
          <svg height="32px" width="32px">
            <use xlinkHref="#Instagram"></use>
          </svg>
        </a>
      </div>
      <div className="flex flex-col">
        <nav className="flex-none">
          <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button onClick={() => { setOpen(!open) }} type="button" className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <svg height="30px" width="100px">
                      <use xlinkHref="#logo"></use>
                    </svg>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link to="/posts" className="text-gray-700 hover:bg-gray-300 rounded-md px-3 py-2 text-sm font-medium">Blog</Link>
                    <Link to="/resume" className="text-gray-700 hover:bg-gray-300 rounded-md px-3 py-2 text-sm font-medium">Resume</Link>
                    <Link to="/portfolio" className="text-gray-700 bg-gray-300 rounded-md px-3 py-2 text-sm font-medium">Portfolio</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Collapsible trigger="" open={open}>
            <div className="sm:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <Link to="/posts" className="text-gray-700 hover:bg-gray-300 rounded-md px-3 py-2 text-sm font-medium">Blog</Link>
                <Link to="/resume" className="text-gray-700 hover:bg-gray-300 block rounded-md px-3 py-2 text-sm font-medium">Resume</Link>
                <Link to="/portfolio" className="text-gray-700 hover:bg-gray-300 block rounded-md px-3 py-2 text-sm font-medium">Portfolio</Link>
              </div>
            </div>
          </Collapsible>
        </nav>
        <div className="flex flex-col mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
            <div className="bg-no-repeat bg-cover bg-center bg-top h-40 rounded-md" style={{ backgroundImage: 'url(/portfolio/dumbclub/CZ8A5465-Edit.png)' }}></div>
        </div>
      </div>
    </>
  );
}
