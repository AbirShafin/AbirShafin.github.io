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
      title: "Project - ToDoApp",
      description: "A to do app with auth feature.",
      link: "https://todo-app-shafin141.vercel.app/"
    },
    {
      title: "Project - Simple calculator",
      description: "A simple calculator I made with React as a project for submission to get into BUCC R&D department.",
      link: "https://simple-calculator-shafin141.vercel.app/"
    },
    {
      title: "Project Gamma",
      description: "There is no project Gamma.",
      link: undefined
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section" >
      <div className="portfolio-content">
        <h2 className={visible ? "fade-in" : ""}>My Portfolio</h2>
        <p className={visible ? "fade-in-delay-1" : ""}>
          I like to learn new things, and get good at them if I enjoy it.
          I am from Dhaka, Bangladesh. I did my SSC from Motijheel Govt. Boys High School & HSC on Science from Dhaka City College.
          I am currently studying CSE in Brac University. Studying DSA currently and loving it!
        </p>
        
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`portfolio-item ${visible ? "fade-in-delay-2" : ""}`}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#010cea', textDecoration: 'none', marginTop: '0.5rem', display: 'inline-block' }}
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
