"use client"
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { SAPAppsMenuItemsConfig, oracleAppsMenuItemsConfig } from "@/config/app-services";
import { industryDefinitions } from "@/config/industries"
import { IT_SERVICES } from "@/config/it-services";

export default function SiteFooterNew() {

    return (
        <footer className="py-6 md:px-8 md:py-0 bottom-0 bg-gray-400">
            <div className="flex lg:flex-row md:flex-col sm:flex-col justify-center space-x-20 pt-20 pb-10">
                <div className="flex flex-col items-start justify-start space-y-5">
                    <Link href="/" className="space-y-1">
                        <h2 className="text-3xl font-bold">Oink Solutions</h2>
                        <Separator className="my-10 bg-black " />
                    </Link>
                    <p className="text-sm">FOLLOW OINK SOLUTIONS</p>
                    <nav className="flex items-center space-x-3">
                        <Link
                            href={siteConfig.links.facebook}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className={cn(
                                    buttonVariants({
                                        variant: "ghost",
                                    }),
                                    "w-9 px-0"
                                )}
                            >
                                <Icons.facebook className="h-4 w-4 fill-current" />
                                <span className="sr-only">Facebook</span>
                            </div>
                        </Link>
                        <Link
                            href={siteConfig.links.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className={cn(
                                    buttonVariants({
                                        variant: "ghost",
                                    }),
                                    "w-9 px-0"
                                )}
                            >
                                <Icons.linkedIn className="h-4 w-4 fill-current" />
                                <span className="sr-only">LinkedIn</span>
                            </div>
                        </Link>
                        <Link
                            href={siteConfig.links.twitter}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className={cn(
                                    buttonVariants({
                                        variant: "ghost",
                                    }),
                                    "w-9 px-0"
                                )}
                            >
                                <Icons.twitter className="h-4 w-4 fill-current" />
                                <span className="sr-only">Twitter</span>
                            </div>
                        </Link>
                        <Link
                            href={siteConfig.links.youtube}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className={cn(
                                    buttonVariants({
                                        variant: "ghost",
                                    }),
                                    "w-9 px-0"
                                )}
                            >
                                <Icons.youtube className="h-4 w-4 fill-current" />
                                <span className="sr-only">Youtube</span>
                            </div>
                        </Link>
                    </nav>
                    <Link href="/company/contact">
                        <Button>Contact Us</Button>
                    </Link>
                </div>
                <div className="flex flex-col items-start justify-start space-y-5">
                    <div className="flex justify-center items-center pt-3">
                        <p className="text-lg font-bold">Oracle Applications</p>
                    </div>
                    <div>
                        <nav className="flex flex-col items-start justify-start space-y-3">
                            {oracleAppsMenuItemsConfig.menuItems.map((item) => (
                                <Link href={item.href || ''} key={item.title}>
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-center items-center pt-3">
                        <p className="text-lg font-bold">SAP Applications</p>
                    </div>
                    <div>
                        <nav className="flex flex-col items-start justify-start space-y-3">
                            {SAPAppsMenuItemsConfig.menuItems.map((item) => (
                                <Link href={item.href || ''} key={item.title}>
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start space-y-5">
                    <div className="flex justify-center items-center pt-3">
                        <p className="text-lg font-bold">Services</p>
                    </div>
                    <div>
                        <nav className="flex flex-col items-start justify-start space-y-3">
                            {IT_SERVICES.map((item) => (
                                <Link href={item.href || ''} key={item.title}>
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-center items-center pt-3">
                        <p className="text-lg font-bold">Industries</p>
                    </div>
                    <div>
                        <nav className="flex flex-col items-start justify-start space-y-3">
                            {industryDefinitions.map((item) => (
                                <Link href={item.href} key={item.title}>
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start space-y-5">
                    <div className="flex justify-center items-center pt-3">
                        <p className="text-lg font-bold">Quick Links</p>
                    </div>
                    <div>
                        <nav className="flex flex-col items-start justify-start space-y-3">
                            <Link href="/company/about">About Us</Link>
                            <Link href="/company/contact">Contact Us</Link>
                            <Link href="/company/careers">Careers</Link>
                            <Link href="/company/privacy">Privacy Policy</Link>
                            <Link href="/company/terms">Terms of Use</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )

}