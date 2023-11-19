import { SidebarNavItem } from '@/types/nav';
import { ListItem } from './navigation-menu';

interface OracleAppsMenuItemsConfig {
    oracleAppsMenuItems: SidebarNavItem[];
}

const oracleAppsMenuItemsConfig: OracleAppsMenuItemsConfig = {

    oracleAppsMenuItems: [
        {
            title: 'Supply Chain Planning Cloud Solutions',
            items: [
                {
                    title: 'Demand Planning Cloud',
                    href: '/demand-planning-cloud',
                    items: []
                },
                {
                    title: 'Supply Planning Cloud',
                    href: '/supply-planning-cloud',
                    items: []
                },
                {
                    title: 'Sales & Operations Planning Cloud',
                    href: '/sales-operations-planning-cloud',
                    items: []
                }
            ]
        },
        {
            title: 'Supply Chain Execution Cloud Solutions',
            items: [
                {
                    title: 'Inventory Management Cloud',
                    href: '/inventory-management-cloud',
                    items: []
                },
                {
                    title: 'Order Management Cloud',
                    href: '/order-management-cloud',
                    items: []
                },
                {
                    title: 'Procurement Cloud',
                    href: '/procurement-cloud',
                    items: []
                }
            ]
        },
        {
            title: 'Enterprise Resource Planning Cloud',
            items: [
                {
                    title: 'Financials',
                    href: '/financials',
                    items: []
                },
                {
                    title: 'Procurement',
                    href: '/procurement',
                    items: []
                },
                {
                    title: 'Project Portfolio Management',
                    href: '/project-portfolio-management',
                    items: []
                }
            ]
        },
        {
            title: 'Oracle Cloud CX',
            items: [
                {
                    title: 'Oracle Data Management Platform',
                    href: '/oracle-data-management-platform',
                    items: []
                },
                {
                    title: 'Oracle Commerce Cloud',
                    href: '/oracle-commerce-cloud',
                    items: []
                },
                {
                    title: 'Oracle CPQ Cloud',
                    href: '/oracle-cpq-cloud',
                    items: []
                },
                {
                    title: 'Oracle Subscription Management Cloud',
                    href: '/oracle-subscription-management-cloud',
                    items: []
                },
                {
                    title: 'Oracle Marketing Cloud',
                    href: '/oracle-marketing-cloud',
                    items: []
                }
            ]
        },
        {
            title: 'Product Lifecycle Management Cloud',
            items: [
                {
                    title: 'Product Management Cloud',
                    href: '/product-master-data-management',
                    items: []
                },

            ]
        },
        {
            title: 'Logistics',
            items: [
                {
                    title: 'Transportation Management Cloud',
                    href: '/transportation-management-cloud',
                    items: []
                },
                {
                    title: 'Global Trade Management Cloud',
                    href: '/global-trade-management-cloud',
                    items: []
                },
                {
                    title: 'Warehouse Management Cloud',
                    href: '/warehouse-management-cloud',
                    items: []
                }
            ]
        },
        {
            title: 'Enterprise Performance Management Cloud',
            items: [
                {
                    title: 'Planning and Budgeting',
                    href: '/planning-budgeting-cloud',
                    items: []
                },
                {
                    title: 'Tax Reporting',
                    href: '/tax-reporting-cloud',
                    items: []
                },
                {
                    title: 'Profitability And Cost Management',
                    href: '/profitability-cost-management-cloud',
                    items: []
                }
            ]
        }
    ]
}

export default function OracleAppsMenuContent() {
    return (
        <div className="grid w-[800px] gap-3 p-4 md:w-[800px] md:grid-cols-3 lg:w-[1000px] z-50 ">
            {oracleAppsMenuItemsConfig.oracleAppsMenuItems.map((item, index) => (
                <div key={index} className="flex flex-col">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <ul className="mt-6 space-y-2">
                        {item.items.map((item, index) => (
                            <ListItem
                                key={item.title}
                                title={item.title}
                                href={item.href}
                            >
                            </ListItem>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}