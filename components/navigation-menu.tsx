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
import { IT_SERVICES } from "@/config/it-services"


export function MainNavigation() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Offerings</NavigationMenuTrigger>
                    <NavigationMenuContent className="left-auto">
                        <OracleAppsMenuContent />
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {IT_SERVICES.map((industryDefinition) => (
                                <Link href={industryDefinition.href} key={industryDefinition.title}>
                                    <ListItem
                                        key={industryDefinition.title} title={industryDefinition.title} />
                                </Link>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {industryDefinitions.map((industryDefinition) => (
                                <Link href={industryDefinition.href} key={industryDefinition.title}>
                                    <ListItem
                                        key={industryDefinition.title} title={industryDefinition.title}
                                    />
                                </Link>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            <Link href="/company/about" >
                                <ListItem title="About">
                                    Learn more about Oink.
                                </ListItem>
                            </Link>
                            <Link href="/company/contact" >
                                <ListItem title="Contact">
                                    Contact us.
                                </ListItem>
                            </Link>
                            <Link href="/company/press" >
                                <ListItem title="Press">
                                    Press releases.
                                </ListItem>
                            </Link>
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
