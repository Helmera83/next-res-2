import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Skills() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//cdn.credly.com/assets/utilities/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const skillSet = [
        "Data Analytics",
        "ETL",
        "Agile Project Management",
        "Project Scoping And Planning",
        "Stakeholder Management",
        "Jira",
        "Microsoft 365",
        "Email Campaigns",
        "Automation"
    ];

    const certifications = [
        { id: "d7017e5b-af2b-4346-85c6-997574751d8a", name: "Google Project Management" },
        { id: "2665a38f-c033-40a5-9b85-ccec67be5608", name: "Google Data Analytics" },
        { id: "ba7c1481-58ee-411d-baaa-974b759411d1", name: "Google UX Design" },
        { id: "e4f46593-3bf9-40e1-843b-cda83334ef03", name: "Google Digital Marketing" }
    ];

    return (
        <motion.div
            className="section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2>Skills</h2>
            <div>
                {skillSet.map(skill => (
                    <motion.span
                        className="tag-cloud"
                        key={skill}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>

            <h3 style={{ marginTop: '40px' }}>Certifications</h3>
            <div className="cert-badges">
                {certifications.map(cert => (
                    <div
                        key={cert.id}
                        data-iframe-width="150"
                        data-iframe-height="270"
                        data-share-badge-id={cert.id}
                        data-share-badge-host="https://www.credly.com"
                        style={{ margin: "10px" }}
                    />
                ))}
            </div>
        </motion.div>
    );
}
