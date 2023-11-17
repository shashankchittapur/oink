import type { NextApiResponse } from "next";
import CareerService from "@/backend/services/career-service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
    const jobPosition = await request.json();
    console.log(`Job Position to Create:${JSON.stringify(jobPosition)}`);
    const result = await CareerService.create(jobPosition);
    if (!result) {
        return NextResponse.json({ status: 400 });
    }
    return NextResponse.json({ status: 201 });
}

export async function GET(request: NextRequest) {
    const result = await CareerService.getAll();
    NextResponse.json({ status: 200, body: result });
}

export async function PUT(request: NextRequest,
    response: NextApiResponse,) {
    const id: number = Number(request.nextUrl.searchParams.get("id"));
    const body = await request.json();
    const result = await CareerService.update(id, body);
    response.status(200).json(result);
}

export async function DELETE(request: NextRequest,
    response: NextApiResponse,) {
    const id: number = Number(request.nextUrl.searchParams.get("id"));
    const job = await CareerService.getOne(id);
    if (!job) {
        response.status(404).json({ message: `Job position with id ${id} not found` });
    }
    const result = await CareerService.delete(id);
    response.status(200).json(result);
}
