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

export default function Dumbclub() {
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
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-4  m-4">
            <div className="flex flex-col sm:flex-row justify-between">
              <img width="400px" src="/portfolio/dumbclub/Asset 1@3x.png" />
              <div className="flex justify-center">
                <div className="flex flex-col justify-center w-11/12 sm:w-64">
                  <span className="font-black text-center">DUMBCLUB</span>
                  <p className="text-sm font-light">With all the extra freetime me and my friends acquired during the lockdown we decided to put ourselves out there and start our own business. We landed on starting a clothing brand seeing it as an approachable business to start as our first. With zero expectations we launched a Shopify store, used Printful print on-demand, and started marketing on TikTok. <br/> <br/> Little did we know that two weeks in we would go viral and the business would grow into the six figures over the next year and a half.</p>
                  <div className="flex justify-end">
                    <Link className="text-gray-700 hover:text-black hover:underline" to="/portfolio/dumbclub">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between">
              <img width="400px" src="/portfolio/nigh/Nigh_feature 3.png" />
              <div className="flex justify-center">
                <div className="flex flex-col justify-center w-11/12 sm:w-64">
                  <span className="font-black text-center">Nigh Technologies</span>
                  <p className="text-sm font-light">After a fall from grace, I landed an opportunity to be on a small team that was brought on to help bring a local app startup into the public eye. Essentially, I was tasked with doing the same thing with Nigh that I had done with DUMBCLUB. And I did. Within the first 6 weeks I had taken their abissmal 90 followers to nearly ten-thousand.</p>
                  <div className="flex justify-end">
                    <Link className="text-gray-700 hover:text-black hover:underline" to="/portfolio/dumbclub">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="flex flex-col justify-center mb-5 sm:mr-5">
                <img width="600px" src="/portfolio/quick_contact/quick_contact.png" />
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col justify-center w-11/12 sm:w-64">
                  <span className="font-black text-center">Will C. Johnson vCard</span>
                  <p className="text-sm font-light">This is a solution I made for the Office of Advancement at CU Boulder to more efficiently share their contact information with potential donors. <br /> <br /> After I heard that they were getting ready to spend nearly $50 per employee for the service, I took the opportunity to interject and say, "I can do the same thing for about $8 a month for as many employees as you want." They gave me a week to give a project demo, after which I got the go ahead to spend my time and resources to make it the real deal for them to use in the field. <br /> <br /> Scan the QR Code to see how the contact card works.</p>
                  <div className="flex justify-end">
                    <Link className="text-gray-700 hover:text-black hover:underline" to="/portfolio/dumbclub">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
