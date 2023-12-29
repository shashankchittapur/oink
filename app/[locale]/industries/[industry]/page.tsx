import IndustryBenifits from "@/components/industry-benifits"
import IndustryOverview from "@/components/industry-overview"
import LoadingPage from "@/components/loading"
import { industryDefinitions } from "@/config/industries"
import Image from "next/image"
import { Suspense } from "react"



export async function generateStaticParams() {

    const industryNames = industryDefinitions.map((industry) => industry.path)

    return industryNames.map((industry) => ({
        industry
    }))
}

export default function IndustryPage({
    params,
}: {
    params: { industry: string }
}) {

    const industry = industryDefinitions.find((industry) => industry.path === params.industry)

    if (industry === undefined) {
        throw new Error(`Industry ${params.industry} not found`)
    }
    const overView = industry.overview

    return (
        <Suspense fallback={<LoadingPage />}>
            <div className="container mx-auto lg:space-y-20 lg:pb-20 lg:pt-20 md:pt-10">
                <div className="flex flex-col space-y-10">
                    <div className="flex flex-col space-y-10">
                        <Image src={industry.heroImage}
                            alt={industry.title}
                            width={0} height={0} sizes="100vw"
                            style={{ width: '100%', height: '50%' }}
                            className="z-0" />
                        <div className="z-30 absolute lg:pt-36 md:pt-24 sm:pt-12  lg:space-y-5 md:space-y-4 sm:space-y-3 text-white pl-5">
                            <h1 className="lg:text-6xl md:text-4xl font-bold">{industry.title}</h1>
                            <h3 className="lg:text-2xl font-bold">{industry.description}</h3>
                        </div>
                    </div>
                </div>
                <IndustryOverview industryOverview={overView} />
                <IndustryBenifits industryBenifits={industry.industryBenifits} />

            </div>
        </Suspense>
    )
}