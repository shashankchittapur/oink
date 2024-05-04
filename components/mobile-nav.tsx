"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { ViewVerticalIcon } from "@radix-ui/react-icons"
import { OfferingsMenuItemsConfig, SAPAppsMenuItemsConfig, oracleAppsMenuItemsConfig, o9AppsMenuItemsConfig } from '@/config/app-services';
import { IT_SERVICES } from "@/config/it-services"
import { industryDefinitions } from "@/config/industries"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { ListItem } from "./navigation-menu"

const appMenuItemsConfigMap: Map<string, OfferingsMenuItemsConfig> = new Map([
    ['Oracle Applications', oracleAppsMenuItemsConfig],
    ['SAP', SAPAppsMenuItemsConfig],
    ['O9 Solutions', o9AppsMenuItemsConfig]
]);

export function MobileNav() {
    const [open, setOpen] = React.useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <ViewVerticalIcon className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
                <MobileLink
                    href="/"
                    className="flex items-center"
                    onOpenChange={setOpen}
                >
                    <div className="space-x-2 flex flex-row">
                        <Image src="/oink-logo-dark.png" alt="Oink Solutions" width={32} height={32} />
                        <span className="text-3xl font-bold">{siteConfig.name}</span>
                    </div>
                </MobileLink>
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="flex flex-col space-y-3">
                        <p className="text-lg font-semibold text-gray-100">Offerings</p>
                        <div className="flex  gap-3  flex-col pl-2">
                            {Array.from(appMenuItemsConfigMap.entries()).map(([appName, appMenuItemsConfig]) => (
                                <div className="flex flex-col gap-3" key={appName}>
                                    <p className="text-lg font-semibold text-gray-100">{appName}</p>
                                    <div className="flex gap-3 flex-col pl-2">

                                        {appMenuItemsConfig.menuItems.map((item, index) => (
                                            <MobileLink href={item.href ? item.href : ''} key={index}
                                                onOpenChange={setOpen}
                                                className="text-muted-foreground text-gray-400">
                                                {item.title}

                                            </MobileLink>

                                        ))}

                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg font-semibold text-gray-100">Services</p>
                        <div className="flex flex-col space-y-2 pl-2">
                            {IT_SERVICES.map((service, index) => (
                                <MobileLink href={service.href}
                                    key={index} onOpenChange={setOpen}
                                    className="text-muted-foreground text-gray-400">
                                    {service.title}
                                </MobileLink>
                            ))
                            }
                        </div>
                        <p className="text-lg font-semibold text-gray-100">Industries</p>
                        <div className="flex flex-col space-y-2 pl-2">
                            {industryDefinitions.map((industry, index) => (
                                <MobileLink href={industry.href}
                                    key={index} onOpenChange={setOpen}
                                    className="text-muted-foreground text-gray-400">
                                    {industry.title}
                                </MobileLink>
                            ))
                            }
                        </div>
                        <p className="text-lg font-semibold text-gray-100">Company</p>
                        <div className="flex flex-col space-y-2 pl-2">
                            <MobileLink href="/company/about" onOpenChange={setOpen} className="text-muted-foreground text-gray-400">
                                About
                            </MobileLink>
                            <MobileLink href="/company/contact" onOpenChange={setOpen} className="text-muted-foreground text-gray-400">
                                Contact
                            </MobileLink>
                            <MobileLink href="/company/press" onOpenChange={setOpen} className="text-muted-foreground text-gray-400">
                                Press
                            </MobileLink>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">

                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}

interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void
    children: React.ReactNode
    className?: string
}

function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
}: MobileLinkProps) {
    const router = useRouter()
    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString())
                onOpenChange?.(false)
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </Link>
    )
}
