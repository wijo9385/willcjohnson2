import type { V2_MetaFunction } from "@remix-run/node";

import {
    Link,
    useLoaderData
} from "@remix-run/react";

import Collapsible from 'react-collapsible';

import {
    useState
} from 'react';

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Will C. Johnson" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Resume() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="hidden lg:flex fixed left-0 top-0 h-screen flex flex-col justify-center">
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
            <nav>
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
                                    <Link to="/resume" className="text-gray-700 bg-gray-300 rounded-md px-3 py-2 text-sm font-medium">Resume</Link>
                                    <Link to="/portfolio" className="text-gray-700 hover:bg-gray-300 rounded-md px-3 py-2 text-sm font-medium">Portfolio</Link>
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
                <div className="flex flex-col sm:flex-row justify-center">
                    <div className="flex justify-center">
                        <img className="rounded-full p-3" src={"/profile/IMG_1923.jpeg"} width="300px" height="300px" />
                    </div>
                    <div className="flex flex-col justify-center text-center sm:text-left">
                        <span className="text-5xl font-bold">Will C. Johnson</span>
                        <span className="text-2xl font-light text-gray-700">wijo9385@colorado.edu</span>
                        <span className="text-2xl font-light text-gray-700">(720) 463-4762</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-3xl font-bold p-3">Education</span>
                    <hr />
                    <div className="m-2">
                        <div className="m-3 flex flex-col">
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-2xl font-bold">University of Colorado Boulder</span>
                                <span className="text-lg italic">Current Student</span>
                            </div>
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-xl"></span>
                                <span className="text-lg">Boulder, CO</span>
                            </div>
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-xl">Computer Science, BS</span>
                                <span className="text-lg">3.343 GPA</span>
                            </div>
                            <span className="text-lg">Relevant Coursework:</span>
                            <ul className="list-disc list-inside text-sm">
                                <li className="inline mr-1">CSCI 2270: Data Structures</li>
                                <li className="inline mr-1">&#8226; LIBB 2500: Digital Media Art</li>
                                <li className="inline mr-1">&#8226; CSCI 2400: Computer Systems</li>
                                <li className="inline mr-1">&#8226; CSCI 3287: Database Systems</li>
                                <li className="inline mr-1">&#8226; CSCI 3022: Intro to Data Science w/ Prob & Stat</li>
                                <li className="inline mr-1">&#8226; CSCI 3104: Algorithms</li>
                                <li className="inline mr-1">&#8226; CSCI 3308: Software Dev Methods and Tools</li>
                            </ul>
                        </div>
                    </div>
                    <div className="m-2">
                        <div className="m-3 flex flex-col">
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-2xl font-bold">Heritage High School</span>
                                <span className="text-lg">May 2021</span>
                            </div>
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-xl"></span>
                                <span className="text-lg">Littleton, CO</span>
                            </div>
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-xl"></span>
                                <span className="text-lg">3.862 GPA</span>
                            </div>
                            <span className="text-lg">Relevant Coursework:</span>
                            <ul className="list-disc list-inside text-sm">
                                <li className="inline mr-1">AP Computer Science Principles</li>
                                <li className="inline mr-1">&#8226; AP Computer Science A</li>
                                <li className="inline mr-1">&#8226; Design Projects</li>
                            </ul>
                        </div>
                    </div>
                    <span className="text-3xl font-bold p-3">Experience</span>
                    <hr />
                    <div className="m-2">
                        <div className="m-3">
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-2xl font-bold">DUMBCLUB LLC</span>
                                <span className="text-lg">October 2020 - February 2023</span>
                            </div>
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-xl">Co-Founder</span>
                                <span className="text-lg">Littleton, CO</span>
                            </div>
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-lg">Relevant Skills:</span>
                            </div>
                            <ul className="list-disc list-inside text-sm">
                                <li className="inline mr-1">Adobe Illustrator</li>
                                <li className="inline mr-1">&#8226; Adobe Premiere</li>
                                <li className="inline mr-1">&#8226; Shopify</li>
                                <li className="inline mr-1">&#8226; Social Media Marketing</li>
                                <li className="inline mr-1">&#8226; Product Management</li>
                                <li className="inline mr-1">&#8226; Product Design</li>
                                <li className="inline mr-1">&#8226; Bussiness Strategy</li>
                                <li className="inline mr-1">&#8226; Bussiness Development</li>
                            </ul>
                            <div className="flex justify-between">
                                <span className="text-lg"></span>
                                <a href="#" className="text-lg text-gray-400 hover:text-gray-700">Read More &#8227;</a>
                            </div>
                        </div>
                    </div>
                    <div className="m-2">
                        <div className="m-3">
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-2xl font-bold">Nigh Technologies</span>
                                <span className="text-lg">Fall Semester 2022</span>
                            </div>
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-xl">Social Media Manager (Internship)</span>
                                <span className="text-lg">Boulder, CO</span>
                            </div>
                            <div className="flex justify-start">
                                <span className="text-lg">Relevant Skills:</span>
                            </div>
                            <ul className="list-disc list-inside text-sm">
                                <li className="inline mr-1">Tech Startups</li>
                                <li className="inline mr-1">&#8226; Gorilla Marketing</li>
                                <li className="inline mr-1">&#8226; Event Planning</li>
                                <li className="inline mr-1">&#8226; Management</li>
                                <li className="inline mr-1">&#8226; Business Strategy</li>
                                <li className="inline mr-1">&#8226; Product Development</li>
                            </ul>
                            <div className="flex justify-between">
                                <span className="text-lg"></span>
                                <a href="#" className="text-lg text-gray-400 hover:text-gray-700">Read More &#8227;</a>
                            </div>
                        </div>
                    </div>
                    <div className="m-2">
                        <div className="m-3">
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-2xl font-bold">Sciall.org</span>
                                <span className="text-lg">Spring Semester 2023</span>
                            </div>
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-xl">Video Editor (Internship)</span>
                                <span className="text-lg">Remote</span>
                            </div>
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-lg">Relevant Skills:</span>
                                <span className="text-lg"></span>
                            </div>
                            <ul className="list-disc list-inside text-sm">
                                <li className="inline mr-1">Adobe Premiere Pro</li>
                                <li className="inline mr-1">&#8226; Adobe After Affects</li>
                            </ul>
                        </div>
                    </div>
                    <div className="m-2">
                        <div className="m-3">
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-2xl font-bold">Arts & Sciences Office of Advancement</span>
                                <span className="text-lg italic">Currently Working</span>
                            </div>
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-xl">Student Assistant</span>
                                <span className="text-lg">Boulder, CO</span>
                            </div>
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-lg">Relevant Skills:</span>
                                <span className="text-lg"></span>
                            </div>
                            <ul className="list-disc list-inside text-sm">
                                <li className="inline mr-1">Microsoft Office</li>
                                <li className="inline mr-1">&#8226; Salesforce</li>
                                <li className="inline mr-1">&#8226; Teamwork</li>
                                <li className="inline mr-1">&#8226; Node.js</li>
                                <li className="inline mr-1">&#8226; Express.js</li>
                                <li className="inline mr-1">&#8226; PostgreSQL</li>
                                <li className="inline mr-1">&#8226; Selenium Automation</li>
                                <li className="inline mr-1">&#8226; EJS</li>
                            </ul>
                        </div>
                    </div>
                    <span className="text-3xl font-bold p-3">Volunteerism</span>
                    <hr />
                    <div className="m-2">
                        <div className="m-3">
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-2xl font-bold">Royal Family KIDS Camp</span>
                                <span className="text-lg">52 hrs</span>
                            </div>
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-xl"></span>
                                <span className="text-lg">Divide, CO</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-lg">Description:</span>
                                <span className="text-lg"></span>
                            </div>
                            <p className="text-sm">Royal Family KIDS Camp is a week long sleep-away summer camp for child victims of family induced trauma. I was able to contribute to making that week the best expeirence possible for those kids by fostering a loving, compassionate, and trustworthy environment.</p>
                        </div>
                    </div>
                    <div className="m-2">
                        <div className="m-3">
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-2xl font-bold">Trek</span>
                                <span className="text-lg">36 hrs</span>
                            </div>
                            <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
                                <span className="text-xl"></span>
                                <span className="text-lg">Rangely, CO</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-lg">Description:</span>
                                <span className="text-lg"></span>
                            </div>
                            <p className="text-sm">Trek is a 4-day enriching expedition for 14-18 year olds where you impersonate pioneers crossing the western plains by pulling handcarts over 26 miles of rough terrain in arid north-western colorado. I helped my assigned group traverse the rugged trail and contributed to the mentorship of the teens by getting them involved in activies and with each other.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
