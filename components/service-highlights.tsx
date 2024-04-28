'use client';

import { Icons } from "./icons";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image"

export interface ServiceHighlightsConfig {
    serviceHighlights: ServiceHighlight[];
}

export interface ServiceHighlight {
    title: string;
    icon: string;
}

export default function ServiceHighlights(
    config: ServiceHighlightsConfig
) {
    return (
        <div className="lg:flex gap-5 items-center justify-center sm:grid md:grid lg:grid-row-1 md:grid-rows-2 md:grid-cols-2 sm:grid-cols-1">
            {config.serviceHighlights.map((item, index) => (
                <Card key={index} className="lg:w-[250px] lg:h-[250px]">
                    <CardHeader className="items-center justify-center">
                        <Image alt={item.title}
                            src={item.icon}
                            width={100} height={100} />
                    </CardHeader>
                    <CardContent className="text-center justify-center">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                    </CardContent>
                </Card>

            ))}
        </div>
    );
}