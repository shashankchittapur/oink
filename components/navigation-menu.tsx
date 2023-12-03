"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import OracleAppsMenuContent from "./oracle-applications-menu-content"
import { industryDefinitions } from "@/config/industries"


export function MainNavigation() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Offerings</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <OracleAppsMenuContent />
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">

                            <li className="row-span-5 flex flex-col items-center justify-center">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="flex flex-col">
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Oink Solutions
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Our solutions, powered by industry specific konwledge models.
                                            </p>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>

                            <ListItem href="/services/consulting" title="Consulting">
                                Consulting services for your business.
                            </ListItem>
                            <ListItem href="/services/cloud-solutions" title="Cloud Solutions">
                                Cloud solutions to help you scale.
                            </ListItem>
                            <ListItem href="/services/enterprise-solutions" title="Enterprise Solutions">
                                Enterprise solutions to help you scale.
                            </ListItem>
                            <ListItem href="/services/data-analytics" title="Data & Analytics">
                                Managed services to help you scale.
                            </ListItem>
                            <ListItem href="/services/web-development" title="Web Development">
                                Web development services to help you scale.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {industryDefinitions.map((industryDefinition) => (
                                <IndustryListItem
                                    key={industryDefinition.title} title={industryDefinition.title}
                                    href={industryDefinition.path} />
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            <ListItem href="/company/about" title="About">
                                Learn more about Oink.
                            </ListItem>
                            <ListItem href="/company/contact" title="Contact">
                                Contact us.
                            </ListItem>
                            <ListItem href="/company/press" title="Press">
                                Press releases.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu >
    )
}

export const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"


export function IndustryListItem({ title, href }: { title: string, href: string }) {

    const path = `/industries/${href}`
    return (

        < ListItem
            key={title}
            title={title}
            href={path}
        >
        </ListItem>
    )
}
