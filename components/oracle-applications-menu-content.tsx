
import { ListItem } from './navigation-menu';
import { OfferingsMenuItemsConfig, SAPAppsMenuItemsConfig, oracleAppsMenuItemsConfig, o9AppsMenuItemsConfig } from '@/config/app-services';
import Link from 'next/link';



const appMenuItemsConfigMap: Map<string, OfferingsMenuItemsConfig> = new Map([
    ['Oracle Applications', oracleAppsMenuItemsConfig],
    ['SAP', SAPAppsMenuItemsConfig],
    ['O9 Solutions', o9AppsMenuItemsConfig]
]);

export default function OracleAppsMenuContent() {
    return (
        <div className="flex lg:w-[800px] md:w-[700px] gap-3 p-2 flex-1  w-max  z-50 ">
            <div className="flex  gap-3  flex-row">
                {Array.from(appMenuItemsConfigMap.entries()).map(([appName, appMenuItemsConfig]) => (
                    <div className="flex flex-col gap-3" key={appName}>
                        {ServicesPerApp(appName, appMenuItemsConfig)}
                    </div>
                ))}
            </div>
        </div>
    );
}

function ServicesPerApp(appName: string, appMenuItemsConfig: OfferingsMenuItemsConfig) {
    return <div className="flex flex-col gap-3">
        <span className="flex items-center justify-center">{appName}</span>
        <div className="flex gap-3 flex-col">
            <ul>
                {appMenuItemsConfig.menuItems.map((item, index) => (
                    <Link href={item.href ? item.href : ''} key={index}>
                        <ListItem
                            key={item.title} title={item.title}
                            {...(item.href ? { href: item.href } : {})} />
                    </Link>
                ))}
            </ul>
        </div>
    </div>;
}

