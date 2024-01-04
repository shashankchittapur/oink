import Image from 'next/image';
export default function PressPage() {
    return (
        <div className="flex flex-col ">
            <div className="flex flex-col  justify-start text-start w-full h-96 bg-gray-100">
                <Image src="/images/news-and-event.jpg" alt="press" width={0} height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%' }}
                    className="object-cover z-0  hover:zoom-in-50" />

                <div className="absolute z-30 pt-36 pl-36 space-y-5">
                    <p className="lg:text-6xl pl-24 font-bold text-white">Press</p>
                    <p className="lg:text-3xl pl-24 font-bold text-white">LATEST HAPPENING FROM THE TECHNOLOGICAL SPHERE</p>
                </div>
            </div>
            <div className='container mx-auto h-96'>
                <div className="flex flex-col justify-center text-center w-full h-full">

                    <p className="lg:text-3xl font-bold">No news for now, more news coming soon....!</p>
                </div>
            </div>
        </div>
    );
}