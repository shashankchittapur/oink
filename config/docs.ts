import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface DocsConfig {
    mainNav: MainNavItem[]
    sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Get Started",
            href: "/getting-started",
        },
        {
            title: "Catalog",
            href: "/catalog",
        },
        {
            title: "Dashboard",
            href: "/dashboard",
        }
    ],
    sidebarNav: [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Login",
                    href: "/getting-started/",
                    items: [],
                },
                {
                    title: "Create Application",
                    href: "/getting-started/create-application",
                    items: [],
                },
                {
                    title: "Generate PAT",
                    href: "/getting-started/generate-pat",
                    items: [],
                },
                {
                    title: "Make An Api Request",
                    href: "/getting-started/make-an-api-request",
                    items: [],
                },

            ],
        },
        {
            title: "API Documentation",
            items: [
                {
                    title: "SSO Insights",
                    href: "/docs/sso-insights",
                    items: [],
                },
                {
                    title: "Uber",
                    href: "/docs/uber",
                    items: [],
                },
            ],
        },
    ],
}