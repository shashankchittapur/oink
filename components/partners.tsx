import Image from 'next/image'

export default function Partners() {
    return (
        <div className="container lg:mx-auto ">
            <div className='flex min-h-96 bg-gradient-to-tr from-cyan-300 to-pink-300 bg-opacity-10 rounded-3xl items-center justify-center'>
                <div className='flex flex-col lg:space-y-20 space-y-10 items-center justify-center lg:pt-20 pt-10'>
                    <h1 className='text-4xl font-bold text-center bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent'>Trusted by the world&apos;s most innovative teams</h1>
                    <div className="grid max-w-lg items-center gap-x-12 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4 sm:grid-cols-2">
                        <div className='w-[200px] h-[200px]'>
                            <Image
                                className="lg:max-h-12 w-full object-contain lg:col-span-1"
                                src="/images/partners/criticalriver-logo.png"
                                alt="Critical River"
                                width={158}
                                height={48}
                            />
                        </div>
                        <div className='w-[200px] h-[200px]'>
                            <Image
                                className="max-h-12 w-full object-contain lg:col-span-1"
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
                                className="max-h-12 w-full object-contain lg:col-span-1"
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
                                className="max-h-12 w-full object-contain lg:col-span-1"
                                src="/images/partners/kivixo-logo.jpeg"
                                alt="Kivixo Inc"
                                width={0}
                                height={0}
                                sizes='(max-width: 640px) 100vw, 640px'
                                style={{ height: '100%', width: '100%' }}
                            />
                        </div>

                    </div>
                </div>

            </div>
        </div >
    )
}
