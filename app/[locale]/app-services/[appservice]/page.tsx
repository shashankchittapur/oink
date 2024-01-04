import { SAPAppsMenuItemsConfig, oracleAppsMenuItemsConfig } from '@/config/app-services';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import ServiceHighlights from '@/components/service-highlights';
import Link from 'next/link';
import { Suspense } from 'react';
import LoadingPage from '@/components/loading';
import { blurImageURL } from '@/config/images';



export async function generateStaticParams() {

    const sapServices = SAPAppsMenuItemsConfig.menuItems.map((service) => service.path)
    const appservices = oracleAppsMenuItemsConfig.menuItems.map((service) => service.path)

    appservices.push(...sapServices)

    return appservices.map((appservice) => ({
        appservice
    }))
}

export default function AppServicesPage(
    {
        params,
    }: {
        readonly params: { appservice: string };
    }
) {

    let appService = oracleAppsMenuItemsConfig.menuItems.find((service) => service.path === params.appservice)
    console.log(`App Service Name:${params.appservice}`)
    console.log(`App Service:${JSON.stringify(appService)}`)

    if (appService === undefined) {
        appService = SAPAppsMenuItemsConfig.menuItems.find((service) => service.path === params.appservice)
    }

    if (!appService) {
        return <div>Not found</div>
    }
    return (
        <Suspense fallback={<LoadingPage />}>
            <div className="flex flex-col space-y-10 pb-20">
                <div className="flex flex-col space-y-10 h-96">
                    <Image src={appService.heroImage ?? ''}
                        alt="Demand Planning Cloud"
                        width={0} height={0} sizes="100vw"
                        style={{ width: '100%', height: '100%' }}
                        className="z-0"
                        placeholder="blur"
                        blurDataURL={blurImageURL} />
                    <div className="z-30 absolute pl-36 lg:space-y-5  text-white">
                        <h1 className="lg:text-6xl md:text-4xl sm:text-lg font-bold w-1/2">{appService.title}</h1>
                        <h3 className="lg:text-2xl md:text-xl sm:text-sm font-bold">{appService.description}</h3>
                    </div>
                </div>
                <div className="container mx-auto pb-20 space-y-10">
                    <div className="flex flex-col space-y-10">
                        {
                            appService.details !== undefined ? (
                                <div className="flex flex-col space-y-5">
                                    <h2 className="text-4xl font-bold">{appService.title}</h2>
                                    <Separator className="w-20 h-1" />
                                    <div className="flex flex-col space-y-5">
                                        {
                                            appService.details.information.map((info, index) => (
                                                <div key={index} className="flex flex-col space-y-5">
                                                    <p className="text-lg">{info}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="flex flex-col pt-10">
                                        <ServiceHighlights serviceHighlights={appService.details.overview.serviceHighlights} />
                                    </div>
                                </div>
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div className="flex flex-col space-y-10">
                        {
                            appService.whyChooseUs !== undefined ? (
                                <div className="flex flex-col space-y-5">
                                    <h3 className="text-3xl font-bold">Why Oink</h3>
                                    <Separator className="w-20 h-1" />
                                    <p className="text-lg">{appService.whyChooseUs}</p>
                                </div>
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div className="flex flex-col space-y-10">
                        {
                            appService.items !== undefined && appService.items.length > 0 ? (
                                <div className="flex flex-col space-y-5">
                                    <h3 className="text-3xl font-bold">Products</h3>
                                    <Separator className="w-20 h-1" />
                                    <div className="lg:pl-20 pt-12 grid lg:gap-10 lg:grid-cols-3 sm:grid-cols-2 sm:gap-5">
                                        {appService.items.map((item, index) => (
                                            <div key={index} className="text-center relative lg:w-[300px] md:w-[400px] lg:h-[200px] border rounded-lg
                transition duration-300 hover:border-b-white hover:scale-110">
                                                {
                                                    item.href !== undefined ? (
                                                        <Link href={item.href ?? ''}>
                                                            <div className="flex flex-col text-center justify-center 
                     top-0 left-0 w-full h-full z-0">
                                                                <Image alt={item.title} src={item.heroImage ?? ''} width={0} height={0}
                                                                    sizes="100vw"
                                                                    style={{ width: '100%', height: '100%' }}
                                                                    className="object-cover z-0 rounded-lg hover:zoom-in-50" />
                                                                <div className="absolute z-30 pl-5">
                                                                    <p className="lg:text-3xl font-bold text-white">{item.title}</p>
                                                                </div>

                                                            </div>
                                                        </Link>
                                                    ) : (
                                                        <div className="flex flex-col text-center justify-center 
                     top-0 left-0 w-full h-full z-0">
                                                            <Image alt={item.title} src={item.heroImage ?? ''} width={0} height={0}
                                                                sizes="100vw"
                                                                style={{ width: '100%', height: '100%' }}
                                                                className="object-cover z-0 rounded-lg hover:zoom-in-50" />
                                                            <div className="absolute z-30 pl-5">
                                                                <p className="lg:text-3xl font-bold text-white">{item.title}</p>
                                                            </div>

                                                        </div>
                                                    )
                                                }

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                null
                            )
                        }
                    </div>
                </div>
            </div>
        </Suspense>
    );
}