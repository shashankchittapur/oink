"use client";

import Link from "next/link";


export default function OpenPositions(open_positions: any) {

    return (
        <div className="flex flex-col space-y-10">
            {open_positions.map((position: any) => (
                <div key={position.title} className="flex flex-row flex-1 pt-5 pb-5 border-white border rounded-md">
                    <div className="flex flex-col space-y-5 flex-1 pl-10 pr-36  items-start justify-start">
                        <h1 className="text-3xl font-bold">{position.title}</h1>
                        <div className="flex flex-row space-x-20">
                            <div className="flex flex-col spacey-3 items-start justify-start">
                                <h2 className="text-2xl font-bold">Location:</h2>
                                <p className="text-lg text-gray-400">{position.location}</p>
                            </div>
                            <div className="flex flex-col spacey-3 items-start justify-start">
                                <h2 className="text-2xl font-bold">Employment Type:</h2>
                                <p className="text-lg text-gray-400">{position.employment_type}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 pl-36 pr-36">
                    </div>
                    <div className="flex justify-end items-center  pl-36 pr-36">
                        <Link
                            href={{
                                pathname: "/company/careers/apply-form",
                                query: { jobId: position.title, jobTitle: position.title }
                            }}
                            className="text-blue-500 text-lg font-semibold">
                            <p>Apply Now</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}