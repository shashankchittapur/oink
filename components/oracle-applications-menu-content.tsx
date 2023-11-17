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
                    href: 'supply-chain-planning-cloud/demand-planning-cloud',
                    items: []
                },
                {
                    title: 'Supply Planning Cloud',
                    href: 'supply-chain-planning-cloud/supply-planning-cloud',
                    items: []
                },
                {
                    title: 'Sales & Operations Planning Cloud',
                    href: 'supply-chain-planning-cloud/sales-operations-planning-cloud',
                    items: []
                }
            ]
        },
        {
            title: 'Supply Chain Execution Cloud Solutions',
            items: [
                {
                    title: 'Inventory Management Cloud',
                    href: 'supply-chain-execution-cloud/inventory-management-cloud',
                    items: []
                },
                {
                    title: 'Order Management Cloud',
                    href: 'supply-chain-execution-cloud/order-management-cloud',
                    items: []
                },
                {
                    title: 'Procurement Cloud',
                    href: 'supply-chain-execution-cloud/procurement-cloud',
                    items: []
                }
            ]
        },
        {
            title: 'Enterprise Resource Planning Cloud',
            items: [
                {
                    title: 'Financials',
                    href: 'enterprise-resource-planning/financials',
                    items: []
                },
                {
                    title: 'Procurement',
                    href: 'enterprise-resource-planning/procurement',
                    items: []
                },
                {
                    title: 'Project Portfolio Management',
                    href: 'enterprise-resource-planning/project-portfolio-management',
                    items: []
                }
            ]
        },
        {
            title: 'Oracle Cloud CX',
            items: [
                {
                    title: 'Oracle Data Management Platform',
                    href: 'oracle-cloud-cx/oracle-data-management-platform',
                    items: []
                },
                {
                    title: 'Oracle Commerce Cloud',
                    href: 'oracle-cloud-cx/oracle-commerce-cloud',
                    items: []
                },
                {
                    title: 'Oracle CPQ Cloud',
                    href: 'oracle-cloud-cx/oracle-cpq-cloud',
                    items: []
                },
                {
                    title: 'Oracle Subscription Management Cloud',
                    href: 'oracle-cloud-cx/oracle-subscription-management-cloud',
                    items: []
                },
                {
                    title: 'Oracle Marketing Cloud',
                    href: 'oracle-cloud-cx/oracle-marketing-cloud',
                    items: []
                }
            ]
        },
        {
            title: 'Product Lifecycle Management Cloud',
            items: [
                {
                    title: 'Product Management Cloud',
                    href: 'product-lifecycle-management-cloud/product-master-data-management',
                    items: []
                },

            ]
        },
        {
            title: 'Logistics',
            items: [
                {
                    title: 'Transportation Management Cloud',
                    href: 'logistics/transportation-management-cloud',
                    items: []
                },
                {
                    title: 'Global Trade Management Cloud',
                    href: 'logistics/global-trade-management-cloud',
                    items: []
                },
                {
                    title: 'Warehouse Management Cloud',
                    href: 'logistics/warehouse-management-cloud',
                    items: []
                }
            ]
        },
        {
            title: 'Enterprise Performance Management Cloud',
            items: [
                {
                    title: 'Planning and Budgeting',
                    href: 'enterprise-performance-management-cloud/planning-budgeting-cloud',
                    items: []
                },
                {
                    title: 'Tax Reporting',
                    href: 'enterprise-performance-management-cloud/tax-reporting-cloud',
                    items: []
                },
                {
                    title: 'Profitability And Cost Management',
                    href: 'enterprise-performance-management-cloud/profitability-cost-management-cloud',
                    items: []
                }
            ]
        }
    ]
}

export default function OracleAppsMenuContent() {
    return (
        <div className="grid w-[800px] gap-3 p-4 md:w-[800px] md:grid-cols-3 lg:w-[1000px] ">
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