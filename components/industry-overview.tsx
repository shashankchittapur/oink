import { OverViewEnum, Overview } from "@/types/industries";
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image"

export default function IndustryOverview({ industryOverview }: { industryOverview: Overview }) {

    const overViewType = industryOverview.overviewType
    const tableHighlights = industryOverview.tableHighlights

    return (
        <div className="flex flex-col items-center justify-center space-y-10">
            <div className="flex flex-col space-y-5">
                <h2 className="text-4xl font-bold">Overview</h2>
                <Separator className="w-20 h-1" />
                {industryOverview.details.map((detail) => (
                    <div key={detail} className="flex flex-col space-y-5">
                        <p className="text-lg">{detail}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-one">
                {
                    (overViewType === OverViewEnum.TABLE_VIEW) ?
                        (
                            <div className="lg:pl-20 pt-12 grid lg:gap-20 lg:grid-cols-2 sm:grid-cols-1 sm:gap-5">
                                {tableHighlights.highlights.map((item, index) => (
                                    <div key={index} className="text-center relative lg:w-[500px] md:w-[400px] lg:h-[200px] border rounded-lg
                                    transition duration-300 hover:border-b-white hover:scale-110">
                                        <div className="flex flex-col text-center justify-center 
                                            top-0 left-0 w-full h-full z-0">
                                            <Image alt={item.title} src={item.icon} width={0} height={0}
                                                sizes="100vw"
                                                style={{ width: '100%', height: '100%' }}
                                                className="object-cover z-0 rounded-lg hover:zoom-in-50" />
                                            <div className="absolute z-30 pl-5">
                                                <p className="lg:text-lg sm:text-sm font-bold text-white">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        ) :
                        (
                            <div>
                                <p>Coming Soon</p>
                            </div>
                        )
                }
            </div>
        </div>
    )
}