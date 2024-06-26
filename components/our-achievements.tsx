
import Image from "next/image"; // Import the Image component from the appropriate package
import { achievements } from '@/config/achievements'
import { Achievement } from "@/types/achievement";

export default function OurAchievements() {

    return (
        <div className="flex mx-auto min-h-screen">
            <div className="flex flex-col items-center justify-center min-h-screen space-y-10">
                <div className="text-center space-y-5 w-3/4 pb-5">
                    <h4 className="text-4xl font-bold tracking-tight text-gray-400">OUR ACHIEVEMENTS</h4>
                    <h1 className="text-3xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent">
                        Numbers echo the footsteps of our journey through time
                    </h1>
                </div>
                <div className="grid lg:grid-cols-4 lg:grid-rows-2 grid-cols-2 lg:gap-10 gap-5">
                    {
                        achievements.map((achievement: Achievement, index: number) => {
                            return <AchievementCard key={achievement.title} title={achievement.title} description={achievement.description} image={achievement.image} />
                        })
                    }
                </div>
            </div>
        </div >
    )

}

function AchievementCard({ title, description, image }: { readonly title: string, readonly description: string, readonly image: string }) {
    return (
        <div className="flex flex-col items-center justify-center space-y-3 lg:w-[300px] lg:h-[300px]">
            <div className="border-2 dark:border-white border-black rounded-full p-8">
                <Image src={image} width={75} height={75} alt="Achievement Image" />
            </div>
            <div className="flex flex-col text-center space-y-2">
                <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
                <h1 className="text-lg font-bold tracking-tight text-gray-400">{description}</h1>
            </div>
        </div>
    )
}