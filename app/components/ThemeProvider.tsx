"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check local storage or default to dark
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        // If no saved theme, default to dark
        const initialTheme = savedTheme || "dark";
        setThemeState(initialTheme);

        // Apply theme class immediately
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(initialTheme);
        root.style.colorScheme = initialTheme;
    }, []);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme);

        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(newTheme);
        root.style.colorScheme = newTheme;
    };

    // Prevent hydration mismatch by rendering nothing until mounted, 
    // OR render children but avoid specific theme-dependent rendering if needed.
    // For now, we render children to avoid layout shift, but the theme might flicker if we don't block.
    // However, blocking render is bad for SEO.
    // The script in layout.tsx (if we added one) would prevent flicker. 
    // Since we can't easily add a script tag to head in Next.js app router without a layout change,
    // we accept a potential millisecond flicker or use the `dark` class on html by default (which we did).

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
