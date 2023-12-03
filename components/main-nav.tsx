"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"

import Image from "next/image"
import { MainNavigation } from "./navigation-menu"


export function MainNav() {

    const { theme } = useTheme()

    console.log(`Theme: ${theme}`)
    return (
        <div className="flex flex-1 items-center justify-center">
            <div className="flex items-center  justify-center pl-10">
                <Link href="/" className="mr-6 items-start justify-start space-x-2 pl-20">
                    {
                        theme === "dark" ? (
                            <Image src="/oink-logo-white.png" alt="Oink Solutions" width={40} height={40} />
                        ) : (
                            <Image src="/oink-logo-dark.png" alt="Oink Solutions" width={40} height={40} />
                        )
                    }
                </Link>
            </div>
            <div className="flex flex-1 items-center justify-center pr-20">
                <MainNavigation />
            </div>

        </div>
    )
}