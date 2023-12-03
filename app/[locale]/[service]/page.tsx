import { serviceDefinitions } from "@/config/service"
import ServiceHighlights from "@/components/service-highlights"
import ServiceOfferings from "@/components/service-offerings"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export async function generateStaticParams() {

    const serviceNames = serviceDefinitions.map((service) => service.path)

    return serviceNames.map((service) => ({
        service
    }))
}

export default function ServicePage({
    params,
}: {
    params: { service: string }
}) {

    const service = serviceDefinitions.find((service) => service.path === params.service)
    if (service === undefined) {
        throw new Error(`Service ${params.service} not found`)
    }
    const serviceHighlights = service?.serviceHighlightsConfig.serviceHighlights
    const serviceOfferingsProps = service?.serviceOfferingsProps

    if (serviceHighlights === undefined || serviceOfferingsProps === undefined) {
        throw new Error(`Service Highlights or Service Offerings not found`)
    }

    return (
        <div className="container mx-auto">
            <div className="flex flex-col space-y-10">
                <div className="flex flex-col space-y-10">
                    <Image src={service.heroImage}
                        alt="Demand Planning Cloud"
                        width={0} height={0} sizes="100vw"
                        style={{ width: '100%', height: '50%' }}
                        className="z-0" />
                    <div className="z-30 absolute pt-36 space-y-5 text-white pl-5">
                        <h1 className="text-6xl font-bold">{service.title}</h1>
                        <h3 className="text-2xl font-bold">{service.description}</h3>
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="flex flex-col space-y-5">
                        <h2 className="text-4xl font-bold">{service.title}</h2>
                        <Separator className="w-20 h-1" />
                        {service?.details.map((detail) => (
                            <p key={detail} className="text-lg">{detail}</p>
                        ))
                        }
                    </div>
                </div>

                <div className="flex flex-1 pt-10 items-center justify-center">
                    <ServiceHighlights serviceHighlights={serviceHighlights} />
                </div>
                <div className="flex flex-col items-start space-y-5 pt-20">
                    <h3 className="text-4xl font-bold">Why Oink</h3>
                    <Separator className="w-20 h-1" />
                    <p className="text-lg">{service.whyChooseUs}</p>

                </div>
                <div className="flex flex-col items-start space-y-5 pt-20">
                    <h3 className="text-4xl font-bold">Offerings</h3>
                    <Separator className="w-20 h-1" />
                    <ServiceOfferings {...serviceOfferingsProps} />
                </div>
            </div>
        </div>
    )

}