import Image from 'next/image'
import { ourTeamMembers } from '@/config/our-team-members'

export default function OurTeam() {

    return (
        <div className="container">
            <div className="flex flex-col pt-24 pb-24 space-y-20">
                <div className="flex flex-col items-start justify-start  space-y-20">
                    <div className="flex flex-col text-start justify-start w-1/2 space-y-5">
                        <h1 className="text-4xl font-bold">Our Team</h1>
                        <p className="text-lg text-gray-400">We are a team of passionate people whose goal is to improve everyone&apos;s life through disruptive products. We build great products to solve your business problems.</p>
                    </div>
                    <div className="grid grid-cols-4 grid-rows-2 gap-10">
                        {
                            ourTeamMembers.map((member, index) => {
                                return (
                                    <TeamMemberCard key={index} {...member} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )

}

export function TeamMemberCard(
    { name, designation, location, image }:
        { name: string, designation: string, location: string, image: string }
) {
    return (
        <div className="flex  flex-col space-y-5">
            <div className='w-48 h-48 rounded-full overflow-hidden'>
                <Image alt={name} src={image}
                    style={{ width: '100%', height: '100%' }} width={0} height={0} sizes='100vw' />
            </div>
            <div className="flex flex-col space-y-2">
                <p className="text-xl font-bold">{name}</p>
                <p className='text-lg font-normal text-gray-200'>{designation}</p>
                <p className='text-md font-thin text-gray-400'>{location}</p>

            </div>
        </div>
    )
}