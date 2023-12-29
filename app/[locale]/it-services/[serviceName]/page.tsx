import { IT_SERVICES } from "@/config/it-services";
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import ServiceHighlights from "@/components/service-highlights";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Suspense } from "react";
import LoadingPage from "@/components/loading";


export async function generateStaticParams() {
    const serviceNames = IT_SERVICES.map((service) => service.path)
    return serviceNames.map((serviceName) => ({
        serviceName
    }))
}

export default function ITServicePage({
    params,
}: {
    params: { serviceName: string }
}) {

    const service = IT_SERVICES.find((service) => service.path === params.serviceName)

    if (service === undefined) {
        throw new Error(`Service ${params.serviceName} not found`)
    }

    const overviewImagePresent = service.overview.image !== undefined

    const services = service.services

    const config = services?.services

    const benefits = service.benifits

    return (
        <Suspense fallback={<LoadingPage />}>
            <div className="container mx-auto lg:space-y-20 pb-20 lg:pt-20 md:pt-10">
                <div className="flex flex-col space-y-20">
                    <div className="flex flex-col space-y-10">
                        <Image src={service.heroImage}
                            alt={service.title}
                            width={0} height={0} sizes="100vw"
                            style={{ width: '100%', height: '50%' }}
                            className="z-0" />
                        <div className="z-30 absolute lg:pt-36 md:pt-24 sm:pt-12  lg:space-y-5 md:space-y-4 sm:space-y-3 text-white pl-5">
                            <h1 className="lg:text-6xl md:text-4xl font-bold">{service.title}</h1>
                            <h3 className="lg:text-2xl font-bold">{service.description}</h3>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-20">
                        <div className="flex flex-col space-y-5 w-1/2">
                            <h1 className="text-4xl font-bold">Overview</h1>
                            <Separator orientation="horizontal" className="w-20 h-1" />
                            {service.overview.details.map((detail) => (
                                <div key={detail} className="flex flex-col space-y-5">
                                    <p className="text-lg">{detail}</p>
                                </div>
                            ))}
                        </div>
                        {overviewImagePresent ?
                            (<div className="flex w-1/2">
                                <Image src={service.overview.image || ''}
                                    alt={service.title}
                                    width={0} height={0} sizes="100vw"
                                    style={{ width: '100%', height: '100%' }}
                                    className="z-0" />
                            </div>) : null}
                    </div>
                    <div className="flex pt-20 pb-20">
                        {
                            services !== undefined ? (
                                <div className="flex flex-col space-y-5">
                                    <h1 className="text-4xl font-bold">Services</h1>
                                    <Separator orientation="horizontal" className="w-20 h-1" />
                                    <p className="text-lg">{services.description}</p>
                                    <div className="pt-5 lg:grid lg:grid-cols-3 gap-5 md:grid-rows-2 md:grid-cols-2 sm:grid-cols-1">
                                        {config?.serviceHighlights.map((item, index) => (
                                            <Card key={index} className="lg:w-[400px] space-y-5">
                                                <CardHeader className="items-center justify-center">
                                                    <Image alt={item.title}
                                                        src={item.icon}
                                                        width={100} height={100} />
                                                </CardHeader>
                                                <CardContent className="text-center justify-center">
                                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                                </CardContent>
                                            </Card>

                                        ))}
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                    <div className="flex flex-col space-y-5">
                        {benefits !== undefined ? (
                            <div className="flex flex-col space-y-5">
                                <h1 className="text-4xl font-bold">Benefits</h1>
                                <Separator orientation="horizontal" className="w-20 h-1" />
                                <div className="pt-5 lg:grid lg:grid-cols-4 gap-5 md:grid-cols-2 sm:grid-cols-1">
                                    {benefits?.benifits.map((item, index) => (
                                        <div key={index} className="text-center relative lg:w-[300px]  md:w-[400px] lg:h-[300px] border rounded-lg
                                    transition duration-300 hover:border-b-white hover:scale-110">
                                            <div className="flex flex-col text-center justify-center 
                                         top-0 left-0 w-full h-full z-0">
                                                <Image alt={item.title} src={item.icon} width={0} height={0}
                                                    sizes="100vw"
                                                    style={{ width: '100%', height: '100%' }}
                                                    className="object-cover z-0 rounded-lg hover:zoom-in-50" />
                                                <div className="absolute z-30 pl-5">
                                                    <p className="lg:text-xl font-bold text-white">{item.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        ) : null}
                    </div>
                </div>
            </div>
        </Suspense>
    )
}