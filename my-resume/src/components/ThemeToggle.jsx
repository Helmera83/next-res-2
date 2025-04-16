import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";


export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme") || "light";
        setTheme(currentTheme);
        document.documentElement.setAttribute("data-theme", currentTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
}
