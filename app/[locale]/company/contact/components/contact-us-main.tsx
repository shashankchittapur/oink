import { ContactUsForm } from "@/components/contact-us-form";
import { blurImageURL } from "@/config/images";
import Image from "next/image";

export default function ContactUsMain() {
    return (
        <div id="send-message" className="container mx-auto h-min px-4">
            <div className="flex flex-row pt-24 pb-24">
                <div className="flex flex-col w-1/2 p-10 space-y-5">
                    <div className="text-3xl space-y-2">
                        <h3 className="text-lg">We are here to help and answer any questions you might have.</h3>
                        <h1 className="text-xl">We look forward to hearing from you..</h1>
                    </div>
                    <ContactUsForm />
                </div>
                <div className="flex w-1/2">
                    <Image src="/images/contact-us-hero.avif"
                        alt="contact-us"
                        width={0}
                        height={0}
                        style={{ width: "100%", height: "100%" }}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                        placeholder="blur"
                        blurDataURL={blurImageURL}
                    />
                </div>
            </div>
        </div>
    )
}