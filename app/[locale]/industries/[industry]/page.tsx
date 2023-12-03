import IndustryBenifits from "@/components/industry-benifits"
import IndustryOverview from "@/components/industry-overview"
import { industryDefinitions } from "@/config/industries"
import Image from "next/image"



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
        <div className="container mx-auto space-y-20 pb-20 pt-20">
            <div className="flex flex-col space-y-10">
                <div className="flex flex-col space-y-10">
                    <Image src={industry.heroImage}
                        alt={industry.title}
                        width={0} height={0} sizes="100vw"
                        style={{ width: '100%', height: '50%' }}
                        className="z-0" />
                    <div className="z-30 absolute pt-36 space-y-5 text-white pl-5">
                        <h1 className="text-6xl font-bold">{industry.title}</h1>
                        <h3 className="text-2xl font-bold">{industry.description}</h3>
                    </div>
                </div>
            </div>
            <IndustryOverview industryOverview={overView} />
            <IndustryBenifits industryBenifits={industry.industryBenifits} />

        </div>
    )
}