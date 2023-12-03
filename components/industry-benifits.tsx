import { IndustryBenifits } from '@/types/industries'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'

export default function IndustryBenifits({
    industryBenifits
}: {
    industryBenifits: IndustryBenifits
}) {

    return (
        <div className="flex flex-col space-y-10">
            <h2 className="text-3xl font-bold text-start">Benifits</h2>
            <Separator className="w-20 h-1" />
            <div className="flex flex-row space-x-10 items-center justify-center">
                {industryBenifits.benifits.map((item, index) => (
                    <Card key={index} className="space-y-5 border-none">
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
    )
}