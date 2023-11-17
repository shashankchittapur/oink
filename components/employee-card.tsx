import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export default function EmployeeCard({ name, title, image }: { name: string, title: string, image: string }) {
    return (
        <div className="flex flex-1 flex-col space-y-5 ">
            <Card className="border-none">
                <CardContent className="pt-2">
                    <Image className="rounded-sm" src={image} alt={name} width={250} height={250} />
                </CardContent>
                <CardFooter>
                    <div className="flex flex-col space-y-2">
                        <p className="text-xl font-bold">{name}</p>
                        <p className="text-sm">{title}</p>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}