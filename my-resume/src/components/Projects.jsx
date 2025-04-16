import { motion } from "framer-motion";


export default function Projects() {
    const projects = [
        {
            title: 'Trip Cost Calculator App',
            tech: 'React + Jetpack Compose | 2024',
            image: '/images/tripcalc.jpg',  // Replace with your image path or URL
            items: [
                'Calculates gig driver earnings by factoring in distance, fuel cost, and efficiency.',
                'Exports data to CSV with Material 3 theming.'
            ]
        },
        {
            title: 'Task & Time Manager',
            tech: 'Android Studio | 2024',
            image: '/images/tasktime.jpg',
            items: [
                'Built a Kotlin-based app for managing tasks and tracking time.',
                'Focused on minimal UI and productivity optimization.'
            ]
        },
        {
            title: 'Creative Content Portfolio Site',
            tech: 'HTML/CSS/JS | 2022',
            image: '/images/portfolio.jpg',
            items: [
                'Designed and deployed a personal branding site with client showcases.',
                'Improved site UX based on user testing and feedback.'
            ]
        }
    ];

    return (
        <motion.div
            className="section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2>Projects</h2>

            <div className="project-grid">
                {projects.map((proj, index) => (
                    <motion.div
                        className="project-card"
                        key={index}
                        whileHover={{ scale: 1.04, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                        transition={{ type: "spring", stiffness: 250 }}
                    >
                        <div className="project-image">
                            <img src={proj.image} alt={proj.title} />
                        </div>
                        <h3>{proj.title}</h3>
                        <p><em>{proj.tech}</em></p>
                        <ul>
                            {proj.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
``
