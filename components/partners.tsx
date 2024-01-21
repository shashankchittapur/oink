import Image from 'next/image'

export default function Partners() {
    return (
        <div className="container mx-auto ">
            <div className='flex min-h-96 bg-gradient-to-tr from-cyan-300 to-pink-300 bg-opacity-10 rounded-3xl items-center justify-center'>
                <div className='flex flex-col space-y-20 items-center justify-center pt-20'>
                    <h1 className='text-4xl font-bold text-center bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent'>Trusted by the world&apos;s most innovative teams</h1>
                    <div className="grid max-w-lg grid-cols-3 items-center gap-x-12 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <div className='w-[200px] h-[200px]'>
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                src="/images/partners/rapidflow-logo.png"
                                alt="RapidFlow"
                                width={0}
                                height={0}
                                sizes='(max-width: 640px) 100vw, 640px'
                                style={{ height: '100%', width: '100%' }}
                            />
                        </div>
                        <div className='w-[200px] h-[200px]'>
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                src="/images/partners/itconvergence-logo.png"
                                alt="IT Convergence"
                                width={0}
                                height={0}
                                sizes='(max-width: 640px) 100vw, 640px'
                                style={{ height: '100%', width: '100%' }}
                            />
                        </div>
                        <div className='w-[200px] h-[200px]'>
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                src="/images/partners/criticalriver-logo.png"
                                alt="Critical River"
                                width={158}
                                height={48}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
