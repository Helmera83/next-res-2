import { Home, Briefcase, Star, Code, Mail } from 'lucide-react';

export default function Sidebar() {
    return (
        <div className="sidebar desktop-sidebar">
            <div className="sidebar-title">My Portfolio</div>
            <ul className="sidebar-nav">
                <li><a href="#about"><Home size={18} /> About</a></li>
                <li><a href="#experience"><Briefcase size={18} /> Experience</a></li>
                <li><a href="#skills"><Star size={18} /> Skills</a></li>
                <li><a href="#projects"><Code size={18} /> Projects</a></li>
                <li><a href="#contact"><Mail size={18} /> Contact</a></li>
            </ul>
        </div>
    );
}
