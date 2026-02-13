import { cn } from "@/app/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={cn("flex items-center", className)}>
            {/* <Image
                src="/byteedge-logo.png"
                alt="ByteEdge Consulting"
                width={180}
                height={50}
                className="h-12 w-auto object-contain"
                priority
            /> */}
            <img
                src="/byteedge-logo-light-mode.png"
                alt="ByteEdge Consulting"
                className="h-12 w-auto object-contain block dark:hidden"
            />
            <img
                src="/byteedge-logo.png"
                alt="ByteEdge Consulting"
                className="h-12 w-auto object-contain hidden dark:block brightness-0 invert"
            />
        </Link>
    );
}
