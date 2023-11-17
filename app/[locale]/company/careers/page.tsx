import OpenPositions from "./open-positions";
import PerksList from "./perks-list";
import { getJobPostings } from "@/lib/career-api";

export default async function CareersPage() {

    const open_positions = await getJobPostings();

    return (
        <div className="flex flex-col pt-32 items-center space-y-10 justify-center">
            <div className="flex flex-1 flex-col items-center space-y-10 justify-center">
                <h1 className="text-4xl font-bold">Careers</h1>
                <h2 className="text-3xl text-center justify-center font-bold">Join a GTPW company that merges tech and great people.</h2>
            </div>
            <div className="flex flex-1 pl-32 pr-32 flex-col items-start space-y-10 justify-start">
                <h1 className="text-4xl font-bold">Perks</h1>
                <PerksList />
            </div>
            <div className="flex flex-1 pr-36 flex-col items-start space-y-10">
                <h1 className="text-4xl font-bold">Open Positions</h1>
                <OpenPositions open_positions={open_positions} />
            </div>

        </div>
    )
}