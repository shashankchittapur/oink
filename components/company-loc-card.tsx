import Image from "next/image";
import {
    Card,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    CardHeader
} from "./ui/card";

export default function ComapnyLocationCard({ city, country, address, officeName, companyName, phoneNumber, image }:
    { city: string, country: string, address: string, officeName: string, companyName: string, phoneNumber: string, image: string }) {

    return (
        <Card className="w-[350px] bg-gray-200">
            <CardHeader>
                <CardTitle className="dark:text-black">{city}</CardTitle>
                <CardDescription className="pt-2">{country}</CardDescription>
                <CardContent>
                    <div className="flex flex-row space-x-2">
                        <div className="flex flex-1 flex-col">
                            <CardDescription><span className="text-xl text-black font-bold">{officeName}</span></CardDescription>
                            <div className="p-2">
                                <CardDescription className="pt-1 pb-1">{companyName}</CardDescription>
                                <CardDescription>{address}</CardDescription>
                            </div>

                            <div>
                                <p className="text-black font-bold">{phoneNumber}</p>

                            </div>

                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Image alt="contact-us" src={image} width={1500} height={50} />
                </CardFooter>
            </CardHeader>
        </Card>
    )
}