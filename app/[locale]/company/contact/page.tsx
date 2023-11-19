import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { ContactUsForm } from "@/components/contact-us-form";
import CompanyLocations from "@/components/company-locations";

export default function ContactPage() {
    return (
        <div className="container mx-auto h-min px-4">
            <div className="flex flex-1 pt-20 flex-col items-start justify-start">
                <div className="text-3xl space-y-2">
                    <h1 className="">We are here to help and answer any questions you might have.</h1>
                    <h1 className="pt-5">We look forward to hearing from you..</h1>
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


                <div id="send-message" className="flex flex-1 flex-row pt-36 pb-36">
                    <div className="flex flex-1 flex-col space-y-5 pr-5">
                        <div className="pb-14 pt-14 items-center justify-between">
                            <p className="text-2xl">If you have any support questions or would like to know more about our company, please use the contact form.</p>
                        </div>
                        <Separator />
                        <div className="pb-5 pt-14 items-center justify-between">
                            <p className="text-2xl">Want to experience the Oink Solutions in your organization?</p>
                        </div>
                        <div>
                            <Button className="hover:border-black bg-blue-500 border-black-500 border-spacing-5  px-4 rounded-full" variant="outline" >
                                Schedule a demo
                            </Button>
                        </div>


                    </div>
                    <div className="flex flex-1 flex-col space-y-5 pl-5">
                        <ContactUsForm />
                    </div>
                </div>
                <div id="contact-details" className="flex flex-1 flex-col p-24">
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

    )
}