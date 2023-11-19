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
        <div className="flex gap-3 grid-row-1">
            {config.serviceHighlights.map((item, index) => (
                <Card key={index} className="w-[200px] space-y-5">
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