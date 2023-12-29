import Image from 'next/image'

export default function LoadingPage() {
    return (
        <div className="flex flex-col space-y-10 max-h-min w-full pb-20 items-center justify-center">
            <div className="flex flex-col space-y-10 pt-36 w-[200px]">
                <Image src={'/images/loading.gif'}
                    alt="Loading"
                    sizes='100vw' width={0} height={0}
                    style={{ width: '100%', height: '50%' }}
                    className="z-0 hidden dark:block" />
                <Image src={'/images/loading-white.gif'}
                    alt="Loading"
                    width={100} height={100}
                    style={{ width: '100%', height: '50%' }}
                    className="z-0 dark:hidden" />
            </div>
        </div>
    )
}