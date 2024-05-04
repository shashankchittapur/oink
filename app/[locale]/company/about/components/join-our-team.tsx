import { Icons } from '@/components/icons'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function JoinOurTeam() {

    return (
        <div className="lg:container flex">

            <div className="rounded-xl bg-blue-900 bg-opacity-10">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto">
                    <div className="flex lg:flex-row flex-col lg:space-x-20 space-y-10">
                        <div className='lg:w-1/2'>
                            <div className="w-[400px] h-[400px] rounded-xl overflow-hidden">
                                <Image alt="join-us" src={"/join-team.avif"} height={0} width={0} sizes="100vw"
                                    style={{ width: '100%', height: '100%' }} className="rounded-lg" />
                            </div>
                        </div>
                        <div className='flex flex-col space-y-5 pt-5'>
                            <div className='flex flex-col space-y-3'>
                                <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent">
                                    Join our team
                                </h2>
                                <p className='text-lg text-gray-400'>We are a team of passionate people whose goal is to improve everyone&apos;s life through disruptive products. We build great products to solve your business problems.</p>
                            </div>
                            <div className="grid grid-cols-2 grid-rows-2 gap-5">
                                <div className="flex flex-1 flex-row  space-x-3 items-center ">
                                    <Icons.OK className="w-10 h-10" />
                                    <p className="text-lg">Competitive Salaries</p>
                                </div>
                                <div className="flex flex-1 flex-row  space-x-3 items-center ">
                                    <Icons.OK className="w-10 h-10" />
                                    <p className="text-lg">Flexible work hours</p>
                                </div>
                                <div className="flex flex-1 flex-row  space-x-3 items-center ">
                                    <Icons.OK className="w-10 h-10" />
                                    <p className="text-lg">30 days of paid vacation</p>
                                </div>
                                <div className="flex flex-1 flex-row  space-x-3 items-center ">
                                    <Icons.OK className="w-10 h-10" />
                                    <p className="text-lg">Annual team retreats</p>
                                </div>
                                <div className="flex flex-1 flex-row  space-x-3 items-center ">
                                    <Icons.OK className="w-10 h-10" />
                                    <p className="text-lg">Benefits for you and your family</p>
                                </div>
                                <div className="flex flex-1 flex-row  space-x-3 items-center ">
                                    <Icons.OK className="w-10 h-10" />
                                    <p className="text-lg">A great work environment</p>
                                </div>
                            </div>
                            <Link href="/company/careers">
                                <div className="flex flex-1 flex-row space-x-2 pt-5 items-center">

                                    <p className="text-lg font-medium text-blue-500">See our job postings</p>
                                    <ArrowRightIcon className="w-5 h-5 text-blue-500" />

                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>

        </div>
    )

}