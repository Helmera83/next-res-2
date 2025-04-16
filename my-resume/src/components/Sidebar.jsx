import { Home, Briefcase, Star, Code, Mail } from 'lucide-react';

export default function Sidebar({ isOpen, closeSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? 'active' : ''}`}>
            <div className="sidebar-title"><h1>Amanda Helmer</h1></div>
            <ul className="sidebar-nav">
                <li><a href={"#about"} onClick={closeSidebar}><Home size={18} /> About</a></li>
                <li><a href={"#experience"} onClick={closeSidebar}><Briefcase size={18} /> Experience</a></li>
                <li><a href={"#skills"} onClick={closeSidebar}><Star size={18} /> Skills</a></li>
                <li><a href={"#projects"} onClick={closeSidebar}><Code size={18} /> Projects</a></li>
                <li><a href={"#contact"} onClick={closeSidebar}><Mail size={18} /> Contact</a></li>
            </ul>
        </div>
    );
}


