import { NextResponse } from 'next/server';
import { getProjects, saveProject, Project } from '@/app/lib/portfolio';

export async function GET() {
    const projects = await getProjects();
    return NextResponse.json(projects);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // Basic validation could go here
        const success = await saveProject(body as Project);

        if (success) {
            return NextResponse.json({ success: true, project: body });
        } else {
            return NextResponse.json({ success: false, error: "Failed to save project" }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
    }
}
