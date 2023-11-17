"use client"

import * as React from "react"
import Link from "next/link"

import Image from "next/image"
import { MainNavigation } from "./navigation-menu"


export function MainNav() {

    return (
        <div className="flex flex-1 items-center justify-center">
            <div className="flex items-center  justify-center pl-10">
                <Link href="/" className="mr-6 items-start justify-start space-x-2">
                    <Image src="/logo.png" alt="Oink Solutions" width={150} height={200} />
                </Link>
            </div>
            <div className="flex flex-1 items-center justify-center pr-20">
                <MainNavigation />
            </div>

        </div>
    )
}