import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSending(true);

        emailjs
            .send(
                "service_z6djyep",       // replace with your EmailJS service ID
                "template_gch4hwc",      // replace with your EmailJS template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message
                },
                "babyR-J6Wk2DExKRD"        // replace with your EmailJS public key
            )
            .then(
                result => {
                    console.log(result.text);
                    setSubmitted(true);
                    setFormData({ name: "", email: "", message: "" });
                    setSending(false);
                },
                error => {
                    console.error(error.text);
                    setSending(false);
                }
            );
    };

    return (
        <div className="section">
            <h2>Contact</h2>
            {!submitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="ctaBtn" disabled={sending}>
                        {sending ? "Sending..." : "Send Message"}
                    </button>
                </form>
            ) : (
                <p style={{ marginTop: "20px", fontSize: "1.1rem", color: "var(--primary-color)" }}>
                    Thank you! Your message has been sent. I’ll get back to you soon 👋
                </p>
            )}
        </div>
    );
}
