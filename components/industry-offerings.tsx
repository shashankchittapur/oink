import { IndustryOffering } from "@/types/industries";
import { Separator } from "./ui/separator";
import { Card, CardHeader, CardContent } from "./ui/card";
import Image from "next/image";


export default function IndustryOfferings({ industryOfferings }
    : { industryOfferings: IndustryOffering[] }) {

    return (
        <div className="flex flex-col space-y-10">
            <h2 className="text-3xl font-bold text-start">Offerings</h2>
            <Separator className="w-1/5 h-1" />
            <div className="grid grid-flow-row grid-cols-3  space-x-10 space-y-10 items-center justify-center">
                {industryOfferings.map((item, index) => (
                    <Card key={index} className="space-y-5 rounded-lg  border border-gray-50 pt-10 pb-10
                    transition duration-300 hover:border-blue-500 hover:scale-110">
                        <CardHeader className="items-center justify-center space-x-5">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                        </CardHeader>
                        <CardContent className="text-center justify-center">
                            <p className=" text-gray-300">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )


}
