import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Markdown } from '../components/markdown';
import { parseMarkdown } from '../markdoc.server';

import Collapsible from 'react-collapsible';

import {
    useState
} from 'react';

import {
    Link,
    useLoaderData,
    useParams
} from "@remix-run/react";


export const meta: V2_MetaFunction = () => {
    return [
        { title: "Will C. Johnson" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export const loader = async ({ params }: LoaderArgs) => {
    const url = 'http://3.91.184.101/api/posts/' + params.postId + '?populate=*';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'bearer a98bc3f7200a30236000fc9a3187a5593658d516f714e7ca57b8f394280cce174462d6de3044374a6e475576c250fa7625614195b0bb1088149a66980d60106eed9228e46ca979b6d212ad3ed32028ab0e0bde4a29e969a88df85a83cd3a6b07f8333c7380520efad6b256a1d6881a1f3cfbffaa555749f9c29938710c19567c'
        }
    });
    const data = await response.json();
    data.data.attributes.body = parseMarkdown(data.data.attributes.body)

    return json({ post: data });
};

export default function Post() {
    const [open, setOpen] = useState(false);
    const params = useParams();
    const { post } = useLoaderData<typeof loader>();
    const { title, body, publishedAt, author, thumbnail } = post.data.attributes;
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
                                        <Link to="/posts" className="text-gray-700 bg-gray-300 rounded-md px-3 py-2 text-sm font-medium">Blog</Link>
                                        <Link to="/resume" className="text-gray-700 hover:bg-gray-300 rounded-md px-3 py-2 text-sm font-medium">Resume</Link>
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
                <div className="flex justify-center p-3 sm:p-0">
                    <div className="max-w-2xl mt-10 flex flex-col">
                        <span className="font-black text-5xl">{title}</span>
                        <span className="font-light text-gray-700 mb-5">Published on {publishedAt} by {author}</span>
                        <img className="mb-3" src={thumbnail.data.attributes.formats.medium.url} />
                        <Markdown content={body} />
                    </div>
                </div>
            </div>
        </>
    );
}
