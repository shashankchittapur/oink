import { ServiceHighlightsConfig } from "@/components/service-highlights";
import { ServiceOfferingsConfig, ServiceOfferingsProps } from "@/components/service-offerings";

export interface ITServiceDefinition {
    path: string,
    href: string,
    title: string,
    description: string,
    heroImage: string,
    overview: ITServiceOverview,
    services?: ServicesConfig,
    benifits?: ServiceBenifitsConfig,
}

export interface ITServiceOverview {
    details: string[],
    image?: string,
}

export interface ServicesConfig {
    description: string,
    services: ServiceHighlightsConfig,
}

export interface ServiceBenifitsConfig {
    description: string,
    benifits: ServiceOfferingsConfig[],
}