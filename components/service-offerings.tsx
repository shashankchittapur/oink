import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";


export type ServiceOfferingsConfig = {
    title: string;
    icon: string;
};

export type ServiceOfferingsProps = {
    config: {
        serviceOfferings: ServiceOfferingsConfig[];
    };
};

const ServiceOfferings = ({ config }: ServiceOfferingsProps) => {

    return (
        <div className="pl-20 pt-12 grid gap-20 grid-cols-2 ">
            {config.serviceOfferings.map((item, index) => (
                <div key={index} className="text-center relative w-[500px] h-[200px] border rounded-lg
                transition duration-300 hover:border-b-white hover:scale-110">
                    <div className="flex flex-col text-center justify-center 
                     top-0 left-0 w-full h-full z-0 ">
                        <Image alt={item.title} src={item.icon} width={0} height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '100%' }}
                            className="object-cover z-0 rounded-lg hover:zoom-in-50" />
                        <div className="absolute z-50 pl-5">
                            <p className="text-3xl font-bold">{item.title}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ServiceOfferings;