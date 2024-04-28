import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export default function SiteHeader() {
    return (
        <header className="flex supports-backdrop-blur:bg-background/60 sticky h-24 top-0 z-50 w-full border-b bg-background/95 backdrop-blur items-center">
            <div className="flex h-full items-center">
                <MainNav />
                <MobileNav />
            </div>
        </header>
    )
}