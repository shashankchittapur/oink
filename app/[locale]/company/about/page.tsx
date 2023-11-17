import EmployeeCard from "@/components/employee-card";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const team = [
    {
        name: "Bharat",
        title: "CEO / Founder",
        image: "/profile-pic-placeholder.jpeg"
    },
    {
        name: "John Doe",
        title: "CTO",
        image: "/profile-pic-placeholder.jpeg"
    },
    {
        name: "John Doe",
        title: "CFO",
        image: "/profile-pic-placeholder.jpeg"
    },
    {
        name: "John Doe",
        title: "Senior Architect",
        image: "/profile-pic-placeholder.jpeg"
    },
    {
        name: "John Doe",
        title: "Designer",
        image: "/profile-pic-placeholder.jpeg"
    },
    {
        name: "John Doe",
        title: "Product Manager",
        image: "/profile-pic-placeholder.jpeg"
    },
    {
        name: "John Doe",
        title: "Director",
        image: "/profile-pic-placeholder.jpeg"
    },
    {
        name: "John Doe",
        title: "Principal Engineer",
        image: "/profile-pic-placeholder.jpeg"
    },
]

export default function AboutUsPage() {
    const t = useTranslations('company.about')
    return (
        <div className="flex flex-1 flex-col mx-auto h-min px-4 dark:bg-transparent">
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
            <div className="flex pt-36 pb-36 flex-col">
                <div className="flex flex-1 flex-col space-y-5 pr-5 text-center justify-center">
                    <h1 className="text-6xl ">{t('heading-1')}</h1>
                    <div className="w-1/2 mx-auto">
                        <p className="text-gray-500 text-xl">{t('description-1')}</p>
                    </div>
                </div>
                <div className="flex flex-1 space-y-5 pt-16">
                    <div className="flex flex-1 flex-row space-y-5 pl-36 pr-36 space-x-10 ">
                        <div className="flex flex-1 flex-col space-y-5 ">
                            <p className="text-lg">{t('title-2')}</p>
                            <p className="text-lg">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.</p>
                        </div>
                        <div className="flex flex-1 flex-col space-y-5 ">
                            <p className="text-lg">Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue maecenas risus nulla ultrices congue nunc tortor. Enim et nesciunt doloremque nesciunt voluptate.</p>
                            <p className="text-lg">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
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

                <div className="flex flex-1 flex-row pt-16 pl-36 pr-36">

                    <div className="flex flex-1 flex-row space-x-5 ">
                        <Separator orientation="vertical" />
                        <div className="flex flex-1 flex-col space-y-5 pl-3 pr-16">
                            <h1 className="text-2xl">2020</h1>
                            <p className="text-sm">Business was founded</p>
                        </div>
                    </div>

                    <div className="flex flex-1 flex-row space-x-5 ">
                        <Separator orientation="vertical" />
                        <div className="flex flex-1 flex-col space-y-5 pl-3 pr-16">
                            <h1 className="text-2xl">50+</h1>
                            <p className="text-sm">People on team</p>
                        </div>
                    </div>

                    <div className="flex flex-1 flex-row space-x-5 ">
                        <Separator orientation="vertical" />
                        <div className="flex flex-1 flex-col space-y-5 pl-3 pr-16">
                            <h1 className="text-2xl">10+</h1>
                            <p className="text-sm">Clients</p>
                        </div>
                    </div>

                    <div className="flex flex-1 flex-row space-x-5 ">
                        <Separator orientation="vertical" />
                        <div className="flex flex-1 flex-col space-y-5 pl-3 pr-16">
                            <h1 className="text-2xl"><span></span>$70M</h1>
                            <p className="text-sm">Revenue</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-center flex-row pt-36">
                    <Image alt="team-work" src={"/team-work.avif"} height={300} width={1250} className="rounded-sm" />
                </div>

                <div className="flex flex-1 flex-col items-start justify-start  space-y-5 pt-28 pl-32">
                    <div className="flex flex-1 flex-col text-start justify-start w-1/2 space-y-5">
                        <h1 className="text-4xl">Our values</h1>
                        <p className="text-lg ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.</p>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-3 pt-16 gap-4">
                        <div className="flex flex-1 flex-rows  space-x-2">
                            <Icons.rocket className="w-10 h-10" />
                            <p className="text-lg w-1/2"><span className="font-bold">Be world-class.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.</p>
                        </div>
                        <div className="flex flex-1 flex-rows  space-x-2">
                            <Icons.rocket className="w-10 h-10" />
                            <p className="text-lg w-1/2"><span className="font-bold">Take responsibility.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.</p>
                        </div>
                        <div className="flex flex-1 flex-rows  space-x-2">
                            <Icons.rocket className="w-10 h-10" />
                            <p className="text-lg w-1/2"><span className="font-bold">Be supportive.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.</p>
                        </div>
                        <div className="flex flex-1 flex-rows  space-x-2">
                            <Icons.rocket className="w-10 h-10" />
                            <p className="text-lg w-1/2"><span className="font-bold">Always learning.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.</p>
                        </div>
                        <div className="flex flex-1 flex-rows  space-x-2">
                            <Icons.rocket className="w-10 h-10" />
                            <p className="text-lg w-1/2"><span className="font-bold">Share everything you know.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.</p>
                        </div>
                        <div className="flex flex-1 flex-rows  space-x-2">
                            <Icons.sun className="w-10 h-10" />
                            <p className="text-lg w-1/2"><span className="font-bold">Enjoy downtime.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 flex-col items-start justify-start  space-y-5 pt-28 pl-36">
                    <div className="flex flex-1 flex-col text-start w-1/2  justify-start space-y-5">
                        <h1 className="text-4xl">Our team</h1>
                        <p className="text-lg">Excepturi repudiandae alias ut. Totam aut facilis. Praesentium in neque vel omnis. Eos error odio. Qui fugit voluptatibus eum culpa.</p>
                    </div>
                    <div className="grid grid-cols-4 grid-rows-2 gap-5 pt-16">
                        {team.map((member, index) => (
                            <EmployeeCard key={index} {...member} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-1  p-28 ">
                    <div className="flex flex-1 flex-row p-28 space-x-10 bg-slate-300 rounded-xl">
                        <Image alt="team-work" src={"/join-team.avif"} height={500} width={500} className="rounded-sm" />
                        <div className="flex flex-1 flex-col space-y-5 pl-20 dark:text-black ">
                            <h3 className="text-4xl font-bold">Join our team</h3>
                            <p className="text-lg font-normal">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-5 pt-8">
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
            </div>
        </div>
    )
}


