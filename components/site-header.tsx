import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";

export default function SiteHeader() {
    return (
        <header className="supports-backdrop-blur:bg-background/60 sticky h-16 top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-full items-center">
                <MainNav />
                <MobileNav />
                <div className="flex flex-auto items-end justify-end space-x-5 lg:pr-20">
                    <nav className="flex items-center space-x-5">
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}