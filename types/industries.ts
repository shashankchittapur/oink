export interface IndustryDefinition {
    path: string,
    title: string,
    heroImage: string,
    description: string,
    overview: Overview,
    industryBenifits: IndustryBenifits,
    //industryHighlightsConfig: IndustryHighlightsConfig,
    //industryOfferingsProps: IndustryOfferingsProps,
    //whyChooseUs: string,
}

export interface Overview {
    details: string[],
    overviewType: OverViewEnum,
    tableHighlights: IndustryHighlightsTableConfig,
}

export interface IndustryBenifits {
    benifits: IndustryBenifit[],
}

export interface IndustryBenifit {
    title: string,
    icon: string,
}

export enum OverViewEnum {
    TABLE_VIEW = "TABLE_VIEW",
    LIST_VIEW = "LIST_VIEW",
    REPORT_VIEW_WITH_IMAGE = "REPORT_VIEW_WITH_IMAGE",
}
export interface IndustryHighlightsTableConfig {
    highlights: IndustryHighlight[],
}

export interface IndustryHighlight {
    title: string,
    description: string,
    icon: string,
}

export interface IndustryOfferingsProps {
    title: string,
    offerings: IndustryOffering[],
}

export interface IndustryOffering {
    title: string,
    description: string,
    icon: string,
}