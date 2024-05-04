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
        <div className="lg:pl-20 pt-12 grid lg:gap-10 lg:grid-cols-3 sm:grid-cols-2 sm:gap-5 gap-5">
            {config.serviceOfferings.map((item, index) => (
                <div key={index} className="text-center relative lg:w-[300px] md:w-[400px] lg:h-[200px] border rounded-lg
                transition duration-300 hover:border-b-white hover:scale-110">
                    <div className="flex flex-col text-center justify-center 
                     top-0 left-0 w-full h-full z-0">
                        <Image alt={item.title} src={item.icon} width={0} height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '100%' }}
                            className="object-cover z-0 rounded-lg hover:zoom-in-50" />
                        <div className="absolute z-30 pl-5">
                            <p className="lg:text-3xl text-2xl font-bold text-white">{item.title}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ServiceOfferings;