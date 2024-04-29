import Marquee from "react-fast-marquee";
import { companyServiceFeatures } from "@/config/company-service-features";
import Image from "next/image";
export default function CompanyFeaturesMarquee() {

    return (
        <div className="min-h-screen">
            <div className="flex flex-col">
                <div className="flex flex-col space-y-5">
                    <div className="w-full">
                        <Marquee
                            gradient={false}
                            speed={50}
                            pauseOnHover={true}
                            pauseOnClick={true}
                            style={{ width: '100%', height: '100%' }}
                        >
                            {companyServiceFeatures.map((feature, index) => (
                                <div className="flex flex-col space-y-5" key={index}>
                                    <div className="bg-gradient-to-r from-indigo-400 to-pink-900 bg-clip-text
                      bg-transparent text-transparent outline-transparent lg:w-[300px] w-[400px]  ">
                                        <div className="flex flex-col mx-auto space-y-5 text-start pl-10 py-10">
                                            <div className="flex items-center justify-center">
                                                <Image src={feature.icon} alt={feature.title} width={400} height={400} />
                                            </div>
                                            <div className="flex flex-col space-y-3 text-start pl-10 py-10">
                                                <h1 className="text-xl  font-extrabold tracking-tight sm:text-3xl">
                                                    {feature.title}
                                                </h1>
                                                <p className="text-xl">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </div >
    )
}