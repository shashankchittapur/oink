import { IndustryFocusArea } from "@/types/industries";
import { Separator } from "./ui/separator";
import { Card, CardHeader, CardContent } from "./ui/card";

export default function IndustryFocusAreas({
    focusAreas
}: {
    focusAreas: IndustryFocusArea[]
}) {
    return (
        <div className="flex flex-col space-y-10">
            <h2 className="text-3xl font-bold text-start">Focus Areas</h2>
            <Separator className="w-20 h-1" />
            <p className="text-lg text-white">Our focus areas are designed to help you achieve your goals</p>
            <div className="grid grid-flow-row grid-cols-3  space-x-10 space-y-10 items-center justify-center">
                {focusAreas.map((item, index) => (
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