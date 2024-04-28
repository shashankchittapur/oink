import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
export default function MissionVision() {

    return (
        <div className="min-h-screen">
            <div className='flex flex-col pl-36 mx-auto'>
                <div className="flex lg:flex-row  sm:flex-col space-x-10 p-5">
                    <div className="flex flex-col space-y-5 w-1/4">
                        <div className="w-full">
                            <Image
                                src="/images/mission.jpeg"
                                alt="Mission"
                                width={0} height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: '100%' }}
                                className="object-cover object-center rounded-lg shadow-md"
                            />
                        </div>
                        <div className="w-full bg-gradient-to-r from-indigo-400 to-pink-900 bg-clip-text
                     bg-transparent text-transparent outline-transparent outline-8 border border-pink-500">
                            <div className="flex flex-col mx-auto space-y-3 text-start pl-10 py-10">
                                <h1 className="text-xl  font-extrabold tracking-tight sm:text-3xl">
                                    10 +
                                </h1>
                                <p className="text-xl">
                                    Clients
                                </p>
                            </div>
                        </div>
                        <div className="w-full bg-gradient-to-r from-indigo-400 to-pink-900 bg-clip-text
                     bg-transparent text-transparent outline-transparent outline-8 border border-pink-500">
                            <div className="flex flex-col mx-auto space-y-3 text-start pl-10 py-10">
                                <h1 className="text-xl  font-extrabold tracking-tight sm:text-3xl">
                                    99 %
                                </h1>
                                <div className="flex flex-wrap">
                                    <p className="text-xl w-3/4">
                                        Client Retention Rate
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5 mx-auto w-1/4 col-span-2 items-center justify-center">
                        <div className="w-full">
                            <Image
                                src="/images/vision.jpeg"
                                alt="Mission"
                                width={0} height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: '100%' }}
                                className="object-cover object-center rounded-lg shadow-md"
                            />
                        </div>

                    </div>
                    <div className="flex flex-col w-1/2 pt-10 pb-10 pl-5">
                        <div className='flex flex-col space-y-10 w-3/4'>
                            <div className='flex flex-col space-y-5'>
                                <h1 className="text-3xl font-extrabold tracking-tight sm:text-3xl">
                                    Mission
                                </h1>
                                <p className="text-lg dark:text-gray-400">
                                    Our mission is to help our clients to simplify their business processes.
                                    At Oink Solutions, we believe that the best way to achieve this is by
                                    providing our clients with the best solutions and services.
                                    We use cutting-edge technologies to deliver the best solutions to our clients.
                                </p>
                            </div>
                            <div className='flex flex-col space-y-5'>
                                <h1 className="text-3xl font-extrabold tracking-tight sm:text-3xl">
                                    Vision
                                </h1>
                                <p className="text-lg dark:text-gray-400">
                                    Our vision is to be the best software development company in the world.
                                    We want to be the first choice of our clients when they need software solutions.
                                    We want to be the best place to work for our employees.
                                </p>
                            </div>
                            <div className='flex items-start justify-start'>
                                <Link href="/company/about" className='pt-10 pb-10'>
                                    <Button className="bg-gradient-to-r from-indigo-400 to-pink-900">
                                        About Us
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div >
    );

}

