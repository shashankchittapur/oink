import { NewJobFormValues } from "@/app/[locale]/company/admin/new-job-posting/new-job-posting-form";

export async function addJobPosting(jobPosting: NewJobFormValues) {
    const response = await fetch('/api/careers', {
        body: JSON.stringify(jobPosting),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    });
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(response.statusText);
    }
}

export async function getJobPostings() {
    console.log('getJobPostings');
    const response = await fetch('/api/careers');
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(response.statusText);
    }
}

export async function getJobPosting(id: string) {
    const response = await fetch(`/api/careers/${id}`);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(response.statusText);
    }
}