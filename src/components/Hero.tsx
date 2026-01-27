import "../styles/animations.css";
import "../styles/layout.css";

export default function Hero() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-image slide-in-left">
          <img src={`${baseUrl}abir.jpg`} alt="Abdullah Al Abir Shafin" />
        </div>
        <div className="hero-text slide-in-right">
          <h1 className="glow-hover" style={{ fontSize: "2rem", color: "#333" }}>Abdullah Al Abir Shafin</h1>
          <p>Full Stack Developer • Creative Problem Solver</p>
          <p>CSE Student • Brac University</p>
        </div>
      </div>
    </section>
  );
}
