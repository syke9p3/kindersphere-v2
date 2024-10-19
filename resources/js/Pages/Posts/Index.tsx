import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, Post } from "@/types";
import { Head } from "@inertiajs/react";
import { formatDistance } from "date-fns";

interface User {
    id: number,
    name: string,
    email: string
}



interface PostIndexProps extends PageProps {
    posts: Post[];
}

export default function PostIndex({ auth, posts }: PostIndexProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header=<h2 className="font-semibold text-xl text-gray-800 leading-tight">Announcements</h2>
        >

            <Head title="Announcements" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <ul className="flex-col space-y-4">
                                {posts.map(post => (
                                    <div className="px-5 py-4 bg-white  shadow rounded-lg">
                                        <div className="flex mb-4">
                                            <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                                            <div className="ml-2 mt-0.5">
                                                <span className="block font-medium text-base leading-snug text-black ">{post.user.name}</span>
                                                <span className="block text-sm text-gray-500  font-light leading-snug">
                                                    {formatDistance(
                                                        new Date(post.created_at),
                                                        new Date(),
                                                        { addSuffix: true },
                                                    )}</span>
                                            </div>
                                        </div>
                                        <h1 className="text-gray-900 font-bold text-lg  leading-snug md:leading-normal">{post.title}</h1>
                                        <p className="text-gray-800  leading-snug md:leading-normal">{post.content}</p>
                                        <div className="flex justify-between items-center mt-5">
                                            <div className="flex ">
                                                <svg className="p-0.5 h-6 w-6 rounded-full z-20 bg-white  " xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><defs><linearGradient id='a1' x1='50%' x2='50%' y1='0%' y2='100%'><stop offset='0%' stop-color='#18AFFF' /><stop offset='100%' stop-color='#0062DF' /></linearGradient><filter id='c1' width='118.8%' height='118.8%' x='-9.4%' y='-9.4%' filterUnits='objectBoundingBox'><feGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1' /><feOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1' /><feComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1' /><feColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0' /></filter><path id='b1' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z' /></defs><g fill='none'><use fill='url(#a1)' /><use fill='black' filter='url(#c1)' /><path fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z' /></g></svg>
                                                <span className="ml-1 text-gray-500   font-light">8</span>
                                            </div>
                                            <div className="ml-1 text-gray-500  font-light">33 comments</div>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}