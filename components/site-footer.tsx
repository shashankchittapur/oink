import { siteConfig } from "@/config/site"
import Link from "next/link"
import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"

export function SiteFooter() {
    return (
        <footer className="py-6 md:px-8 md:py-0 bottom-0">
            <div className="container flex h-24 items-center">
                <div className="flex flex-1 items-center justify-between space-x-5">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © 2023 Oink Solutions.
                        <Link
                            href={siteConfig.links.oink}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline-offset-4"
                        >
                        </Link>
                    </p>
                </div>
                <div className="flex flex-1 items-center space-x-5 justify-center">
                    <Link
                        href={siteConfig.links.privacy}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline-offset-4"
                    >   Privacy Policy {" "}
                    </Link>
                    <span>|</span>
                    <Link
                        href={siteConfig.links.annexure}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline-offset-4"
                    >
                        Cutomer Data Processing Annexure
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-5">
                    <nav className="flex items-center">
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
                </div>
            </div>
        </footer>
    )
}