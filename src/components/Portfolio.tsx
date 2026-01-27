import { useEffect, useState } from "react";
import "../styles/animations.css";
import "../styles/layout.css";

export default function Portfolio() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById("portfolio");
      if (element) {
        const top = element.getBoundingClientRect().top;
        const threshold = window.innerHeight * 0.75;
        if (top < threshold) {
          setVisible(true);
        }
      }
    };
    
    onScroll(); // Check on mount
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const projects = [
    {
      title: "Project Alpha",
      description: "A cutting-edge web application built with React and TypeScript, featuring real-time data synchronization and modern UI/UX."
    },
    {
      title: "Project Beta",
      description: "Full-stack e-commerce platform with payment integration, inventory management, and responsive design."
    },
    {
      title: "Project Gamma",
      description: "AI-powered analytics dashboard with interactive visualizations and predictive modeling capabilities."
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-content">
        <h2 className={visible ? "fade-in" : ""}>My Portfolio</h2>
        <p className={visible ? "fade-in-delay-1" : ""}>
          Crafting digital experiences with passion and precision
        </p>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`portfolio-item ${visible ? "fade-in-delay-2" : ""}`}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
