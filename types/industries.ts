export interface IndustryDefinition {
    path: string,
    href: string,
    title: string,
    heroImage: string,
    description: string,
    overview: Overview,
    industryBenifits: IndustryBenifits,
    industryOfferings: IndustryOfferingsProps,
    industryFocusAreas: IndustryFocusAreasConfig,

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

export interface IndustryFocusAreasConfig {
    focusAreas: IndustryFocusArea[],
}

export interface IndustryOfferingsProps {
    offerings: IndustryOffering[],
}

export interface IndustryOffering {
    title: string,
    description: string,
    icon: string,
}

export interface IndustryFocusArea extends IndustryOffering { }