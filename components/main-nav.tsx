"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"

import Image from "next/image"
import { MainNavigation } from "./navigation-menu"


export function MainNav() {

    const { theme } = useTheme()
    return (
        <div className="md:flex flex-row space-x-5 mr-4 hidden">
            <div className="flex items-center  justify-center lg:pl-10">
                <Link href="/" className="mr-6 items-start justify-start space-x-2 lg:pl-20 sm:pl-5">
                    <Image src="/oink-logo-white.png" className="dark:hidden" alt="Oink Solutions" width={40} height={40} />
                    <Image src="/oink-logo-dark.png" className="hidden dark:block" alt="Oink Solutions" width={40} height={40} />
                </Link>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <MainNavigation />
            </div>

        </div>
    )
}