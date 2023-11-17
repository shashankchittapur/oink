"use client";

import { useSearchParams } from "next/navigation";

export default function ApplyFormPage() {

    const searchParams = useSearchParams();
    const jobTitle = searchParams.get("jobTitle");
    


    return (
        <div className="container mx-auto pt-32 space-y-10">
            <div className="flex flex-1 flex-col items-center space-y-5 justify-center">
                <h1 className="text-2xl font-bold">CAREER</h1>
                <h2 className="text-5xl text-center justify-center font-bold">Open Application</h2>
                <span className="text-lg text-center text-gray-500">{jobTitle}</span>
            </div>
            <div className="flex flex-1 pl-36 pr-36 flex-col items-start space-y-10 justify-start">
                <h2 className="text-2xl font-bold">About</h2>
                <p className="text-lg font-normal text-gray-500"></p>
            </div>
        </div>
    )
}


