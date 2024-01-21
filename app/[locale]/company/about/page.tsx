import { Suspense } from "react";
import AboutUsMainSection from "./components/about-us-main-section";
import JoinOurTeam from "./components/join-our-team";
import OurTeam from "./components/our-team";
import OurValues from "./components/our-values";
import LoadingPage from "@/components/loading";

export default function AboutUsPage() {
    return (
        <Suspense fallback={<LoadingPage />}>
            <div className="flex flex-col justify-between space-y-10 p-24">
                <AboutUsMainSection />
                <OurValues />
                <OurTeam />
                <JoinOurTeam />
            </div>
        </Suspense>
    )
}