import type { V2_MetaFunction } from "@remix-run/node";

import {
    Link,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

export default function Footer() {
    return (
        <>
            <div className="flex flex-col max-w-5xl mb-3 mx-auto">
                <div className="flex flex-col sm:flex-row justify-between p-5">
                    <div>
                        <Link to="/">
                            <svg height="60px" width="100px">
                                <use xlinkHref="#logo"></use>
                            </svg>
                        </Link>
                        <p>This is your mission statement or a little excerpt about yourself</p>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-xl">Links</span>
                        <Link className="text-sm text-gray-500 hover:text-black hover:underline" to="/">Home</Link>
                        <Link className="text-sm text-gray-500 hover:text-black hover:underline" to="/posts">Blog</Link>
                        <Link className="text-sm text-gray-500 hover:text-black hover:underline" to="/resume">Resume</Link>
                        <Link className="text-sm text-gray-500 hover:text-black hover:underline" to="/portfolio">Portfolio</Link>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-xl">Projects</span>
                        <Link className="text-sm text-gray-500 hover:text-black hover:underline" to="/">Personal Website</Link>
                        <Link className="text-sm text-gray-500 hover:text-black hover:underline" to="/">Neighborly Connect</Link>
                        <Link className="text-sm text-gray-500 hover:text-black hover:underline" to="/">Quick Contact</Link>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-xl">Socials</span>
                        <Link className="text-sm text-gray-500 hover:text-black hover:underline" to="/">Github</Link>
                        <Link className="text-sm text-gray-500 hover:text-black hover:underline" to="/">LinkedIn</Link>
                    </div>
                </div>
                <span className="text-sm text-gray-500 text-center">&copy; Copyright 2023 : Will C Johnson</span>
            </div>
        </>
    );
}
