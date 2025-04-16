// App.jsx
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import { Home, Briefcase, Star, Code, Mail } from 'lucide-react';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle.jsx';
import './App.css';

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    useEffect(() => {
        document.body.style.overflow = sidebarOpen ? 'hidden' : 'auto';
    }, [sidebarOpen]);

    return (
        <div className="app-container">
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                ☰
            </button>

            <Sidebar />

            {sidebarOpen && (
                <div className="overlay overlay-menu">
                    <ul className="overlay-nav">
                        <li><a href="#about" onClick={() => setSidebarOpen(false)}><Home size={18} /> About</a></li>
                        <li><a href="#experience" onClick={() => setSidebarOpen(false)}><Briefcase size={18} /> Experience</a></li>
                        <li><a href="#skills" onClick={() => setSidebarOpen(false)}><Star size={18} /> Skills</a></li>
                        <li><a href="#projects" onClick={() => setSidebarOpen(false)}><Code size={18} /> Projects</a></li>
                        <li><a href="#contact" onClick={() => setSidebarOpen(false)}><Mail size={18} /> Contact</a></li>
                    </ul>
                </div>
            )}

            <div className="main-content">
                <section id="about"><About /></section>
                <section id="experience"><Experience /></section>
                <section id="skills"><Skills /></section>
                <section id="projects"><Projects /></section>
                <section id="contact"><Contact /></section>

                <div className="theme-toggle">
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
}

export default App;
