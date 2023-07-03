import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faSquareJs, faSquareGithub, faApple, faReact } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";

function SkillsContainer() {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const containerElement = containerRef.current;
        observer.observe(containerElement);

        return () => {
            observer.unobserve(containerElement);
        };
    }, []);

    return (
        <section ref={containerRef} className="hidden">

    <div className="skills-container container">
        <div className="skills justify-content-center">
          <div className="skills-row row d-flex">
            <div className="col skill-item bg-gris">
              <FontAwesomeIcon icon={faHtml5} className="fa-2xl" style={{ color: "#181818" }} />
            </div>
            <div className="col skill-item bg-gris">
              <FontAwesomeIcon icon={faCss3Alt} className="fa-2xl" style={{ color: "#181818" }} />
            </div>
            <div className="col skill-item bg-gris">
              <FontAwesomeIcon icon={faSquareJs} className="fa-2xl" style={{ color: "#181818" }} />
            </div>
            <div className="col skill-item bg-gris">
              <FontAwesomeIcon icon={faSquareGithub} className="fa-2xl" style={{ color: "#181818" }} />
            </div>
          </div>
          <div className="skills-row row">
            <div className="col skill-item bg-gris">
              <FontAwesomeIcon icon={faApple} className="fa-2xl" style={{ color: "#181818" }} />
            </div>
            <div className="col skill-item bg-gris">
              <FontAwesomeIcon icon={faReact} className="fa-2xl" style={{ color: "#181818" }} />
            </div>
            <div className="col skill-item bg-gris">col</div>
            <div className="col skill-item bg-gris">col</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsContainer;