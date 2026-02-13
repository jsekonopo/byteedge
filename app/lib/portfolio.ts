import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'portfolio.json');

export type Category = "AI & Data" | "Web & SaaS" | "VR & Deep Tech";

export interface Project {
    id: string;
    title: string;
    category: string;
    filterCategory: Category;
    description: string;
    metrics: string[];
    tags: string[];
    icon: string; // Stored as string name of the icon
    color: "blue" | "purple" | "emerald" | "orange";
    image?: string;
}

export async function getProjects(): Promise<Project[]> {
    try {
        const fileContents = await fs.readFile(DATA_FILE_PATH, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error("Error reading portfolio data:", error);
        return [];
    }
}

export async function saveProject(newProject: Project): Promise<boolean> {
    try {
        const projects = await getProjects();
        projects.push(newProject);
        await fs.writeFile(DATA_FILE_PATH, JSON.stringify(projects, null, 2), 'utf8');
        return true;
    } catch (error) {
        console.error("Error saving portfolio data:", error);
        return false;
    }
}
