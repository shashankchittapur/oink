import Image from 'next/image'
import { Icons } from "@/components/icons";

export default function OurValues() {
    return (
        <div className="lg:container flex flex-col">
            <div className="flex flex-col items-center justify-center space-y-20 pt-24 pb-24">
                <div className="w-full h-[400px] rounded-lg">
                    <Image alt="team-work" src={"/team-work.avif"} height={0} width={0} sizes="100vw"
                        style={{ width: '100%', height: '100%' }} className="rounded-lg" />
                </div>
                <div className="flex flex-col items-start justify-start  space-y-10">
                    <div className="flex flex-col text-start justify-start w-3/4 space-y-5">
                        <h1 className="text-4xl">Our values</h1>
                        <p className="text-lg dark:text-gray-400 text-gray-800">Lasting brand value is earned when people see their own values authentically reflected in the organisation and choose to passionately live,breathe and share the company&apos;s story. </p>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-3 gap-4">
                        <div className="flex  flex-row space-x-5">
                            <Icons.rocket className="w-10 h-10" />
                            <p className="text-lg w-3/4 text-gray-400"><span className="font-bold text-black  dark:text-white">Be world-class.</span> We thrive to build world class solutions and products to ur customers.</p>
                        </div>
                        <div className="flex flex-row space-x-5">
                            <Icons.rocket className="w-10 h-10" />
                            <p className="text-lg w-3/4 text-gray-400"><span className="font-bold text-black dark:text-white">Take responsibility.</span> We take end to end responsibility in product delivery. </p>
                        </div>
                        <div className="flex flex-row  space-x-5">
                            <Icons.rocket className="w-10 h-10" />
                            <p className="text-lg w-3/4 text-gray-400"><span className="font-bold text-black  dark:text-white">Be supportive.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.</p>
                        </div>
                        <div className="flex flex-row  space-x-5">
                            <Icons.rocket className="w-10 h-10" />
                            <p className="text-lg w-3/4 text-gray-400"><span className="font-bold  text-black dark:text-white">Always learning.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.</p>
                        </div>
                        <div className="flex fflex-row  space-x-5">
                            <Icons.rocket className="w-10 h-10" />
                            <p className="text-lg w-3/4 text-gray-400"><span className="font-bold  text-black dark:text-white">Share everything you know.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.</p>
                        </div>
                        <div className="flex flex-row  space-x-5">
                            <Icons.sun className="w-10 h-10" />
                            <p className="text-lg w-3/4 text-gray-400"><span className="font-bold  text-black dark:text-white">Enjoy downtime.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}