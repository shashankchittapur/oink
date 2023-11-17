
import { ServiceHighlightsConfig } from "@/components/service-highlights"
import ServiceHighlights from "@/components/service-highlights"
import ServiceOfferings, { ServiceOfferingsConfig, ServiceOfferingsProps } from "@/components/service-offerings"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

const serviceHighlightsConfig: ServiceHighlightsConfig = {
    serviceHighlights: [
        {
            title: 'Respond Faster to Changes',
            icon: '/like.png'

        },
        {
            title: 'Better Forecast Accuracy',
            icon: '/forecast.png'

        },
        {
            title: 'Better Customer Service',
            icon: '/customer-service.png'

        },
        {
            title: 'Reduce Inventory Investment',
            icon: '/Reduce-Inventory-Investment.png'
        },
    ]
}

const serviceOfferingsProps: ServiceOfferingsProps = {
    config: {
        serviceOfferings: [
            {
                title: 'Advisory Services',
                icon: '/Advisory-services-1-1.jpg'
            },
            {
                title: 'Implementations',
                icon: '/implementations.png'
            },
            {
                title: 'Integration and Development',
                icon: '/integration-and-development.png'
            },
            {
                title: 'Managed Services',
                icon: '/managed-services.png'
            },
        ]
    }
}

export default function DemandPlanningCloudPage() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col space-y-10">
                <div className="flex flex-col space-y-10">
                    <Image src="/demand-planning-cloud.jpeg"
                        alt="Demand Planning Cloud"
                        width={0} height={0} sizes="100vw"
                        style={{ width: '100%', height: '50%' }}
                        className="z-0" />
                    <div className="z-50 absolute pt-36 space-y-5">
                        <h1 className="text-6xl font-bold">Demand Planning Cloud</h1>
                        <h3 className="text-2xl font-bold">FORECASTING DEMANDS WITH ACCURACY</h3>
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="flex flex-col space-y-5">
                        <h2 className="text-4xl font-bold">Demand Planning Cloud</h2>
                        <Separator className="w-20 h-1" />
                        <p className="text-lg">Sensing the demand at the appropriate time is one of the biggest challenges that supply chain executives face regularly. But after the introduction of the Oracle Demand Planning Cloud solution, executives can accurately forecast customer demands, plan for the supply chain, and deliver on time. Applying cognitive intelligence for forecasting new products, segmenting customers and products for better accuracy, attach-rate-based forecasting, ease of forecast tuning for end-users are some of the aspects that have given Oracle Demand Planning Cloud a competitive edge over other products.</p>
                        <p className="text-lg">This solution can help you align your plans and operations with S&OP and integrated business planning. Oracle Demand Planning Cloud assists supply chain executives to monitor operations in real-time and help make smarter decisions for the better good of the company.</p>
                        <p className="text-lg">Oink Solutions has helped numerous customers adopt Oracle Demand Planning Cloud considering industry best practices. Trinamix has also helped existing Oracle Demantra customers migrate to Oracle Demand Planning Cloud.</p>
                    </div>
                </div>
                <div className="flex flex-1 pt-10">
                    <ServiceHighlights serviceHighlights={serviceHighlightsConfig.serviceHighlights} />
                </div>
                <div className="flex flex-col items-start space-y-5 pt-20">
                    <h3 className="text-4xl font-bold">Why Oink</h3>
                    <Separator className="w-20 h-1" />
                    <p className="text-lg">Oink Solutions has a team of experts who have worked on multiple Oracle Demand Planning Cloud implementations. Our team has a deep understanding of the product and can help you implement the solution in the best possible way. We have a proven track record of delivering projects on time and within budget. We have a team of experts who can help you with the implementation, integration, and support of Oracle Demand Planning Cloud.</p>

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