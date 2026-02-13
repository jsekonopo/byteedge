import { getProjects } from "@/app/lib/portfolio";
import PortfolioClient from "@/app/components/portfolio/PortfolioClient";

// Force dynamic rendering to ensure fresh data on each request (or revalidate frequently)
export const dynamic = 'force-dynamic';

export default async function PortfolioPage() {
    const projects = await getProjects();

    return <PortfolioClient initialProjects={projects} />;
}
