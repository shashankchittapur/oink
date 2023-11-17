import { Separator } from "@/components/ui/separator";
import { AccountForm } from "./new-job-posting-form";

export default function NewJobPosting() {
    return (
        <div className="container pt-32 space-y-6">
            <div>
                <h3 className="text-lg font-medium">New Job Posting</h3>
                <p className="text-sm text-muted-foreground">
                    Create a job posting with the following form.
                </p>
            </div>
            <Separator />
            <AccountForm />
        </div>
    )
}