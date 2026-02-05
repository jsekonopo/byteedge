import { Logo } from "@/app/components/Logo";

export function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <Logo />
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    © {new Date().getFullYear()} ByteEdge Consulting. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
