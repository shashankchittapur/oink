import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export default function AboutUsMainSection() {
    const t = useTranslations('company.about')
    return (
        <div className="container">
            <div className="flex flex-col items-center justify-center space-y-20 pt-24 pb-24">
                <div className="text-center w-3/4 ">
                    <h1 className="text-9xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent">
                        We love creators
                    </h1>
                    <h2 className="mt-6 text-lg leading-8 dark:text-gray-400 text-gray-800">
                        We are a team of passionate people whose goal is to improve everyone&apos;s life through disruptive products. We build great products to solve your business problems.
                    </h2>
                </div>

                <div className="flex flex-1 ">
                    <div className="flex flex-1 flex-row space-x-10 dark:text-gray-400 ">
                        <div className="flex flex-col space-y-5 ">
                            <p className="text-lg">{t('title-2')}</p>
                            <p className="text-lg">Today, we continue to innovate with our end-to-end IT services. Our comprehensive family of solutions can help you run, manage, support, customize, configure, connect, protect, monitor, and optimize your enterprise application, database, and technology software platforms.</p>
                        </div>
                        <div className="flex flex-col space-y-5 flex-wrap items-center justify-center ">
                            <p className="text-lg">With our global, unified solutions, leveraging a purpose-built, follow-the-sun service model, you can extract the greatest value from your enterprise software, invest in innovation, gain competitive advantage, and enable growth.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full">

                    <div className="flex flex-row space-x-5 w-1/4 ">
                        <Separator orientation="vertical" />
                        <div className="flex  flex-col space-y-5 pl-3 pr-16">
                            <h1 className="text-3xl font-bold">2020</h1>
                            <p className="text-md text-gray-400">Business was founded</p>
                        </div>
                    </div>

                    <div className="flex flex-row space-x-5  w-1/4">
                        <Separator orientation="vertical" />
                        <div className="flex  flex-col space-y-5 pl-3 pr-16">
                            <h1 className="text-3xl font-bold">10+</h1>
                            <p className="text-md text-gray-400">People on team</p>
                        </div>
                    </div>

                    <div className="flex flex-row space-x-5  w-1/4">
                        <Separator orientation="vertical" />
                        <div className="flex flex-1 flex-col space-y-5 pl-3 pr-16">
                            <h1 className="text-3xl font-bold">10+</h1>
                            <p className="text-md text-gray-400">Clients</p>
                        </div>
                    </div>

                    <div className="flex flex-1 flex-row space-x-5 ">
                        <Separator orientation="vertical" />
                        <div className="flex flex-1 flex-col space-y-5 pl-3 pr-16">
                            <h1 className="text-3xl font-bold"><span></span>₹10M</h1>
                            <p className="text-md text-gray-400">Revenue</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}
