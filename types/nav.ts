import { Icons } from "@/components/icons"
import { ServiceHighlightsConfig } from "@/components/service-highlights"

export interface AppService {
    title: string
    href?: string
    path?: string
    disabled?: boolean
    external?: boolean
    icon?: keyof typeof Icons
    label?: string
    heroImage?: string
    description?: string
    details?: AppServiceDetails
    whyChooseUs?: string
}

export interface AppServiceDetails {
    title: string
    information: string[]
    overview: ServiceHighlightsConfig
    comprehensiveSupport?: string[]
}

export interface AppServiceWithChildren extends AppService {
    items: AppServiceWithChildren[]
}

export interface MainAppService extends AppService { }

export interface AppServicesWithChildren extends AppServiceWithChildren { }