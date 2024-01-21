import Image from 'next/image'

export default function Partners() {
    return (
        <div className="py-24 sm:py-32">
            <div className="flex flex-col items-center justify-center mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-xl font-semibold leading-8">
                    Trusted by the world’s most innovative teams
                </h2>
                <div className="mt-20 grid max-w-lg grid-cols-3 items-center gap-x-12 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="/images/partners/rapidflow-logo.png"
                        alt="RapidFlow"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="/images/partners/itconvergence-logo.png"
                        alt="IT Convergence"
                        width={158}
                        height={48}
                    />
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
    )
}
