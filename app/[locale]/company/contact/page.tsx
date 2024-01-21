import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Contact } from "lucide-react";
import { ContactUsForm } from "@/components/contact-us-form";
import { Suspense } from "react";
import LoadingPage from "@/components/loading";
import ContactUsMain from "./components/contact-us-main";
import CompanyLocations from "@/components/company-locations";

export default function ContactPage() {

    return (
        <Suspense fallback={<LoadingPage />}>
            <div className="flex flex-col justify-between space-y-10 p-24">
                <div className="container mx-auto h-min px-4">
                    <div className="flex flex-col justify-between space-y-10">
                        <div className="text-3xl text-gray-400 space-y-5 text-start justify-center ">
                            <h1>We are here to help and answer any questions you might have.</h1>
                            <h1>We look forward to hearing from you..</h1>
                        </div>
                        <div className="flex flex-1 flex-row pt-20 space-x-10 justify-start items-center">
                            <Button className="hover:border-black py-2 px-4 rounded-full" variant="outline" >
                                <Link href="#send-message">
                                    Send Message
                                </Link>
                            </Button>
                            <Button className=" py-2 px-4 rounded-full" variant="ghost">
                                <ArrowDownIcon className="w-5 h-5" />
                                <Link className="pl-2" href="#contact-details">
                                    Contact details
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <ContactUsMain />
                <div id="contact-details" className="container mx-auto h-min px-4">
                    <div id="contact-details" className="flex flex-col p-24">
                        <div className="flex flex-1 flex-col">
                            <h2 className="text-3xl">OFFICES</h2>
                        </div>
                        <div className="flex flex-1 flex-col pt-5">
                            <h3 className="text-2xl">Stop by for coffee at our Headquarters</h3>
                        </div>
                        <CompanyLocations />
                    </div>
                </div>
            </div>
        </Suspense>
    )
}