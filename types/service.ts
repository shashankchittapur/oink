import { ServiceHighlightsConfig } from "@/components/service-highlights";
import { ServiceOfferingsProps } from "@/components/service-offerings";

export interface ServiceDefinition {
    path: string,
    title: string,
    description: string,
    heroImage: string,
    details: string[],
    serviceHighlightsConfig: ServiceHighlightsConfig,
    serviceOfferingsProps: ServiceOfferingsProps,
    whyChooseUs: string,
}