"use client";
import { Separator } from "@/components/ui/separator";
import { Particles } from '@blackbox-vision/react-particles';

export default function LandingMainPage() {

    return (

        <div className="min-h-screen">

            <Particles className="absolute w-full h-full -z-10" id="simple" style={{ backgroundColor: 'black' }}
                params={
                    {
                        particles: { number: { value: 50 }, size: { value: 3 } },
                        interactivity: { events: { onhover: { enable: true, mode: 'repulse' } } }
                    }} />

            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 z-10">
                <div className="text-center">
                    <h1 className="font-bold tracking-tight text-8xl">
                        Oink Solutions
                    </h1>
                    <h2 className="mt-6 text-lg sm:text-xl pl-20 pr-20  leading-8">
                        In a world of increasing complexity, we help you to simplify your business processes.
                    </h2>

                </div>

            </div>
            <div className='items-start absolute w-full bottom-0 left-0  '>
                <Separator className='start-0 outline-4 bg-gradient-to-r from-cyan-400 to-pink-600  bg-transparent w-3/5 ' />
            </div>
        </div>
    );
}